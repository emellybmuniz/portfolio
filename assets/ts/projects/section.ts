import { splitTokens } from "../utils/string";
import { qAll, q } from "../utils/dom";

export class ProjectsSection {
  private elements: {
    filterButtons: HTMLButtonElement[];
    projectCards: HTMLElement[];
    projectsGrid: HTMLElement | null;
    expandButton: HTMLButtonElement | null;
    expandCount: HTMLElement | null;
    allProjectsLink: HTMLAnchorElement | null;
  };
  private activeCategory: string;
  private visibleProjectCount: number;
  private readonly featuredProjectBatchSize = 3;
  private hasExpandedFeaturedProjects = false;

  constructor() {
    this.elements = {
      filterButtons: qAll<HTMLButtonElement>(".projects__filter-btn"),
      projectCards: qAll<HTMLElement>(".projects__grid-item"),
      projectsGrid: q<HTMLElement>("[data-projects-grid]"),
      expandButton: document.querySelector<HTMLButtonElement>(
        ".projects__expand-btn",
      ),
      expandCount: document.querySelector<HTMLElement>(
        ".projects__expand-count",
      ),
      allProjectsLink: document.querySelector<HTMLAnchorElement>(
        ".projects__all-link",
      ),
    };
    this.activeCategory = "all";
    this.visibleProjectCount = this.elements.expandButton
      ? this.featuredProjectBatchSize
      : Number.POSITIVE_INFINITY;
    this.init();
  }

  private init(): void {
    this.syncExpandCount(0, 0);
    this.setupFilters();

    if (this.elements.expandButton) {
      this.elements.expandButton.addEventListener("click", () => {
        this.hasExpandedFeaturedProjects = true;
        this.visibleProjectCount += this.featuredProjectBatchSize;
        this.renderProjects();
      });
    }

    this.renderProjects();
  }

  private setupFilters(): void {
    this.elements.filterButtons?.forEach((button) => {
      const isActive = button.classList.contains(
        "projects__filter-btn--active",
      );
      button.setAttribute("aria-pressed", String(isActive));

      button.addEventListener("click", () => {
        const category = button.dataset.category;
        if (category) {
          this.handleFilterClick(category, button);
        }
      });
    });
  }

  private handleFilterClick(
    categoryId: string,
    clickedButton: HTMLButtonElement,
  ): void {
    this.activeCategory = categoryId;
    this.hasExpandedFeaturedProjects = false;
    this.visibleProjectCount = this.elements.expandButton
      ? this.featuredProjectBatchSize
      : Number.POSITIVE_INFINITY;

    this.elements.filterButtons?.forEach((button) => {
      button.classList.remove("projects__filter-btn--active");
      button.setAttribute("aria-pressed", "false");
    });
    clickedButton.classList.add("projects__filter-btn--active");
    clickedButton.setAttribute("aria-pressed", "true");

    this.renderProjects();
  }

  private renderProjects(): void {
    const filteredCards = this.elements.projectCards.filter((card) => {
      const categories = splitTokens(card.dataset.category);
      return (
        this.activeCategory === "all" ||
        categories.includes(this.activeCategory)
      );
    });

    this.elements.projectCards.forEach((card) =>
      card.classList.add("is-hidden"),
    );

    const cardsToShow = filteredCards.slice(0, this.visibleProjectCount);
    this.elements.projectCards.forEach((card) => {
      const shouldShow = cardsToShow.includes(card);

      card.classList.toggle("is-hidden", !shouldShow);
      card.classList.toggle("projects__grid-item--revealed", shouldShow);
      card.classList.toggle("projects__grid-item--collapsed", !shouldShow);
    });

    const remainingProjects = filteredCards.length - cardsToShow.length;
    this.syncExpandCount(filteredCards.length, remainingProjects);

    if (!this.elements.expandButton || !this.elements.allProjectsLink) {
      return;
    }

    if (remainingProjects > 0) {
      this.elements.expandButton.style.display = "inline-flex";
      this.elements.allProjectsLink.classList.remove(
        "projects__all-link--visible",
      );
    } else {
      this.elements.expandButton.style.display = "none";
      const shouldRevealAllProjectsLink =
        filteredCards.length > 0 &&
        (filteredCards.length <= this.featuredProjectBatchSize ||
          this.hasExpandedFeaturedProjects);

      this.elements.allProjectsLink.classList.toggle(
        "projects__all-link--visible",
        shouldRevealAllProjectsLink,
      );
    }
  }

  private syncExpandCount(
    totalProjects: number,
    remainingProjects: number,
  ): void {
    if (!this.elements.expandCount) {
      return;
    }

    if (totalProjects <= this.featuredProjectBatchSize) {
      this.elements.expandCount.textContent = "+0";
      return;
    }

    this.elements.expandCount.textContent = `+${remainingProjects}`;
  }
}

export default ProjectsSection;
