import { Dropdown } from "../utils/dropdown";
import { LanguageCode } from "../i18n";

export class LangToggle extends HTMLElement {
  private dropdown: Dropdown | null = null;
  private toggleBtn: HTMLButtonElement | null = null;
  private menu: HTMLElement | null = null;
  private toggleLabel: HTMLElement | null = null;

  connectedCallback() {
    this.toggleBtn = this.querySelector('[aria-haspopup="menu"]');
    this.menu = this.querySelector('[role="menu"]');
    this.toggleLabel = this.querySelector('.active-label, [id*="ToggleLabel"]');

    if (this.toggleBtn && this.menu) {
      this.dropdown = new Dropdown(this.toggleBtn, this.menu);
      this.dropdown.init();

      this.dropdown.onItemClick((button) => {
        const langKey = button.dataset.lang as LanguageCode | undefined;
        if (langKey) {
          document.dispatchEvent(
            new CustomEvent("lang-select", { detail: langKey }),
          );
        }
      });
    }

    document.addEventListener("lang-changed", (e: Event) => {
      const customEvent = e as CustomEvent<LanguageCode>;
      this.updateUI(customEvent.detail);
    });
  }

  disconnectedCallback() {
    if (this.dropdown) {
      this.dropdown.destroy();
    }
  }

  private updateUI(lang: LanguageCode) {
    if (this.toggleLabel) {
      this.toggleLabel.textContent =
        lang === "pt-BR" ? "PT" : lang.toUpperCase();
    }
  }

  public close() {
    if (this.dropdown) this.dropdown.close();
  }
}

if (!customElements.get("lang-toggle")) {
  customElements.define("lang-toggle", LangToggle);
}
