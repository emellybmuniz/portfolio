import "../features/projects/projects";
import "../features/skills/skills";
import "../core/utils/clipboard";
import { setupFilterGroup } from "../core/utils/content-filters";
import {
  setupCertificatesCarousel,
  setupCertificatesFiltersDrawer,
} from "../features/certificates/certificates";
import "../shared/ui/theme-toggle/theme-toggle";
import "../shared/ui/lang-toggle/lang-toggle";

import { ThemeManager } from "../core/scripts/theme";
import { LanguageManager } from "../core/scripts/i18n";
import { NavigationManager } from "../features/header/header-navigation";
import { ScrollManager } from "../core/scripts/scroll";
import { HeroMotion } from "../features/hero/hero-motion";
import { AnimationManager } from "../core/scripts/animations";

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
  }

  private init(): void {
    this.themeManager.init();
    this.langManager.init();
    this.navManager.init();
    this.scrollManager.init();
    this.heroMotion.init();
    this.animationManager.init();

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

    setupCertificatesCarousel();
    setupCertificatesFiltersDrawer();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new Portfolio();
  });
} else {
  new Portfolio();
}
