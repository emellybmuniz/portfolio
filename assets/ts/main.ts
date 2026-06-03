import "./projects";
import "./skills";
import "./clipboard";
import { setupFilterGroup } from "./content-filters";
import { setupCertificatesCarousel } from "./certificates";
import "./components/theme-toggle";
import "./components/lang-toggle";

import { ThemeManager } from "./theme";
import { LanguageManager } from "./i18n";
import { NavigationManager } from "./navigation";
import { ScrollManager } from "./scroll";
import { HeroMotion } from "./hero-motion";
import { AnimationManager } from "./animations";

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
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new Portfolio();
  });
} else {
  new Portfolio();
}
