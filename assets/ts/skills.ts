import { qAll } from "./utils/dom";

/**
 * Handles behaviors specific to the Skills section that are not covered
 * by the generic content filter, such as:
 * - Applying CSS gradients to skill card icons.
 * - Managing the UI for the mobile filter dropdown menu.
 */
class SkillsSection {
  private elements: {
    skillsGrid: HTMLElement | null;
    mobileToggle: HTMLButtonElement | null;
    filterMenu: HTMLElement | null;
    allFilterButtons: HTMLButtonElement[];
  };

  constructor() {
    this.elements = {
      skillsGrid: document.getElementById("skillsGrid"),
      mobileToggle: document.getElementById(
        "skillFiltersMobileToggle",
      ) as HTMLButtonElement,
      filterMenu: document.getElementById("skillFiltersMobileMenu"),
      allFilterButtons: qAll<HTMLButtonElement>(".skills__filter-btn"),
    };
    this.init();
  }

  private init(): void {
    this.applySkillGradients();
    this.setupMobileFilterInteraction();
  }

  /**
   * Applies the gradient background to each skill card icon.
   */
  private applySkillGradients(): void {
    if (!this.elements.skillsGrid) return;

    const gradientNodes = qAll<HTMLElement>(
      ".skill-card__icon-bg",
      this.elements.skillsGrid,
    );

    gradientNodes.forEach((node) => {
      const gradient = node.dataset.gradient;
      if (gradient) {
        node.style.backgroundImage = gradient;
      }
    });
  }

  /**
   * Manages the UI interactions for the mobile filter dropdown.
   * The core filtering logic is handled by `content-filters.ts`.
   */
  private setupMobileFilterInteraction(): void {
    const { mobileToggle, filterMenu, allFilterButtons } = this.elements;
    if (!mobileToggle || !filterMenu) return;

    mobileToggle.addEventListener("click", () => {
      const isOpen = filterMenu.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    allFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.updateMobileToggleLabel(button.textContent || "Todas");
        this.closeMobileMenu();
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target as Node;
      const isClickInside =
        mobileToggle.contains(target) || filterMenu.contains(target);
      if (!isClickInside) {
        this.closeMobileMenu();
      }
    });
  }

  private closeMobileMenu(): void {
    if (this.elements.filterMenu?.classList.contains("is-open")) {
      this.elements.filterMenu.classList.remove("is-open");
      this.elements.mobileToggle?.setAttribute("aria-expanded", "false");
    }
  }

  private updateMobileToggleLabel(label: string): void {
    if (this.elements.mobileToggle) {
      const labelSpan =
        this.elements.mobileToggle.querySelector(".current-category");
      if (labelSpan) {
        labelSpan.textContent = label.trim();
      }
    }
  }
}

function initializeSkillsSection(): void {
  if (document.getElementById("skills")) {
    new SkillsSection();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSkillsSection);
} else {
  initializeSkillsSection();
}
