import { qAll } from "../../../core/utils/dom";

export interface DrawerOptions {
  idPrefix: string;
  onClose?: () => void;
}

export class Drawer {
  public overlay: HTMLElement | null;
  public drawerEl: HTMLElement | null;
  public titleEl: HTMLElement | null;
  public descEl: HTMLElement | null;
  public listEl: HTMLElement | null;
  public closeBtn: HTMLButtonElement | null;
  private previousFocus: HTMLElement | null = null;
  private scrollPosition: number = 0;

  constructor(private options: DrawerOptions) {
    const prefix = options.idPrefix;
    this.overlay = document.getElementById(`${prefix}DrawerOverlay`);
    this.drawerEl = document.getElementById(`${prefix}Drawer`);
    this.titleEl = document.getElementById(`${prefix}DrawerTitle`);
    this.descEl = document.getElementById(`${prefix}DrawerDesc`);
    this.listEl = document.getElementById(`${prefix}DrawerList`);
    this.closeBtn = document.getElementById(
      `${prefix}DrawerClose`,
    ) as HTMLButtonElement | null;

    this.init();
  }

  private init(): void {
    if (this.overlay) document.body.appendChild(this.overlay);
    if (this.drawerEl) document.body.appendChild(this.drawerEl);

    this.overlay?.addEventListener("click", () => this.close());
    this.closeBtn?.addEventListener("click", () => this.close());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
      if (e.key === "Tab" && this.isOpen()) {
        this.trapFocus(e);
      }
    });
  }

  public isOpen(): boolean {
    return this.drawerEl?.classList.contains("is-open") ?? false;
  }

  public open(): void {
    if (!this.drawerEl || !this.overlay) return;

    this.previousFocus = document.activeElement as HTMLElement;

    this.overlay.classList.add("is-open");
    this.drawerEl.classList.add("is-open");
    this.overlay.setAttribute("aria-hidden", "false");
    this.drawerEl.setAttribute("aria-hidden", "false");

    this.scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.width = "100%";
    document.body.classList.add("is-drawer-open");

    this.closeBtn?.focus();
  }

  public close(): void {
    if (!this.drawerEl || !this.overlay) return;

    this.overlay.classList.remove("is-open");
    this.drawerEl.classList.remove("is-open");
    this.overlay.setAttribute("aria-hidden", "true");
    this.drawerEl.setAttribute("aria-hidden", "true");

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("is-drawer-open");
    window.scrollTo(0, this.scrollPosition);

    const delay =
      parseFloat(getComputedStyle(this.drawerEl).transitionDuration) * 1000 ||
      250;
    setTimeout(() => {
      if (this.listEl) this.listEl.innerHTML = "";
      if (this.options.onClose) this.options.onClose();
    }, delay);

    this.previousFocus?.focus();
    this.previousFocus = null;
  }

  private trapFocus(e: KeyboardEvent): void {
    if (!this.drawerEl) return;

    const focusable = qAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      this.drawerEl,
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
