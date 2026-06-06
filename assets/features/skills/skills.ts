import { qAll } from "../../core/utils/dom";
import { Drawer } from "../../shared/ui/drawer/drawer";

type DrawerCategoryId = "all" | "frontend" | "backend" | "tools" | "design";

interface SkillData {
  name: string;
  icon: string;
  categories: DrawerCategoryId[];
  colorFrom: string;
  colorTo: string;
  iconSrc: string;
}

interface SkillsElements {
  section: HTMLElement | null;
  skillsGrid: HTMLElement | null;
  mobileToggle: HTMLButtonElement | null;
  filterMenu: HTMLElement | null;
  allFilterButtons: HTMLButtonElement[];
  mobileCategoryButtons: HTMLButtonElement[];
}

/**
 * manage section behavior
 * filtering logic kept in content-filters.ts
 */
class SkillsSection {
  private elements: SkillsElements;
  private skillsData: SkillData[] = [];
  private drawer: Drawer;

  constructor() {
    this.elements = {
      section: document.querySelector(".skills"),
      skillsGrid: document.getElementById("skillsGrid"),
      mobileToggle: (document.getElementById(
        "skillFiltersMobileToggle",
      ) instanceof HTMLButtonElement
        ? document.getElementById("skillFiltersMobileToggle")
        : null) as HTMLButtonElement | null,
      filterMenu: document.getElementById("skillFiltersMobileMenu"),
      allFilterButtons: qAll<HTMLButtonElement>(".skills__filter-btn"),
      mobileCategoryButtons: qAll<HTMLButtonElement>(".skills__mobile-cat-btn"),
    };

    this.drawer = new Drawer({ idPrefix: "skills" });
    this.init();
  }

  private init(): void {
    this.collectSkillsData();
    this.applySkillGradients();
    this.setupMobileFilterInteraction();
    this.setupDrawer();
  }

  /**
   * cache dataset from DOM to avoid redundant reads
   */
  private collectSkillsData(): void {
    if (!this.elements.skillsGrid) return;

    const cards = qAll<HTMLElement>(".skill-card", this.elements.skillsGrid);

    this.skillsData = cards.map((card) => {
      const img = card.querySelector<HTMLImageElement>("img");
      const rawCategories = (card.dataset.category ?? "")
        .split(/\s+/)
        .filter(Boolean) as DrawerCategoryId[];

      return {
        name: card.dataset.skillName ?? "",
        icon: card.dataset.skillIcon ?? "",
        categories: rawCategories,
        colorFrom: card.dataset.skillColorFrom ?? "#9ca3af",
        colorTo: card.dataset.skillColorTo ?? "#4b5563",
        iconSrc: img?.src ?? "",
      };
    });
  }

  private applySkillGradients(): void {
    if (!this.elements.skillsGrid) return;

    qAll<HTMLElement>(".skill-card__icon-bg", this.elements.skillsGrid).forEach(
      (node) => {
        const gradient = node.dataset.gradient;
        if (gradient) {
          node.style.backgroundImage = gradient;
        }
      },
    );
  }

  private setupMobileFilterInteraction(): void {
    const { mobileToggle, filterMenu, allFilterButtons } = this.elements;
    if (!mobileToggle || !filterMenu) return;

    mobileToggle.addEventListener("click", () => {
      const isOpen = filterMenu.classList.toggle("is-open");
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });

    allFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.updateMobileToggleLabel(button.textContent ?? "Todas");
        this.closeMobileMenu();
      });
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      const isClickInside =
        mobileToggle.contains(target) || filterMenu.contains(target);
      if (!isClickInside) {
        this.closeMobileMenu();
      }
    });
  }

  private closeMobileMenu(): void {
    const { filterMenu, mobileToggle } = this.elements;
    if (filterMenu?.classList.contains("is-open")) {
      filterMenu.classList.remove("is-open");
      mobileToggle?.setAttribute("aria-expanded", "false");
    }
  }

  private updateMobileToggleLabel(label: string): void {
    const labelSpan =
      this.elements.mobileToggle?.querySelector(".current-category");
    if (labelSpan) {
      labelSpan.textContent = label.trim();
    }
  }

  private setupDrawer(): void {
    const { mobileCategoryButtons } = this.elements;

    if (mobileCategoryButtons.length === 0) {
      return;
    }

    mobileCategoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const categoryId = btn.dataset.drawerTrigger as
          | DrawerCategoryId
          | undefined;
        if (categoryId) {
          this.openDrawer(categoryId);
        }
      });
    });
  }

  private openDrawer(categoryId: DrawerCategoryId): void {
    const { titleEl, descEl, listEl } = this.drawer;

    if (!titleEl || !descEl || !listEl) return;

    const filtered =
      categoryId === "all"
        ? this.skillsData
        : this.skillsData.filter((s) => s.categories.includes(categoryId));

    const triggerBtn = this.elements.mobileCategoryButtons.find(
      (b) => b.dataset.drawerTrigger === categoryId,
    );
    const iconClone = triggerBtn
      ?.querySelector(".skills__mobile-cat-btn-icon")
      ?.cloneNode(true);
    const labelText =
      triggerBtn
        ?.querySelector(".skills__mobile-cat-btn-label")
        ?.textContent?.trim() ?? categoryId;

    titleEl.textContent = "";
    if (iconClone) {
      titleEl.appendChild(iconClone);
    }
    titleEl.append(` ${labelText}`);

    const count = filtered.length;
    const countLabel =
      count === 1
        ? (descEl.dataset.singular ?? "skill nesta categoria")
        : (descEl.dataset.plural ?? "skills nesta categoria");
    descEl.textContent = `${count} ${countLabel}`;

    listEl.innerHTML = "";
    const fragment = document.createDocumentFragment();

    filtered.forEach((skill) => {
      const badge = document.createElement("div");
      badge.className = "drawer__badge";
      badge.style.backgroundImage = `linear-gradient(to bottom right, ${skill.colorFrom}, ${skill.colorTo})`;
      badge.style.color = this.getTextColor(skill.colorFrom);

      if (skill.iconSrc) {
        const img = document.createElement("img");
        img.src = skill.iconSrc;
        img.alt = skill.name;
        img.width = 24;
        img.height = 24;
        badge.appendChild(img);
      }

      badge.append(skill.name);
      fragment.appendChild(badge);
    });

    listEl.appendChild(fragment);
    this.drawer.open();
  }

  /**
   * fallback to black/white text depending on relative luminance
   */
  private getTextColor(hex: string): string {
    if (!hex || hex.length < 7) return "#ffffff";
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#111827" : "#ffffff";
  }
}

function initializeSkillsSection(): void {
  if (document.querySelector(".skills")) {
    new SkillsSection();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSkillsSection);
} else {
  initializeSkillsSection();
}
