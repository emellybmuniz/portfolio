import { BaseElement } from "../custom-elements/base-element";

export class PortfolioCarousel extends BaseElement {
  private carousel: HTMLElement | null = null;
  private dotsContainer: HTMLElement | null = null;
  private paginationContainer: HTMLElement | null = null;

  private cachedCardWidth = 0;
  private cachedMaxScroll = 0;
  private cachedCount = 0;
  private activeIndex = 0;
  private isTicking = false;

  private resizeObserver: ResizeObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  constructor() {
    super(false);
  }

  protected render(): void {
    this.carousel = this.querySelector("[data-carousel-grid]");
    this.dotsContainer = this.querySelector("[data-carousel-dots]");
    this.paginationContainer = this.querySelector("[data-carousel-pagination]");
  }

  protected setupListeners(): void {
    if (!this.carousel || !this.dotsContainer || !this.paginationContainer)
      return;

    this.resizeObserver = new ResizeObserver(() => {
      this.updateCache();
    });
    this.resizeObserver.observe(this.carousel);

    this.carousel.addEventListener("scroll", this.handleScroll.bind(this), {
      passive: true,
    });

    this.mutationObserver = new MutationObserver(() => {
      this.carousel?.scrollTo({ left: 0, behavior: "smooth" });
      this.updateCache();
    });

    this.mutationObserver.observe(this.carousel, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    this.updateCache();
  }

  protected removeListeners(): void {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    // removeEventListener is tricky with bind, but BaseElement isn't destroyed in this app
  }

  private updateCache(): void {
    if (!this.carousel) return;

    const cards = Array.from(this.carousel.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && !child.classList.contains("is-hidden"),
    );

    this.cachedCount = cards.length;

    if (this.cachedCount > 0) {
      const firstCard = cards[0];
      this.cachedCardWidth =
        firstCard.offsetWidth +
        parseFloat(getComputedStyle(this.carousel).gap || "0");
      this.cachedMaxScroll =
        this.carousel.scrollWidth - this.carousel.clientWidth;
    } else {
      this.cachedCardWidth = 0;
      this.cachedMaxScroll = 0;
    }

    requestAnimationFrame(() => this.renderDots());
  }

  private renderDots(): void {
    if (!this.paginationContainer || !this.dotsContainer) return;

    if (this.cachedCount <= 1) {
      this.paginationContainer.style.display = "none";
      return;
    } else {
      this.paginationContainer.style.display = "";
    }

    if (this.dotsContainer.children.length !== this.cachedCount) {
      this.dotsContainer.innerHTML = "";
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < this.cachedCount; i++) {
        const dot = document.createElement("span");
        dot.className = "certificates__dot";
        if (i === 0) dot.classList.add("certificates__dot--active");
        dot.id = `carousel-dot-${i}`;
        fragment.appendChild(dot);
      }
      this.dotsContainer.appendChild(fragment);
    }

    this.updateActiveDot();
  }

  private updateActiveDot(): void {
    if (this.cachedCount <= 1) return;

    for (let i = 0; i < this.cachedCount; i++) {
      const dot = document.getElementById(`carousel-dot-${i}`);
      if (dot) {
        if (i === this.activeIndex) {
          dot.classList.add("certificates__dot--active");
        } else {
          dot.classList.remove("certificates__dot--active");
        }
      }
    }
  }

  private handleScroll(): void {
    if (this.cachedCount === 0 || this.cachedCardWidth === 0 || !this.carousel)
      return;

    const scrollPosition = this.carousel.scrollLeft;

    if (scrollPosition >= this.cachedMaxScroll - 10) {
      this.activeIndex = this.cachedCount - 1;
    } else {
      this.activeIndex = Math.max(
        0,
        Math.min(
          this.cachedCount - 1,
          Math.round(scrollPosition / this.cachedCardWidth),
        ),
      );
    }

    if (!this.isTicking) {
      window.requestAnimationFrame(() => {
        this.updateActiveDot();
        this.isTicking = false;
      });
      this.isTicking = true;
    }
  }
}

if (!customElements.get("portfolio-carousel")) {
  customElements.define("portfolio-carousel", PortfolioCarousel);
}
