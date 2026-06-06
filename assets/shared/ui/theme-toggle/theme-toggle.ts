import { Dropdown } from "../../../core/utils/dropdown";
import { ThemeMode } from "../theme";

const themeLabels: Record<ThemeMode, string> = {
  light: "Light",
  violet: "Violet",
  "extra-dark": "Extra Dark",
};

const themeIcons: Record<ThemeMode, string> = {
  light: `<span class="theme-dot theme-dot--light"></span>`,
  violet: `<span class="theme-dot theme-dot--violet"></span>`,
  "extra-dark": `<span class="theme-dot theme-dot--extra-dark"></span>`,
};

export class ThemeToggle extends HTMLElement {
  private dropdown: Dropdown | null = null;
  private toggleBtn: HTMLButtonElement | null = null;
  private menu: HTMLElement | null = null;
  private activeIcon: HTMLElement | null = null;
  private activeLabel: HTMLElement | null = null;

  connectedCallback() {
    this.toggleBtn = this.querySelector('[aria-haspopup="menu"]');
    this.menu = this.querySelector('[role="menu"]');
    this.activeIcon = this.querySelector('.active-icon, [id*="ActiveIcon"]');
    this.activeLabel = this.querySelector('.active-label, [id*="ActiveLabel"]');

    if (this.toggleBtn && this.menu) {
      this.dropdown = new Dropdown(this.toggleBtn, this.menu);
      this.dropdown.init();

      this.dropdown.onItemClick((button) => {
        const themeKey = button.dataset.theme as ThemeMode | undefined;
        if (themeKey) {
          document.dispatchEvent(
            new CustomEvent("theme-select", { detail: themeKey }),
          );
        }
      });
    }

    document.addEventListener("theme-changed", (e: Event) => {
      const customEvent = e as CustomEvent<ThemeMode>;
      this.updateUI(customEvent.detail);
    });
  }

  disconnectedCallback() {
    if (this.dropdown) {
      this.dropdown.destroy();
    }
  }

  private updateUI(theme: ThemeMode) {
    if (this.activeIcon) this.activeIcon.innerHTML = themeIcons[theme];
    if (this.activeLabel) this.activeLabel.textContent = themeLabels[theme];

    if (this.dropdown) {
      this.dropdown.updateItemStates(
        (button) => button.dataset.theme === theme,
      );
    }
  }

  public close() {
    if (this.dropdown) this.dropdown.close();
  }
}

if (!customElements.get("theme-toggle")) {
  customElements.define("theme-toggle", ThemeToggle);
}
