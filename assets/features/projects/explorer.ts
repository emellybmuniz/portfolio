import { normalize, splitTokens } from "../../core/utils/string";

type ProjectsSortMode = "recent" | "oldest" | "title" | "featured";

export class ProjectsExplorer {
  private readonly elements: {
    cards: HTMLElement[];
    searchInput: HTMLInputElement | null;
    techSelect: HTMLSelectElement | null;
    categorySelect: HTMLSelectElement | null;
    demoSelect: HTMLSelectElement | null;
    sortSelect: HTMLSelectElement | null;
    clearButton: HTMLButtonElement | null;
    count: HTMLElement | null;
    summary: HTMLElement | null;
    summaryText: HTMLElement | null;
    emptyState: HTMLElement | null;
    projectsGrid: HTMLElement | null;
    pagination: HTMLElement | null;
  };
  private lastControlUsed: HTMLElement | null = null;
  private currentPage: number = 1;
  private pageSize: number = 12;

  constructor(private readonly root: HTMLElement) {
    this.elements = {
      cards: Array.from(
        root.querySelectorAll<HTMLElement>("[data-project-item]"),
      ),
      searchInput: root.querySelector<HTMLInputElement>(
        "[data-projects-search]",
      ),
      techSelect: root.querySelector<HTMLSelectElement>("[data-projects-tech]"),
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
      summaryText: root.querySelector<HTMLElement>(
        "[data-projects-summary-text]",
      ),
      emptyState: root.querySelector<HTMLElement>("[data-projects-empty]"),
      projectsGrid: root.querySelector<HTMLElement>("[data-projects-grid]"),
      pagination: root.querySelector<HTMLElement>("[data-projects-pagination]"),
    };

    const rootPageSize = parseInt(this.root.dataset.pageSize || "12", 10);
    this.pageSize = isNaN(rootPageSize) ? 12 : rootPageSize;

    this.init();
  }

  private init(): void {
    this.elements.searchInput?.addEventListener("input", (event) => {
      const target = event.currentTarget;
      this.lastControlUsed = target instanceof HTMLElement ? target : null;
      this.currentPage = 1;
      this.render();
    });
    this.elements.techSelect?.addEventListener("change", (event) => {
      const target = event.currentTarget;
      this.lastControlUsed = target instanceof HTMLElement ? target : null;
      this.currentPage = 1;
      this.render();
    });
    this.elements.categorySelect?.addEventListener("change", (event) => {
      const target = event.currentTarget;
      this.lastControlUsed = target instanceof HTMLElement ? target : null;
      this.currentPage = 1;
      this.render();
    });
    this.elements.demoSelect?.addEventListener("change", (event) => {
      const target = event.currentTarget;
      this.lastControlUsed = target instanceof HTMLElement ? target : null;
      this.currentPage = 1;
      this.render();
    });
    this.elements.sortSelect?.addEventListener("change", (event) => {
      const target = event.currentTarget;
      this.lastControlUsed = target instanceof HTMLElement ? target : null;
      this.currentPage = 1;
      this.render();
    });

    this.elements.clearButton?.addEventListener("click", () => {
      this.lastControlUsed = this.elements.clearButton;
      if (this.elements.searchInput) this.elements.searchInput.value = "";
      if (this.elements.techSelect) this.elements.techSelect.value = "all";
      if (this.elements.categorySelect)
        this.elements.categorySelect.value = "all";
      if (this.elements.demoSelect) this.elements.demoSelect.value = "all";
      if (this.elements.sortSelect) this.elements.sortSelect.value = "recent";
      this.currentPage = 1;
      this.render();
    });

    this.render();
  }

  private getSortMode(): ProjectsSortMode {
    const value = this.elements.sortSelect?.value;
    if (
      value === "recent" ||
      value === "oldest" ||
      value === "title" ||
      value === "featured"
    ) {
      return value as ProjectsSortMode;
    }

    return "recent";
  }

