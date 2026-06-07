import { BaseElement } from "../custom-elements/base-element";

export class UiDrawer extends BaseElement {
  private overlay: HTMLElement | null = null;
  private drawerContainer: HTMLElement | null = null;
  private closeBtn: HTMLButtonElement | null = null;
  private previousFocus: HTMLElement | null = null;
  private scrollPosition: number = 0;

  constructor() {
    super(false); // Do not use shadow DOM for drawer to allow global styling and teleportation
  }

  connectedCallback() {
    super.connectedCallback();

    // Teleport to body to avoid stacking context issues
    // Defer to ensure children are fully parsed before moving!
    setTimeout(() => {
      if (this.parentElement !== document.body) {
        document.body.appendChild(this);
      }
    }, 0);
  }

  protected render(): void {
    this.overlay = this.querySelector(".drawer-overlay");
    this.drawerContainer = this.querySelector(".drawer");
    this.closeBtn = this.querySelector(".drawer__close-btn");
  }

  public get titleEl(): HTMLElement | null {
    return this.querySelector(".drawer__title");
  }

  public get descEl(): HTMLElement | null {
    return this.querySelector(".drawer__desc");
  }

  public get listEl(): HTMLElement | null {
    return this.querySelector(".drawer__list");
  }

  protected setupListeners(): void {
    this.overlay?.addEventListener("click", () => this.close());
    this.closeBtn?.addEventListener("click", () => this.close());

    this.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
      if (e.key === "Tab" && this.isOpen()) {
        this.trapFocus(e);
      }
    });
  }

  public isOpen(): boolean {
    return this.drawerContainer?.classList.contains("is-open") ?? false;
  }

  public open(): void {
    if (!this.drawerContainer || !this.overlay) return;

    this.previousFocus = document.activeElement as HTMLElement;

    this.overlay.classList.add("is-open");
    this.drawerContainer.classList.add("is-open");
    this.overlay.setAttribute("aria-hidden", "false");
    this.drawerContainer.setAttribute("aria-hidden", "false");

    this.scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.classList.add("is-drawer-open");

    this.closeBtn?.focus();
  }

  public close(): void {
    if (!this.drawerContainer || !this.overlay) return;

    this.overlay.classList.remove("is-open");
    this.drawerContainer.classList.remove("is-open");
    this.overlay.setAttribute("aria-hidden", "true");
    this.drawerContainer.setAttribute("aria-hidden", "true");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("is-drawer-open");
    window.scrollTo(0, this.scrollPosition);

    const delay =
      parseFloat(getComputedStyle(this.drawerContainer).transitionDuration) *
        1000 || 250;

    setTimeout(() => {
      this.emitEvent("drawer-closed");
    }, delay);

    this.previousFocus?.focus();
    this.previousFocus = null;
  }

  private trapFocus(e: KeyboardEvent): void {
    if (!this.drawerContainer) return;

    const focusable = Array.from(
      this.drawerContainer.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
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
}

if (!customElements.get("ui-drawer")) {
  customElements.define("ui-drawer", UiDrawer);
}
