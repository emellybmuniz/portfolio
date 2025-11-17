/**
 * Helper function to resolve nested object keys from a string path.
 * @param {string} path - The string path (e.g., "header.projects").
 * @param {object} obj - The translations object.
 * @returns {string|null} The translated string or null if not found.
 */
function resolve(path, obj) {
  return path
    .split(".")
    .reduce((prev, curr) => (prev ? prev[curr] : null), obj);
}

/**
 * Fetches the language JSON file and applies translations to the page.
 * @param {string} lang - The language code (e.g., "en", "pt-BR").
 */
async function setLanguage(lang) {
  try {
    const response = await fetch(`src/langs/${lang}.json`);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${lang}.json, status: ${response.status}`
      );
    }
    const data = await response.json();
    const translations = data[lang];

    if (!translations) {
      console.error(
        `No translations found for language "${lang}" in the JSON structure.`
      );
      return;
    }

    document.querySelectorAll("[data-translate-key]").forEach((element) => {
      const key = element.getAttribute("data-translate-key");
      const translation = resolve(key, translations);

      if (translation) {
        const attribute = element.getAttribute("data-translate-type");
        const validAttributes = [
          "content",
          "alt",
          "title",
          "placeholder",
          "aria-label",
          "value",
        ];

        if (attribute && validAttributes.includes(attribute)) {
          element.setAttribute(attribute, translation);
        } else {
          element.textContent = translation;
        }
      }
    });

    document.querySelectorAll("[data-cv-link]").forEach((cvLink) => {
      const cvFile = resolve("header.cvFile", translations);
      const cvFileName = resolve("header.cvFileName", translations);
      if (cvFile) cvLink.setAttribute("href", cvFile);
      if (cvFileName) cvLink.setAttribute("download", cvFileName);
    });

    document.documentElement.lang = lang;

    document.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { lang, translations },
      })
    );
  } catch (error) {
    console.error("Failed to load or apply translations:", error);
    if (lang !== "pt-BR") {
      console.log("Falling back to Portuguese (pt-BR).");
      setLanguage("pt-BR");
    }
  }
}

function getInitialLanguage() {
  const savedLang = localStorage.getItem("lang");
  const supportedLangs = ["pt-BR", "en"];

  if (savedLang && supportedLangs.includes(savedLang)) return savedLang;

  const browserLang = navigator.language;
  const matchedLang = supportedLangs.find((supported) =>
    browserLang.startsWith(supported.split("-")[0])
  );

  return matchedLang || "pt-BR";
}

/**
 * Initializes the language functionality on page load.
 * It handles the language dropdown UI and sets the initial language.
 */
document.addEventListener("DOMContentLoaded", () => {
  const langDropdown = document.querySelector(".lang-dropdown");

  if (langDropdown) {
    const langBtn = langDropdown.querySelector(".lang-btn");
    const langOptions = langDropdown.querySelector(".lang-options");
    const selectedLangSpan = langDropdown.querySelector(".selected-lang");

    const updateButtonText = (lang) => {
      if (selectedLangSpan) {
        selectedLangSpan.textContent = lang === "pt-BR" ? "PT" : "EN";
      }
    };

    langBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    langOptions.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const lang = e.target.dataset.lang;
        localStorage.setItem("lang", lang); 
        setLanguage(lang);
        updateButtonText(lang);
        langDropdown.classList.remove("open");
      }
    });

    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });

    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
    updateButtonText(initialLang);
  }
});
