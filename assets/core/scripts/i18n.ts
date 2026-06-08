export type LanguageCode = "pt-BR" | "en" | "es";

export class LanguageManager {
  private currentLang: string;

  constructor() {
    this.currentLang = this.getLanguagePreference();
  }

  public init(): void {
    document.dispatchEvent(
      new CustomEvent("lang-changed", { detail: this.currentLang }),
    );
    this.setupListeners();
  }

  public destroy(): void {}

  private setupListeners(): void {
    document.addEventListener("lang-select", (e: Event) => {
      const customEvent = e as CustomEvent<{
        lang: LanguageCode;
        url?: string;
      }>;
      const { lang, url } = customEvent.detail;
      if (lang) {
        this.navigateToLanguage(lang, url);
      }
    });
  }

  private getLanguagePreference(): string {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "es" || savedLang === "pt-BR") {
      return savedLang;
    }

    const docLang = document.documentElement.lang.toLowerCase();
    if (docLang.startsWith("es")) return "es";
    if (docLang.startsWith("en")) return "en";
    return "pt-BR";
  }

  private navigateToLanguage(lang: LanguageCode, exactUrl?: string): void {
    const nextPath = exactUrl || this.getLocalizedPath(lang);
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

  public closeAll(): void {
    document.querySelectorAll("lang-toggle").forEach((el) => {
      if ("close" in el && typeof el.close === "function") {
        (el as unknown as { close: () => void }).close();
      }
    });
  }
}
