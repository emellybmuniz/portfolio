import "./projects";
import "./skills";
import "./clipboard";
import { setupFilterGroup } from "./content-filters";

type LanguageCode = "pt-BR" | "en" | "es";
type ThemeMode = "light" | "violet" | "extra-dark";

const themeLabels: Record<ThemeMode, string> = {
  light: "Light",
  violet: "Violet",
  "extra-dark": "Extra Dark",
};
const themeIcons: Record<ThemeMode, string> = {
  light: "☀️",
  violet: "💜",
  "extra-dark": "🌙",
};

interface AppElements {
  menuToggle_button: HTMLButtonElement | null;
  nav: HTMLElement | null;
  themeToggle_button: HTMLButtonElement | null;
  themeMenu: HTMLElement | null;
  themeActiveIcon: HTMLElement | null;
  themeActiveLabel: HTMLElement | null;
  langToggle_button: HTMLButtonElement | null;
  langMenu: HTMLElement | null;
  langToggleLabel: HTMLElement | null;
  scrollTop_button: HTMLButtonElement | null;
  footerBrandText: HTMLElement | null;
  footerQuickLinksLabel: HTMLElement | null;
  footerContactLabel: HTMLElement | null;
  footerHomeLink: HTMLElement | null;
  footerProjectsLink: HTMLElement | null;
  footerSkillsLink: HTMLElement | null;
  footerCertificatesLink: HTMLElement | null;
  footerDownloadCv: HTMLElement | null;
  footerCopyright: HTMLElement | null;
}

class Portfolio {
  private elements: AppElements;
  private currentThemeMode: ThemeMode;
  private currentLang: string;
  private prefersReducedMotion: boolean;

  constructor() {
    this.elements = {
      menuToggle_button: document.getElementById(
        "menuToggle",
      ) as HTMLButtonElement,
      nav: document.querySelector(".header__nav"),
      themeToggle_button: document.getElementById(
        "themeToggle",
      ) as HTMLButtonElement,
      themeMenu: document.getElementById("themeMenu"),
      themeActiveIcon: document.getElementById("themeActiveIcon"),
      themeActiveLabel: document.getElementById("themeActiveLabel"),
      langToggle_button: document.getElementById(
        "langToggle",
      ) as HTMLButtonElement,
      langMenu: document.getElementById("langMenu"),
      langToggleLabel: document.getElementById("langToggleLabel"),
      scrollTop_button: document.getElementById(
        "scrollTopBtn",
      ) as HTMLButtonElement,
      footerBrandText: document.getElementById("footerBrandText"),
      footerQuickLinksLabel: document.getElementById("footerQuickLinksLabel"),
      footerContactLabel: document.getElementById("footerContactLabel"),
      footerHomeLink: document.getElementById("footerHomeLink"),
      footerProjectsLink: document.getElementById("footerProjectsLink"),
      footerSkillsLink: document.getElementById("footerSkillsLink"),
      footerCertificatesLink: document.getElementById("footerCertificatesLink"),
      footerDownloadCv: document.getElementById("footerDownloadCv"),
      footerCopyright: document.getElementById("footerCopyright"),
    };

    this.currentThemeMode = this.getThemePreference();
    this.currentLang = this.getLanguagePreference();
    this.prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    this.init();
  }

  private init(): void {
    this.setupTheme();
    this.setupLanguage();
    this.setupFooterDropdowns();
    this.setupMenuToggle();
    this.setupScrollToTop();
    this.setupIntersectionObserver();
    this.setupHeroMotion();
    this.setupDriveScroll();
    this.setupMouseLight();
    this.setupContentFilters();
  }

