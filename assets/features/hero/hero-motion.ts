import { throttle } from "../../core/utils/throttle";

export class HeroMotion {
  private prefersReducedMotion: boolean;
  private isMobileTouch: boolean;
  private abortController: AbortController;
  private frameId: number | null = null;

  private targetX = 0;
  private targetY = 0;
  private hero: HTMLElement | null;

  constructor() {
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.isMobileTouch = window.matchMedia("(pointer: coarse)").matches;
    this.abortController = new AbortController();
    this.hero = document.querySelector<HTMLElement>(".hero");
  }

  public init(): void {
    const img = document.querySelector<HTMLImageElement>(".hero__photo");
    if (img) {
      if (img.complete) {
        img.classList.add("is-loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("is-loaded"), {
          once: true,
        });
      }
    }

    if (this.prefersReducedMotion || this.isMobileTouch || !this.hero) return;
    this.setupHeroMotion();
  }

  public destroy(): void {
    this.abortController.abort();
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  private setupHeroMotion(): void {
    const { signal } = this.abortController;
    const heroContent = this.hero?.querySelector<HTMLElement>(".hero__content");
    const heroMedia = this.hero?.querySelector<HTMLElement>(".hero__media");

    if (!heroContent || !heroMedia || !this.hero) return;

    this.targetX = this.hero.clientWidth / 2;
    this.targetY = this.hero.clientHeight / 2;

    const updateMotion = () => {
      this.frameId = null;
      if (!this.hero) return;

      const rect = this.hero.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      const centerX = width / 2;
      const centerY = height / 2;

      const pointerOffsetX = (this.targetX - centerX) / width;
      const pointerOffsetY = (this.targetY - centerY) / height;
      const scrollProgress = Math.max(
        -1,
        Math.min(1, -rect.top / Math.max(rect.height, 1)),
      );

      this.hero.style.setProperty(
        "--hero-content-x",
        `${(pointerOffsetX * 8).toFixed(2)}px`,
      );
      this.hero.style.setProperty(
        "--hero-content-y",
        `${(pointerOffsetY * 6 - scrollProgress * 6).toFixed(2)}px`,
      );
      this.hero.style.setProperty(
        "--hero-media-x",
        `${(pointerOffsetX * 18).toFixed(2)}px`,
      );
      this.hero.style.setProperty(
        "--hero-media-y",
        `${(pointerOffsetY * 12 + scrollProgress * 14).toFixed(2)}px`,
      );
      this.hero.style.setProperty(
        "--hero-photo-tilt",
        `${(pointerOffsetX * 3).toFixed(2)}deg`,
      );
    };

    const scheduleUpdate = () => {
      if (this.frameId !== null) return;
      this.frameId = window.requestAnimationFrame(updateMotion);
    };

    const handlePointerMove = throttle((event: PointerEvent) => {
      if (!this.hero) return;
      const rect = this.hero.getBoundingClientRect();
      this.targetX = event.clientX - rect.left;
      this.targetY = event.clientY - rect.top;
      scheduleUpdate();
    }, 32);

    this.hero.addEventListener(
      "pointermove",
      handlePointerMove as EventListener,
      { passive: true, signal },
    );

    this.hero.addEventListener(
      "pointerleave",
      () => {
        if (!this.hero) return;
        this.targetX = this.hero.clientWidth / 2;
        this.targetY = this.hero.clientHeight / 2;
        scheduleUpdate();
      },
      { passive: true, signal },
    );

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
      signal,
    });

    let resizeTimer: number;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          scheduleUpdate();
        }, 100);
      },
      { passive: true, signal },
    );

    scheduleUpdate();
  }
}
