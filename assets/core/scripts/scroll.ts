declare let Lenis: any;

export class ScrollManager {
  private prefersReducedMotion: boolean;
  private scrollTopBtn: HTMLButtonElement | null;
  private abortController: AbortController;
  private lenisInstance: any = null;
  private rafId: number | null = null;

  constructor() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.scrollTopBtn = (
      document.getElementById("scrollTopBtn") instanceof HTMLButtonElement
        ? document.getElementById("scrollTopBtn")
        : null
    ) as HTMLButtonElement | null;
    this.abortController = new AbortController();
  }

  public init(): void {
    this.setupSmoothScroll();
    this.setupScrollToTop();
  }

  public destroy(): void {
    this.abortController.abort();
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
    }
    if (this.lenisInstance) {
      this.lenisInstance.destroy();
    }
  }

  private setupSmoothScroll(): void {
    if (this.prefersReducedMotion || typeof Lenis === "undefined") return;

    this.lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      this.lenisInstance.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };

    this.rafId = requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e: Event) => {
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href",
        );
        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            this.lenisInstance.scrollTo(targetElement);
          }
        }
      });
    });
  }

  private setupScrollToTop(): void {
    const { signal } = this.abortController;

    if (!this.scrollTopBtn) return;

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const isScrolled = window.scrollY > 300;
            this.toggleScrollButton(isScrolled);
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true, signal },
    );

    this.scrollTopBtn.addEventListener(
      "click",
      () => {
        if (this.lenisInstance) {
          this.lenisInstance.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      { signal },
    );
  }

  private toggleScrollButton(isVisible: boolean): void {
    if (!this.scrollTopBtn) return;
    if (isVisible) {
      this.scrollTopBtn.classList.add("show");
    } else {
      this.scrollTopBtn.classList.remove("show");
    }
  }
}