  private setupTheme(): void {
    this.applyTheme();

    if (this.elements.themeToggle_button) {
      this.elements.themeToggle_button.addEventListener("click", () => {
        this.toggleDropdown("themeMenu", "themeToggle");
      });
    }
    this.elements.themeMenu
      ?.querySelectorAll<HTMLButtonElement>("[data-theme]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const themeKey = button.dataset.theme as ThemeMode | undefined;
          if (themeKey) {
            this.currentThemeMode = themeKey;
            this.applyTheme();
            this.closeDropdown("themeMenu", "themeToggle");
          }
        });
      });
  }

  private applyTheme(): void {
    document.documentElement.setAttribute("data-theme", this.currentThemeMode);
    localStorage.setItem("theme", this.currentThemeMode);
    this.updateThemeToggleButton();
  }

  private setupLanguage(): void {
    this.updateLanguageToggleLabel();

    if (this.elements.langToggle_button) {
      this.elements.langToggle_button.addEventListener("click", () => {
        this.toggleDropdown("langMenu", "langToggle");
      });
    }

    this.elements.langMenu
      ?.querySelectorAll<HTMLButtonElement>("[data-lang]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const langKey = button.dataset.lang as LanguageCode | undefined;
          if (langKey) {
            this.navigateToLanguage(langKey);
          }
        });
      });
  }

  private updateLanguageToggleLabel(): void {
    if (!this.elements.langToggleLabel) return;

    const lang = this.currentLang as LanguageCode;
    this.elements.langToggleLabel.textContent =
      lang === "pt-BR" ? "PT" : lang.toUpperCase();
  }

  private getThemePreference(): ThemeMode {
    const saved = localStorage.getItem("theme");
    const themeLabel =
      this.elements.themeMenu
        ?.querySelector<HTMLElement>(
          `[data-theme="${this.currentThemeMode}"] .footer__dropdown-item-title`,
        )
        ?.textContent?.trim() || themeLabels[this.currentThemeMode];
    if (saved === "light" || saved === "violet" || saved === "extra-dark") {
      return saved;
    }

    if (saved === "dark") {
      return "violet";
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "violet";
  }

  private updateThemeToggleButton(): void {
    if (!this.elements.themeToggle_button) return;

    const themeLabel = themeLabels[this.currentThemeMode];

    if (this.elements.themeActiveIcon) {
      this.elements.themeActiveIcon.innerHTML =
        themeIcons[this.currentThemeMode];
    }

    if (this.elements.themeActiveLabel) {
      this.elements.themeActiveLabel.textContent = themeLabel;
    }

    this.elements.themeToggle_button.setAttribute(
      "aria-label",
      `Selecionar tema: ${themeLabel}`,
    );

    this.elements.themeMenu
      ?.querySelectorAll<HTMLButtonElement>("[data-theme]")
      .forEach((button) => {
        const isSelected = button.dataset.theme === this.currentThemeMode;
        button.setAttribute("aria-pressed", String(isSelected));
      });
  }

  private getLanguagePreference(): string {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "es" || savedLang === "pt-BR") {
      return savedLang;
    }

    const docLang = document.documentElement.lang.toLowerCase();
    if (docLang.startsWith("es")) {
      return "es";
    }
    if (docLang.startsWith("en")) {
      return "en";
    }
    return "pt-BR";
  }

  private navigateToLanguage(lang: LanguageCode): void {
    const nextPath = this.getLocalizedPath(lang);
    localStorage.setItem("lang", lang);
    window.location.assign(nextPath);
  }

  private getLocalizedPath(lang: LanguageCode): string {
    const { pathname, search, hash } = window.location;
    const targetLocale = lang === "pt-BR" ? "" : lang.toLowerCase();
    const langRegex = /\/(en|es)(?=\/|$)/i;

    if (lang === "pt-BR") {
      const nextPath = pathname.replace(langRegex, "/");
      return `${nextPath}${search}${hash}`.replace(/\/\/+/, "/");
    }

    if (pathname.match(langRegex)) {
      const nextPath = pathname.replace(langRegex, `/${targetLocale}`);
      return `${nextPath}${search}${hash}`;
    }

    const basePath = pathname.toLowerCase().includes("/portfolio")
      ? "/portfolio"
      : "";
    const pathWithoutBase = pathname.substring(basePath.length) || "/";

    return `${basePath}/${targetLocale}${pathWithoutBase}${search}${hash}`.replace(
      /\/\/+/,
      "/",
    );
  }

  private setupFooterDropdowns(): void {
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const themeContainer = document.getElementById("themeDropdownContainer");
      const langContainer = document.getElementById("langDropdownContainer");

      if (themeContainer && !themeContainer.contains(target)) {
        this.closeDropdown("themeMenu", "themeToggle");
      }

      if (langContainer && !langContainer.contains(target)) {
        this.closeDropdown("langMenu", "langToggle");
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
  }

  private toggleDropdown(menuId: string, buttonId: string): void {
    const menu = document.getElementById(menuId);
    const button = document.getElementById(buttonId);
    if (!menu || !button) return;

    const isOpen = !menu.hasAttribute("hidden");
    this.closeAllDropdowns();

    if (!isOpen) {
      menu.removeAttribute("hidden");
      button.setAttribute("aria-expanded", "true");
    }
  }

  private closeDropdown(menuId: string, buttonId: string): void {
    const menu = document.getElementById(menuId);
    const button = document.getElementById(buttonId);
    if (!menu || !button) return;

    menu.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }

  private closeAllDropdowns(): void {
    this.closeDropdown("themeMenu", "themeToggle");
    this.closeDropdown("langMenu", "langToggle");
  }

  private setupMenuToggle(): void {
    if (!this.elements.menuToggle_button || !this.elements.nav) return;

    this.elements.menuToggle_button.addEventListener("click", () => {
      this.toggleMenuVisibility();
    });

    const links = this.elements.nav.querySelectorAll("a");
    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        this.closeMenu();
      });
    });
  }

  private toggleMenuVisibility(): void {
    if (!this.elements.nav || !this.elements.menuToggle_button) return;

    const isMenuOpen = this.elements.nav.classList.contains("is-active");
    if (isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  private openMenu(): void {
    if (!this.elements.nav || !this.elements.menuToggle_button) return;

    this.elements.nav.classList.add("is-active");
    this.elements.menuToggle_button.setAttribute("aria-expanded", "true");
    document.body.classList.add("body-no-scroll");
  }

  private closeMenu(): void {
    if (!this.elements.nav || !this.elements.menuToggle_button) return;

    this.elements.nav.classList.remove("is-active");
    this.elements.menuToggle_button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("body-no-scroll");
  }

  private setupScrollToTop(): void {
    if (!this.elements.scrollTop_button) return;

    window.addEventListener(
      "scroll",
      () => {
        const isScrolled = window.scrollY > 300;
        this.toggleScrollButton(isScrolled);
      },
      { passive: true },
    );

    this.elements.scrollTop_button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  private toggleScrollButton(isVisible: boolean): void {
    if (!this.elements.scrollTop_button) return;

    if (isVisible) {
      this.elements.scrollTop_button.classList.add("show");
    } else {
      this.elements.scrollTop_button.classList.remove("show");
    }
  }

  private setupIntersectionObserver(): void {
    const options = {
      threshold: 0.0,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const observeOnce = el.dataset.observeOnce === "true";
        const staggerOnce = el.dataset.staggerOnce === "true";
        const animateClass = el.dataset.animate;
        const isStagger = el.dataset.stagger === "true";

        if (isStagger) {
          const items = Array.from(
            el.querySelectorAll<HTMLElement>("[data-stagger-item]"),
          );

          if (entry.isIntersecting) {
            el.classList.add("in-view");

            items.forEach((item, idx) => {
              const delay = idx * 115;
              item.style.transitionDelay = `${delay}ms`;
              item.classList.add("in-view");
            });

            if (staggerOnce) {
              observer.unobserve(el);
            }
          } else {
            if (staggerOnce) {
              return;
            }

            el.classList.remove("in-view");
            items.forEach((item) => {
              item.style.transitionDelay = "";
              item.classList.remove("in-view");
            });
          }
        } else {
          el.classList.toggle("in-view", entry.isIntersecting);

          if (animateClass) {
            el.classList.toggle(animateClass, entry.isIntersecting);
          }

          if (entry.isIntersecting && observeOnce) {
            observer.unobserve(el);
          }
        }
      });
    }, options);

    document
      .querySelectorAll(
        "[data-observe], [data-stagger], [data-animate], [data-observe-once], [data-stagger-once]",
      )
      .forEach((el) => {
        observer.observe(el);
      });
  }

  private setupMouseLight(): void {
    if (!document.body) return;

    const mouseSurface = document.documentElement;
    let lightPos = { x: -1000, y: -1000 };
    let targetPos = { x: -1000, y: -1000 };
    let animationFrameId: number | null = null;

    const setMousePosition = (x: number, y: number): void => {
      mouseSurface.style.setProperty("--mouse-x", `${Math.round(x)}px`);
      mouseSurface.style.setProperty("--mouse-y", `${Math.round(y)}px`);
    };

    const updateLightPosition = () => {
      lightPos.x = targetPos.x;
      lightPos.y = targetPos.y;
      setMousePosition(lightPos.x, lightPos.y);

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const pointerHandler = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;
      targetPos.x = clientX;
      targetPos.y = clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateLightPosition);
      }
    };

    document.addEventListener("mousemove", pointerHandler, { passive: true });

    setMousePosition(targetPos.x, targetPos.y);
  }

  private setupHeroMotion(): void {
    if (this.prefersReducedMotion) return;

    const hero = document.querySelector<HTMLElement>(".hero");
    const heroContent = hero?.querySelector<HTMLElement>(".hero__content");
    const heroMedia = hero?.querySelector<HTMLElement>(".hero__media");

    if (!hero || !heroContent || !heroMedia) return;

    let frameId: number | null = null;
    let targetX = 0;
    let targetY = 0;

    const updateMotion = () => {
      frameId = null;

      const rect = hero.getBoundingClientRect();
      const width = Math.max(rect.width, 1);
      const height = Math.max(rect.height, 1);
      const centerX = width / 2;
      const centerY = height / 2;

      const pointerOffsetX = (targetX - centerX) / width;
      const pointerOffsetY = (targetY - centerY) / height;
      const scrollProgress = Math.max(
        -1,
        Math.min(1, -rect.top / Math.max(rect.height, 1)),
      );

      hero.style.setProperty(
        "--hero-content-x",
        `${(pointerOffsetX * 8).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-content-y",
        `${(pointerOffsetY * 6 - scrollProgress * 6).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-media-x",
        `${(pointerOffsetX * 18).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-media-y",
        `${(pointerOffsetY * 12 + scrollProgress * 14).toFixed(2)}px`,
      );
      hero.style.setProperty(
        "--hero-photo-tilt",
        `${(pointerOffsetX * 3).toFixed(2)}deg`,
      );
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateMotion);
    };

    hero.addEventListener(
      "pointermove",
      (event) => {
        const rect = hero.getBoundingClientRect();
        targetX = event.clientX - rect.left;
        targetY = event.clientY - rect.top;
        scheduleUpdate();
      },
      { passive: true },
    );

    hero.addEventListener(
      "pointerleave",
      () => {
        targetX = hero.clientWidth / 2;
        targetY = hero.clientHeight / 2;
        scheduleUpdate();
      },
      { passive: true },
    );

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    targetX = hero.clientWidth / 2;
    targetY = hero.clientHeight / 2;
    scheduleUpdate();
  }

  /**
   * Drive-scroll foundation: updates scroll CSS vars and applies lightweight
   * per-element parallax for nodes annotated with `data-parallax`.
   */
  private setupDriveScroll(): void {
    if (this.prefersReducedMotion) return;

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    let frameId: number | null = null;

    const update = () => {
      frameId = null;

      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const progress = Math.max(0, Math.min(1, scrollY / docHeight));

      document.documentElement.style.setProperty(
        "--scroll-y",
        `${Math.round(scrollY)}px`,
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress.toFixed(4)}`,
      );

      const viewportCenter = window.innerHeight / 2;

      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.12");
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = elCenter - viewportCenter;
        const translateY = -distance * speed;

        el.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    const schedule = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    schedule();
  }

  private setupContentFilters(): void {
    setupFilterGroup({
      containerSelector: ".certificates",
      buttonSelector: ".certificates__filter-btn",
      itemSelector: ".cert-card",
      activeButtonClass: "certificates__filter-btn--active",
      hiddenClass: "is-hidden",
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new Portfolio();
  });
} else {
  new Portfolio();
}