  private render(): void {
    const searchTerm = normalize(this.elements.searchInput?.value || "");
    const techFilter = normalize(this.elements.techSelect?.value || "all");
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
        techFilter === "all" || technologies.includes(techFilter);
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

    const visibleCount = sortedCards.length;
    const totalPages = Math.ceil(visibleCount / this.pageSize);

    if (this.currentPage > totalPages && totalPages > 0) {
      this.currentPage = totalPages;
    }

    const paginatedCards = sortedCards.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize,
    );

    if (this.elements.projectsGrid) {
      this.elements.cards.forEach((card) => {
        if (!paginatedCards.includes(card)) {
          card.classList.add("projects__grid-item--hidden");
        } else {
          card.classList.remove("projects__grid-item--hidden");
        }
      });

      // appendChild reorders existing dom nodes
      paginatedCards.forEach((card) => {
        this.elements.projectsGrid?.appendChild(card);
      });
    }

    this.renderPagination(totalPages);

    if (this.elements.count) {
      this.elements.count.textContent = String(visibleCount);
    }

    if (this.elements.summary) {
      this.elements.summary.textContent = String(visibleCount);
    }

    if (this.elements.summaryText) {
      this.elements.summaryText.textContent =
        visibleCount === 1
          ? this.elements.summaryText.dataset.textSingular ||
            "projeto encontrado"
          : this.elements.summaryText.dataset.textPlural ||
            "projetos encontrados";
    }

    if (this.elements.emptyState) {
      this.elements.emptyState.classList.toggle("is-hidden", visibleCount > 0);
    }

    this.restoreFocusToControls();
  }

  private renderPagination(totalPages: number): void {
    if (!this.elements.pagination) return;

    this.elements.pagination.innerHTML = "";

    if (totalPages <= 1) {
      this.elements.pagination.classList.add("is-hidden");
      return;
    }

    this.elements.pagination.classList.remove("is-hidden");

    const prevBtn = document.createElement("button");
    prevBtn.className =
      "projects-explorer__pagination-btn projects-explorer__pagination-btn--prev";
    prevBtn.type = "button";
    prevBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
    prevBtn.setAttribute("aria-label", "Página anterior");
    prevBtn.disabled = this.currentPage === 1;
    prevBtn.addEventListener("click", () =>
      this.goToPage(this.currentPage - 1),
    );
    this.elements.pagination.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = "projects-explorer__pagination-btn";
      if (i === this.currentPage) {
        pageBtn.classList.add("is-active");
        pageBtn.setAttribute("aria-current", "page");
      }
      pageBtn.type = "button";
      pageBtn.textContent = String(i);
      pageBtn.addEventListener("click", () => this.goToPage(i));
      this.elements.pagination.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.className =
      "projects-explorer__pagination-btn projects-explorer__pagination-btn--next";
    nextBtn.type = "button";
    nextBtn.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
    nextBtn.setAttribute("aria-label", "Próxima página");
    nextBtn.disabled = this.currentPage === totalPages;
    nextBtn.addEventListener("click", () =>
      this.goToPage(this.currentPage + 1),
    );
    this.elements.pagination.appendChild(nextBtn);
  }

  private goToPage(page: number): void {
    this.currentPage = page;
    this.render();

    this.root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private restoreFocusToControls(): void {
    const activeElement = document.activeElement;
    if (!activeElement || !this.root.contains(activeElement)) {
      return;
    }

    if (
      (activeElement as HTMLElement).closest("[data-project-item]") ||
      (activeElement as HTMLElement).closest("[data-projects-pagination]")
    ) {
      const fallbackControl =
        this.lastControlUsed ||
        this.elements.techSelect ||
        this.elements.categorySelect ||
        this.elements.searchInput ||
        this.elements.clearButton;

      fallbackControl?.focus();
    }
  }
}

export default ProjectsExplorer;
