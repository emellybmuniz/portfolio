import "../../shared/ui/theme-toggle/theme-toggle";
import "../../shared/ui/lang-toggle/lang-toggle";
import "../../shared/ui/drawer/ui-drawer";
import "../utils/clipboard";

import { ThemeManager } from "./theme";
import { LanguageManager } from "./i18n";
import { NavigationManager } from "../../features/header/header-navigation";
import { ScrollManager } from "./scroll";
import { HeroMotion } from "../../features/hero/hero-motion";
import { AnimationManager } from "./animations";
import "../../features/contact/contact";

class Portfolio {
  private themeManager: ThemeManager;
  private langManager: LanguageManager;
  private navManager: NavigationManager;
  private scrollManager: ScrollManager;
  private heroMotion: HeroMotion;
  private animationManager: AnimationManager;

  constructor() {
    this.themeManager = new ThemeManager();
    this.langManager = new LanguageManager();
    this.navManager = new NavigationManager(() => {
      this.themeManager.closeAll();
      this.langManager.closeAll();
    });
    this.scrollManager = new ScrollManager();
    this.heroMotion = new HeroMotion();
    this.animationManager = new AnimationManager();

    this.init();
    this.setupLazyLoading();
  }

  private init(): void {
    this.themeManager.init();
    this.langManager.init();
    this.navManager.init();
    this.scrollManager.init();
    this.heroMotion.init();
    this.animationManager.init();
  }

  private setupLazyLoading(): void {
    if (!("IntersectionObserver" in window)) {
      this.loadAllFeaturesFallback();
      return;
    }

    const lazyObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            if (target.classList.contains("skills")) {
              Promise.all([
                import("../../features/skills/skills"),
                import("../utils/content-filters"),
              ]).then(([, { setupFilterGroup }]) => {
                setupFilterGroup({
                  containerSelector: ".skills",
                  buttonSelector: ".skills__filter-btn",
                  itemSelector: ".skill-card",
                  activeButtonClass: "skills__filter-btn--active",
                  hiddenClass: "skill-card--hidden",
                });
              });
              observer.unobserve(target);
            }

            if (target.classList.contains("certificates")) {
              import("../../shared/ui/carousel/portfolio-carousel");
              Promise.all([
                import("../../features/certificates/certificates"),
                import("../utils/content-filters"),
              ]).then(
                ([
                  { setupCertificatesFiltersDrawer },
                  { setupFilterGroup },
                ]) => {
                  setupCertificatesFiltersDrawer();
                  setupFilterGroup({
                    containerSelector: ".certificates",
                    buttonSelector: ".certificates__filter-btn",
                    itemSelector: ".cert-card",
                    activeButtonClass: "certificates__filter-btn--active",
                    hiddenClass: "is-hidden",
                  });
                },
              );
              observer.unobserve(target);
            }

            if (
              target.hasAttribute("data-projects-explorer") ||
              target.hasAttribute("data-projects-grid") ||
              target.classList.contains("projects--home")
            ) {
              import("../../features/projects/projects");
              observer.unobserve(target);
            }
          }
        });
      },
      { rootMargin: "250px" },
    );

    const skillsEl = document.querySelector(".skills");
    if (skillsEl) lazyObserver.observe(skillsEl);

    const certEl = document.querySelector(".certificates");
    if (certEl) lazyObserver.observe(certEl);

    const projEl = document.querySelector(".projects--home");
    if (projEl) lazyObserver.observe(projEl);

    const projExplorerEl = document.querySelector("[data-projects-explorer]");
    if (projExplorerEl) lazyObserver.observe(projExplorerEl);
  }

  private loadAllFeaturesFallback(): void {
    import("../../features/skills/skills");
    import("../../features/projects/projects");
    import("../../shared/ui/carousel/portfolio-carousel");
    Promise.all([
      import("../../features/certificates/certificates"),
      import("../utils/content-filters"),
    ]).then(([{ setupCertificatesFiltersDrawer }, { setupFilterGroup }]) => {
      setupCertificatesFiltersDrawer();
      setupFilterGroup({
        containerSelector: ".skills",
        buttonSelector: ".skills__filter-btn",
        itemSelector: ".skill-card",
        activeButtonClass: "skills__filter-btn--active",
        hiddenClass: "skill-card--hidden",
      });
      setupFilterGroup({
        containerSelector: ".certificates",
        buttonSelector: ".certificates__filter-btn",
        itemSelector: ".cert-card",
        activeButtonClass: "certificates__filter-btn--active",
        hiddenClass: "is-hidden",
      });
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
