import Lenis from "lenis";

export class ScrollManager {
  private prefersReducedMotion: boolean;
  private scrollTopBtn: HTMLButtonElement | null;
  private abortController: AbortController;
  private lenisInstance: Lenis | null = null;
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
    if (this.prefersReducedMotion || !Lenis) return;

    this.lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const raf = (time: number) => {
      this.lenisInstance?.raf(time);
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
            this.lenisInstance?.scrollTo(targetElement as HTMLElement);
          }
        }
      });
    });
  }

  private setupScrollToTop(): void {
    const { signal } = this.abortController;

    if (!this.scrollTopBtn) return;

    const sentinel = document.createElement("div");
    Object.assign(sentinel.style, {
      position: "absolute",
      top: "300px",
      left: "0",
      width: "1px",
      height: "1px",
      pointerEvents: "none",
      visibility: "hidden",
    });
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrolled =
          entry.boundingClientRect.top <= 0 && !entry.isIntersecting;
        this.toggleScrollButton(isScrolled);
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    observer.observe(sentinel);

    // Cleanup when aborted
    signal.addEventListener("abort", () => {
      observer.disconnect();
      sentinel.remove();
    });

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
