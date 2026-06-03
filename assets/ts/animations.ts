import { throttle } from "./utils/throttle";

export class AnimationManager {
  private prefersReducedMotion: boolean;
  private isMobileTouch: boolean;
  private abortController: AbortController;
  private observer: IntersectionObserver | null = null;
  private frameId: number | null = null;
  private mouseFrameId: number | null = null;

  constructor() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.isMobileTouch = window.matchMedia("(pointer: coarse)").matches;
    this.abortController = new AbortController();
  }

  public init(): void {
    this.setupIntersectionObserver();

    if (!this.isMobileTouch) {
      this.setupDriveScroll();
      this.setupMouseLight();
    }
  }

  public destroy(): void {
    this.abortController.abort();
    if (this.observer) this.observer.disconnect();
    if (this.frameId !== null) cancelAnimationFrame(this.frameId);
    if (this.mouseFrameId !== null) cancelAnimationFrame(this.mouseFrameId);
  }

  private setupIntersectionObserver(): void {
    const options = {
      threshold: 0.0,
      rootMargin: "0px 0px -50px 0px",
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const observeOnce = el.dataset.observeOnce === "true";
        const staggerOnce = el.dataset.staggerOnce === "true";
        const animateClass = el.dataset.animate;
        const isStagger = el.dataset.stagger === "true";

        if (isStagger) {
          const items = Array.from(
            el.querySelectorAll<HTMLElement>("[data-stagger-item]"),
          );

          if (entry.isIntersecting) {
            el.classList.add("in-view");
            items.forEach((item, idx) => {
              const delay = idx * 115;
              item.style.transitionDelay = `${delay}ms`;
              item.classList.add("in-view");
            });

            if (staggerOnce && this.observer) {
              this.observer.unobserve(el);
            }
          } else {
            if (staggerOnce) return;
            el.classList.remove("in-view");
            items.forEach((item) => {
              item.style.transitionDelay = "";
              item.classList.remove("in-view");
            });
          }
        } else {
          el.classList.toggle("in-view", entry.isIntersecting);
          if (animateClass) {
            el.classList.toggle(animateClass, entry.isIntersecting);
          }
          if (entry.isIntersecting && observeOnce && this.observer) {
            this.observer.unobserve(el);
          }
        }
      });
    }, options);

    document
      .querySelectorAll(
        "[data-observe], [data-stagger], [data-animate], [data-observe-once], [data-stagger-once]",
      )
      .forEach((el) => {
        if (this.observer) this.observer.observe(el);
      });
  }

  private setupDriveScroll(): void {
    if (this.prefersReducedMotion) return;

    // Fallback to JS if CSS Scroll-Driven Animations are not supported
    if (CSS.supports("animation-timeline", "view()")) {
      const parallaxEls = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]"),
      );
      parallaxEls.forEach((el) => {
        const speed = el.dataset.parallaxSpeed || "0.12";
        el.style.setProperty("--parallax-speed", speed);
      });
      return;
    }

    const { signal } = this.abortController;

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const update = () => {
      this.frameId = null;
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.max(0, Math.min(1, scrollY / docHeight));

      document.documentElement.style.setProperty(
        "--scroll-y",
        `${Math.round(scrollY)}px`,
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress.toFixed(4)}`,
      );

      const viewportCenter = window.innerHeight / 2;

      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.12");
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = elCenter - viewportCenter;
        const translateY = -distance * speed;
        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    const schedule = () => {
      if (this.frameId !== null) return;
      this.frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true, signal });

    let resizeTimer: number;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          schedule();
        }, 100);
      },
      { passive: true, signal },
    );

    schedule();
  }

  private setupMouseLight(): void {
    if (!document.body) return;
    const { signal } = this.abortController;

    const mouseSurface = document.documentElement;
    const lightPos = { x: -1000, y: -1000 };
    const targetPos = { x: -1000, y: -1000 };

    const setMousePosition = (x: number, y: number): void => {
      mouseSurface.style.setProperty("--mouse-x", `${Math.round(x)}px`);
      mouseSurface.style.setProperty("--mouse-y", `${Math.round(y)}px`);
    };

    const updateLightPosition = () => {
      lightPos.x = targetPos.x;
      lightPos.y = targetPos.y;
      setMousePosition(lightPos.x, lightPos.y);

      if (this.mouseFrameId) {
        cancelAnimationFrame(this.mouseFrameId);
        this.mouseFrameId = null;
      }
    };

    const pointerHandler = throttle((e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;

      if (!this.mouseFrameId) {
        this.mouseFrameId = requestAnimationFrame(updateLightPosition);
      }
    }, 32);

    document.addEventListener("mousemove", pointerHandler as EventListener, {
      passive: true,
      signal,
    });
    setMousePosition(targetPos.x, targetPos.y);
  }
}
