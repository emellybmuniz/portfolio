interface Skill {
  name: string;
  category: string[];
  icon: string;
  color?: { from: string; to: string };
}

import { qAll } from "./utils/dom";

class SkillsSection {
  private elements: {
    filtersContainer: HTMLElement | null;
    skillsGrid: HTMLElement | null;
    filterButtons: HTMLButtonElement[] | null;
  };
  private activeCategory: string;

  constructor() {
    this.elements = {
      filtersContainer: document.getElementById("skillFiltersDesktop"),
      skillsGrid: document.getElementById("skillsGrid"),
      filterButtons: qAll<HTMLButtonElement>(
        "#skillFiltersDesktop .skills__filter-btn",
      ),
    };
    this.activeCategory = "all";
    this.init();
  }

  private init(): void {
    if (
      !this.elements.filtersContainer ||
      !this.elements.skillsGrid ||
      !this.elements.filterButtons
    ) {
      return;
    }
    this.setupFilters();
    this.applySkillGradients();
    this.renderSkills();
  }

  private applySkillGradients(): void {
    if (!this.elements.skillsGrid) return;

    const gradientNodes =
      this.elements.skillsGrid.querySelectorAll<HTMLElement>(
        ".skill-card__icon-bg",
      );

    gradientNodes.forEach((node) => {
      const gradient = node.dataset.gradient;

      if (gradient) {
        node.style.backgroundImage = gradient;
      }
    });
  }

  private setupFilters(): void {
    this.elements.filterButtons?.forEach((button) => {
      const isActive = button.classList.contains("skills__filter-btn--active");
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

    this.elements.filterButtons?.forEach((button) => {
      button.classList.remove("skills__filter-btn--active");
      button.setAttribute("aria-pressed", "false");
    });
    clickedButton.classList.add("skills__filter-btn--active");
    clickedButton.setAttribute("aria-pressed", "true");

    this.renderSkills();
  }

  private renderSkills(): void {
    if (!this.elements.skillsGrid) return;

    const skillCards = qAll<HTMLElement>(
      ".skill-card",
      this.elements.skillsGrid as ParentNode,
    );

    skillCards.forEach((card) => {
      const categories = (card.dataset.category || "")
        .split(/\s+/)
        .filter(Boolean);
      const shouldShow =
        this.activeCategory === "all" ||
        categories.includes(this.activeCategory);

      card.classList.toggle("skill-card--hidden", !shouldShow);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("skills")) {
      new SkillsSection();
    }
  });
} else {
  if (document.getElementById("skills")) {
    new SkillsSection();
  }
}
