document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".theme-btn");
  const htmlElement = document.documentElement;

  const applyTheme = (theme) => {
    htmlElement.classList.toggle("light-mode", theme === "light");
    themeButtons.forEach((button) => {
      button.textContent =
        theme === "light" ? "Tema Escuro 🌙" : "Tema Claro ☀️";
    });
  };

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const newTheme = htmlElement.classList.contains("light-mode")
        ? "dark"
        : "light";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  });

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
});
