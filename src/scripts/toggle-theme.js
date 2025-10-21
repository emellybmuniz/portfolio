document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".theme-btn");
  const htmlElement = document.documentElement;

  const updateButtonState = (isLight) => {
    themeButtons.forEach((button) => {
      const icon = button.querySelector("i");
      const span = button.querySelector("span");

      if (isLight) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        span.setAttribute("data-translate-key", "header.themeButtonDark");
      } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        span.setAttribute("data-translate-key", "header.themeButtonLight");
      }
    });
  };

  const toggleTheme = () => {
    htmlElement.classList.toggle("light-mode");
    const isLight = htmlElement.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateButtonState(isLight);

    if (typeof setLanguage === "function" && htmlElement.lang) {
      setLanguage(htmlElement.lang);
    }
  };

  themeButtons.forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });

  const applyInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const isLight = savedTheme === "light" || (!savedTheme && prefersLight);

    if (isLight) htmlElement.classList.add("light-mode");
    updateButtonState(isLight);
  };

  applyInitialTheme();
});
