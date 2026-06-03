export class Dropdown {
  private toggleBtn: HTMLButtonElement | null;
  private menu: HTMLElement | null;
  private items: HTMLButtonElement[];
  private abortController: AbortController;

  constructor(
    toggleBtn: string | HTMLButtonElement,
    menu: string | HTMLElement,
  ) {
    if (typeof toggleBtn === "string") {
      this.toggleBtn = document.getElementById(
        toggleBtn,
      ) as HTMLButtonElement | null;
    } else {
      this.toggleBtn = toggleBtn;
    }

    if (typeof menu === "string") {
      this.menu = document.getElementById(menu);
    } else {
      this.menu = menu;
    }

    this.items = Array.from(
      this.menu?.querySelectorAll<HTMLButtonElement>(
        'button[role="menuitem"]',
      ) || [],
    );
    this.abortController = new AbortController();
  }

  public init(): void {
    if (!this.toggleBtn || !this.menu) return;
    this.setupListeners();
  }

  public destroy(): void {
    this.abortController.abort();
  }

  public get isOpen(): boolean {
    return !this.menu?.hasAttribute("hidden");
  }

  public open(): void {
    if (!this.menu || !this.toggleBtn) return;

    // prevent multiple dropdowns open simultaneously
    document.dispatchEvent(new CustomEvent("closeAllDropdowns"));

    this.menu.removeAttribute("hidden");
    this.toggleBtn.setAttribute("aria-expanded", "true");

    if (this.items.length > 0) {
      setTimeout(() => this.items[0].focus(), 10);
    }
  }

  public close(): void {
    if (!this.menu || !this.toggleBtn || !this.isOpen) return;
    this.menu.setAttribute("hidden", "");
    this.toggleBtn.setAttribute("aria-expanded", "false");
  }

  private setupListeners(): void {
    const { signal } = this.abortController;

    this.toggleBtn?.addEventListener(
      "click",
      () => {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      },
      { signal },
    );

    this.menu?.addEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if (!this.isOpen) return;

        const currentIndex = this.items.findIndex(
          (item) => item === document.activeElement,
        );

        switch (e.key) {
          case "Escape":
            e.preventDefault();
            this.close();
            this.toggleBtn?.focus();
            break;
          case "ArrowDown":
            e.preventDefault();
            if (currentIndex < this.items.length - 1) {
              this.items[currentIndex + 1].focus();
            } else {
              this.items[0].focus(); // loop
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            if (currentIndex > 0) {
              this.items[currentIndex - 1].focus();
            } else {
              this.items[this.items.length - 1].focus(); // loop
            }
            break;
          case "Home":
            e.preventDefault();
            this.items[0].focus();
            break;
          case "End":
            e.preventDefault();
            this.items[this.items.length - 1].focus();
            break;
        }
      },
      { signal },
    );
  }

  public onItemClick(callback: (button: HTMLButtonElement) => void): void {
    const { signal } = this.abortController;
    this.items.forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          callback(button);
          this.close();
          this.toggleBtn?.focus();
        },
        { signal },
      );
    });
  }

  public updateItemStates(
    isActive: (button: HTMLButtonElement) => boolean,
  ): void {
    this.items.forEach((button) => {
      button.setAttribute("aria-pressed", String(isActive(button)));
    });
  }
}
