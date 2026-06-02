import { qAll } from "./utils/dom";

// ── Tipos ────────────────────────────────────────────────────────────
type DrawerCategoryId = "all" | "frontend" | "backend" | "tools" | "design";

interface SkillData {
  name: string;
  /** Caminho relativo do ícone (ex: "html.svg") */
  icon: string;
  categories: DrawerCategoryId[];
  colorFrom: string;
  colorTo: string;
  /** Permalink completo gerado pelo Hugo */
  iconSrc: string;
}

interface SkillsElements {
  section: HTMLElement | null;
  skillsGrid: HTMLElement | null;
  // Desktop
  mobileToggle: HTMLButtonElement | null;
  filterMenu: HTMLElement | null;
  allFilterButtons: HTMLButtonElement[];
  // Mobile categories
  mobileCategoryButtons: HTMLButtonElement[];
  // Drawer
  drawerOverlay: HTMLElement | null;
  drawer: HTMLElement | null;
  drawerTitle: HTMLElement | null;
  drawerDesc: HTMLElement | null;
  drawerList: HTMLElement | null;
  drawerClose: HTMLButtonElement | null;
}

/**
 * Gerencia os comportamentos específicos da seção Skills:
 * - Gradientes nas cards do grid
 * - Dropdown de filtro mobile (legado)
 * - Drawer mobile de categorias (novo)
 *
 * A lógica central de filtragem das cards fica em `content-filters.ts`.
 */
class SkillsSection {
  private elements: SkillsElements;
  /** Cache de dados das skills coletados do DOM uma única vez. */
  private skillsData: SkillData[] = [];
  private previousFocus: HTMLElement | null = null;

  constructor() {
    this.elements = {
      section: document.getElementById("skills"),
      skillsGrid: document.getElementById("skillsGrid"),
      mobileToggle: document.getElementById(
        "skillFiltersMobileToggle",
      ) as HTMLButtonElement | null,
      filterMenu: document.getElementById("skillFiltersMobileMenu"),
      allFilterButtons: qAll<HTMLButtonElement>(".skills__filter-btn"),
      mobileCategoryButtons: qAll<HTMLButtonElement>(
        ".skills__mobile-cat-btn",
      ),
      drawerOverlay: document.getElementById("skillsDrawerOverlay"),
      drawer: document.getElementById("skillsDrawer"),
      drawerTitle: document.getElementById("skillsDrawerTitle"),
      drawerDesc: document.getElementById("skillsDrawerDesc"),
      drawerList: document.getElementById("skillsDrawerList"),
      drawerClose: document.getElementById(
        "skillsDrawerClose",
      ) as HTMLButtonElement | null,
    };

    this.init();
  }

  private init(): void {
    this.collectSkillsData();
    this.applySkillGradients();
    this.setupMobileFilterInteraction();
    this.hoistDrawerToBody();
    this.setupDrawer();
  }

  // ── Escape do contain: layout ──────────────────────────────────────

  /**
   * Move o overlay e o drawer para document.body.
   * A section tem `contain: layout paint style` (via mixin global), o que
   * quebra `position: fixed` — qualquer fixed filho fica relativo à section.
   * Mover para body garante que position:fixed ancore ao viewport.
   */
  private hoistDrawerToBody(): void {
    const { drawerOverlay, drawer } = this.elements;
    if (drawerOverlay) document.body.appendChild(drawerOverlay);
    if (drawer) document.body.appendChild(drawer);
  }

  // ── Coleta de dados ────────────────────────────────────────────────

