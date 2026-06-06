export type ThemeMode = "light" | "violet" | "extra-dark";

export class ThemeManager {
  private currentThemeMode: ThemeMode;

  constructor() {
    this.currentThemeMode = this.getThemePreference();
  }

  public init(): void {
    this.applyTheme();
    this.setupListeners();
  }

  public destroy(): void {}

  private setupListeners(): void {
    document.addEventListener("theme-select", (e: Event) => {
      const customEvent = e as CustomEvent<ThemeMode>;
      this.currentThemeMode = customEvent.detail;
      this.applyTheme();
    });
  }

  private getThemePreference(): ThemeMode {
    const saved = localStorage.getItem("theme");
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

  private applyTheme(): void {
    document.documentElement.setAttribute("data-theme", this.currentThemeMode);
    localStorage.setItem("theme", this.currentThemeMode);

    document.dispatchEvent(
      new CustomEvent("theme-changed", { detail: this.currentThemeMode }),
    );
  }

  public closeAll(): void {
    document.querySelectorAll("theme-toggle").forEach((el) => {
      if ("close" in el && typeof el.close === "function") {
        (el as any).close();
      }
    });
  }
}
