import { normalize, splitTokens } from "../utils/string";

type ProjectsSortMode = "recent" | "oldest" | "title" | "featured";

export class ProjectsExplorer {
  private readonly elements: {
    cards: HTMLElement[];
    searchInput: HTMLInputElement | null;
    techContainer: HTMLElement | null;
    categorySelect: HTMLSelectElement | null;
    demoSelect: HTMLSelectElement | null;
    sortSelect: HTMLSelectElement | null;
    clearButton: HTMLButtonElement | null;
    count: HTMLElement | null;
    summary: HTMLElement | null;
    emptyState: HTMLElement | null;
  };
  private lastControlUsed: HTMLElement | null = null;

  constructor(private readonly root: HTMLElement) {
    this.elements = {
      cards: Array.from(
        root.querySelectorAll<HTMLElement>("[data-project-item]"),
      ),
      searchInput: root.querySelector<HTMLInputElement>(
        "[data-projects-search]",
      ),
      techContainer: root.querySelector<HTMLElement>("[data-projects-tech]"),
      categorySelect: root.querySelector<HTMLSelectElement>(
        "[data-projects-category]",
      ),
      demoSelect: root.querySelector<HTMLSelectElement>("[data-projects-demo]"),
      sortSelect: root.querySelector<HTMLSelectElement>("[data-projects-sort]"),
      clearButton: root.querySelector<HTMLButtonElement>(
        "[data-projects-clear]",
      ),
      count: root.querySelector<HTMLElement>("[data-projects-count]"),
      summary: root.querySelector<HTMLElement>("[data-projects-summary]"),
      emptyState: root.querySelector<HTMLElement>("[data-projects-empty]"),
    };

    this.init();
  }

  private init(): void {
    this.elements.searchInput?.addEventListener("input", (event) => {
      this.lastControlUsed = event.currentTarget as HTMLElement;
      this.render();
    });
    this.elements.techContainer?.addEventListener("change", (event) => {
      const target = event.target as HTMLElement;
      if (target.matches('input')) {
        this.lastControlUsed = target;
        this.render();
      }
    });
    this.elements.categorySelect?.addEventListener("change", (event) => {
      this.lastControlUsed = event.currentTarget as HTMLElement;
      this.render();
    });
    this.elements.demoSelect?.addEventListener("change", (event) => {
      this.lastControlUsed = event.currentTarget as HTMLElement;
      this.render();
    });
    this.elements.sortSelect?.addEventListener("change", (event) => {
      this.lastControlUsed = event.currentTarget as HTMLElement;
      this.render();
    });

    this.elements.clearButton?.addEventListener("click", () => {
      this.lastControlUsed = this.elements.clearButton;
      if (this.elements.searchInput) this.elements.searchInput.value = "";
      if (this.elements.techContainer) {
        this.elements.techContainer
          .querySelectorAll<HTMLInputElement>('input')
          .forEach((cb) => {
            cb.checked = false;
          });
      }
      if (this.elements.categorySelect)
        this.elements.categorySelect.value = "all";
      if (this.elements.demoSelect) this.elements.demoSelect.value = "all";
      if (this.elements.sortSelect) this.elements.sortSelect.value = "recent";
      this.render();
    });

    this.render();
  }

  private getSortMode(): ProjectsSortMode {
    const value = this.elements.sortSelect?.value;
    if (value === "oldest" || value === "title" || value === "featured") {
      return value as ProjectsSortMode;
    }

    return "recent";
  }

  private render(): void {
    const searchTerm = normalize(this.elements.searchInput?.value || "");
    const techFilters = Array.from(
      this.elements.techContainer?.querySelectorAll<HTMLInputElement>(
        'input:checked',
      ) || [],
    ).map((input) => normalize(input.value));
    const categoryFilter = normalize(
      this.elements.categorySelect?.value || "all",
    );
    const demoFilter = this.elements.demoSelect?.value || "all";
    const sortMode = this.getSortMode();

    const filteredCards = this.elements.cards.filter((card) => {
      const searchable = normalize(card.dataset.searchable || "");
      const technologies = splitTokens(card.dataset.technologies);
      const categories = splitTokens(card.dataset.categories);
      const hasDemo = card.dataset.hasDemo === "yes";

      const matchesSearch = !searchTerm || searchable.includes(searchTerm);
      const matchesTech =
        techFilters.length === 0 ||
        technologies.some((t) => techFilters.includes(t));
      const matchesCategory =
        categoryFilter === "all" || categories.includes(categoryFilter);
      const matchesDemo =
        demoFilter === "all" ||
        (demoFilter === "yes" && hasDemo) ||
        (demoFilter === "no" && !hasDemo);

      return matchesSearch && matchesTech && matchesCategory && matchesDemo;
    });

    const sortedCards = [...filteredCards].sort((left, right) => {
      const leftTitle = normalize(left.dataset.title || "");
      const rightTitle = normalize(right.dataset.title || "");
      const leftDate = new Date(left.dataset.date || "").getTime();
      const rightDate = new Date(right.dataset.date || "").getTime();
      const leftFeatured = left.dataset.featured === "yes" ? 1 : 0;
      const rightFeatured = right.dataset.featured === "yes" ? 1 : 0;

      if (sortMode === "featured") {
        if (leftFeatured !== rightFeatured) {
          return rightFeatured - leftFeatured;
        }
        if (rightDate !== leftDate) {
          return rightDate - leftDate;
        }
        return leftTitle.localeCompare(rightTitle);
      }

      if (sortMode === "title") {
        return leftTitle.localeCompare(rightTitle);
      }

      if (sortMode === "oldest") {
        return leftDate - rightDate;
      }

      return rightDate - leftDate;
    });

    this.elements.cards.forEach((card) => {
      card.classList.add("is-hidden");
    });

    sortedCards.forEach((card) => {
      card.classList.remove("is-hidden");
    });

    const visibleCount = sortedCards.length;

    if (this.elements.count) {
      this.elements.count.textContent = String(visibleCount);
    }

    if (this.elements.summary) {
      this.elements.summary.textContent = String(visibleCount);
    }

    if (this.elements.emptyState) {
      this.elements.emptyState.classList.toggle("is-hidden", visibleCount > 0);
    }

    this.restoreFocusToControls();
  }

  private restoreFocusToControls(): void {
    const activeElement = document.activeElement;
    if (!activeElement || !this.root.contains(activeElement)) {
      return;
    }

    if ((activeElement as HTMLElement).closest("[data-project-item]")) {
      const fallbackControl =
        this.lastControlUsed ||
        this.elements.techContainer ||
        this.elements.categorySelect ||
        this.elements.searchInput ||
        this.elements.clearButton;

      fallbackControl?.focus();
    }
  }
}

export default ProjectsExplorer;
