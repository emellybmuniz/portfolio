export class NavigationManager {
  private abortController: AbortController;
  private menuToggleBtn: HTMLButtonElement | null;
  private nav: HTMLElement | null;

  constructor(private onCloseAllDropdowns: () => void) {
    this.abortController = new AbortController();
    this.menuToggleBtn = (
      document.getElementById("menuToggle") instanceof HTMLButtonElement
        ? document.getElementById("menuToggle")
        : null
    ) as HTMLButtonElement | null;
    this.nav = document.querySelector(".header__nav");
  }

  public init(): void {
    this.setupMenuToggle();
    this.setupOutsideClicks();
    this.setupKeyboardListeners();
  }

  private setupKeyboardListeners(): void {
    const { signal } = this.abortController;

    document.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if (!this.nav?.classList.contains("is-active")) return;

        if (e.key === "Escape") {
          this.closeMenu();
        }
        if (e.key === "Tab") {
          this.trapFocus(e);
        }
      },
      { signal },
    );
  }

  private trapFocus(e: KeyboardEvent): void {
    if (!this.nav || !this.menuToggleBtn) return;

    const navFocusable = Array.from(
      this.nav.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => !el.hasAttribute("disabled"));

    const focusable = [this.menuToggleBtn, ...navFocusable];

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

  public destroy(): void {
    this.abortController.abort();
  }

  private setupMenuToggle(): void {
    const { signal } = this.abortController;

    if (!this.menuToggleBtn || !this.nav) return;

    this.menuToggleBtn.addEventListener(
      "click",
      () => {
        this.toggleMenuVisibility();
      },
      { signal },
    );

    const links = this.nav.querySelectorAll("a");
    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener(
        "click",
        () => {
          this.closeMenu();
        },
        { signal },
      );
    });

    let resizeTimer: number;
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          if (window.innerWidth > 768) {
            this.closeMenu();
          }
        }, 150);
      },
      { passive: true, signal },
    );
  }

  private setupOutsideClicks(): void {
    const { signal } = this.abortController;

    document.addEventListener(
      "closeAllDropdowns",
      () => {
        this.onCloseAllDropdowns();
      },
      { signal },
    );

    document.addEventListener(
      "click",
      (event: MouseEvent) => {
        const target = event.target as Node;
        const themeContainer = document.getElementById(
          "themeDropdownContainer",
        );
        const headerThemeContainer = document.getElementById(
          "headerThemeDropdownContainer",
        );
        const langContainer = document.getElementById("langDropdownContainer");

        const isOutsideTheme =
          themeContainer && !themeContainer.contains(target);
        const isOutsideHeaderTheme =
          headerThemeContainer && !headerThemeContainer.contains(target);
        const isOutsideLang = langContainer && !langContainer.contains(target);

        if (isOutsideTheme || isOutsideHeaderTheme || isOutsideLang) {
          const isToggleButton = (target as HTMLElement).closest(
            "button[aria-expanded]",
          );
          if (!isToggleButton) {
            this.onCloseAllDropdowns();
          }
        }
      },
      { signal },
    );
  }

  private scrollPosition: number = 0;

  private toggleMenuVisibility(): void {
    if (!this.nav || !this.menuToggleBtn) return;
    const isMenuOpen = this.nav.classList.contains("is-active");
    if (isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  private openMenu(): void {
    if (!this.nav || !this.menuToggleBtn) return;
    this.nav.classList.add("is-active");
    this.menuToggleBtn.setAttribute("aria-expanded", "true");

    this.scrollPosition = window.scrollY;
    document.body.style.setProperty("--scroll-y", `-${this.scrollPosition}px`);
    document.body.classList.add("is-drawer-open");
  }

  private closeMenu(): void {
    if (!this.nav || !this.menuToggleBtn) return;
    if (!this.nav.classList.contains("is-active")) return;

    this.nav.classList.remove("is-active");
    this.menuToggleBtn.setAttribute("aria-expanded", "false");

    document.body.classList.remove("is-drawer-open");
    document.body.style.removeProperty("--scroll-y");
    window.scrollTo(0, this.scrollPosition);
  }
}