  /**
   * Lê os data-attributes das cards do grid (renderizadas pelo Hugo a partir
   * do YAML) e armazena em memória. Evita duplicação de dados no HTML.
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

  // ── Gradientes ─────────────────────────────────────────────────────

  private applySkillGradients(): void {
    if (!this.elements.skillsGrid) return;

    qAll<HTMLElement>(
      ".skill-card__icon-bg",
      this.elements.skillsGrid,
    ).forEach((node) => {
      const gradient = node.dataset.gradient;
      if (gradient) {
        node.style.backgroundImage = gradient;
      }
    });
  }

  // ── Dropdown mobile legado ─────────────────────────────────────────

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
      const target = event.target as Node;
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
    const labelSpan = this.elements.mobileToggle?.querySelector(
      ".current-category",
    );
    if (labelSpan) {
      labelSpan.textContent = label.trim();
    }
  }

  // ── Drawer mobile ──────────────────────────────────────────────────

  private setupDrawer(): void {
    const { mobileCategoryButtons, drawerOverlay, drawerClose } = this.elements;

    if (!drawerOverlay && !drawerClose && mobileCategoryButtons.length === 0) {
      return;
    }

    mobileCategoryButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const categoryId = btn.dataset.drawerTrigger as DrawerCategoryId | undefined;
        if (categoryId) {
          this.openDrawer(categoryId);
        }
      });
    });

    drawerOverlay?.addEventListener("click", () => this.closeDrawer());
    drawerClose?.addEventListener("click", () => this.closeDrawer());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeDrawer();
      }
      if (e.key === "Tab" && this.isDrawerOpen()) {
        this.trapFocus(e);
      }
    });
  }

  private isDrawerOpen(): boolean {
    return this.elements.drawer?.classList.contains("is-open") ?? false;
  }

  private openDrawer(categoryId: DrawerCategoryId): void {
    const { drawer, drawerOverlay, drawerTitle, drawerDesc, drawerList } =
      this.elements;
    if (!drawer || !drawerOverlay || !drawerTitle || !drawerDesc || !drawerList) {
      return;
    }

    // Filtra as skills
    const filtered =
      categoryId === "all"
        ? this.skillsData
        : this.skillsData.filter((s) => s.categories.includes(categoryId));

    // Guarda foco anterior para restaurar ao fechar
    this.previousFocus = document.activeElement as HTMLElement;

    // Atualiza título com ícone do botão clicado
    const triggerBtn = this.elements.mobileCategoryButtons.find(
      (b) => b.dataset.drawerTrigger === categoryId,
    );
    const iconClone = triggerBtn
      ?.querySelector(".skills__mobile-cat-btn-icon")
      ?.cloneNode(true);
    const labelText =
      triggerBtn?.querySelector(".skills__mobile-cat-btn-label")?.textContent?.trim() ??
      categoryId;

    drawerTitle.textContent = "";
    if (iconClone) {
      drawerTitle.appendChild(iconClone);
    }
    drawerTitle.append(` ${labelText}`);

    // Descrição com contagem
    const count = filtered.length;
    const countLabel = count === 1
      ? drawerDesc.dataset.singular ?? "skill nesta categoria"
      : drawerDesc.dataset.plural ?? "skills nesta categoria";
    drawerDesc.textContent = `${count} ${countLabel}`;

    // Popula badges
    drawerList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    filtered.forEach((skill) => {
      const badge = document.createElement("div");
      badge.className = "skills__drawer-badge";
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

    drawerList.appendChild(fragment);

    // Abre
    drawerOverlay.classList.add("is-open");
    drawer.classList.add("is-open");
    drawerOverlay.setAttribute("aria-hidden", "false");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Foca o botão de fechar
    this.elements.drawerClose?.focus();
  }

  private closeDrawer(): void {
    const { drawer, drawerOverlay, drawerList } = this.elements;
    if (!drawer || !drawerOverlay) return;

    drawerOverlay.classList.remove("is-open");
    drawer.classList.remove("is-open");
    drawerOverlay.setAttribute("aria-hidden", "true");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    // Limpa badges após a transição
    const delay = parseFloat(
      getComputedStyle(drawer).transitionDuration,
    ) * 1000 || 250;
    setTimeout(() => {
      if (drawerList) drawerList.innerHTML = "";
    }, delay);

    // Restaura foco
    this.previousFocus?.focus();
    this.previousFocus = null;
  }

  /**
   * Prende o Tab dentro do drawer enquanto ele está aberto.
   */
  private trapFocus(e: KeyboardEvent): void {
    const { drawer } = this.elements;
    if (!drawer) return;

    const focusable = qAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      drawer,
    ).filter((el) => !el.hasAttribute("disabled"));

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  /**
   * Retorna `#111827` para fundos claros e `#ffffff` para fundos escuros,
   * baseado na luminância relativa (mesmo algoritmo do portfolio antigo).
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

// ── Inicialização ────────────────────────────────────────────────────
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

