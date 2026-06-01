import ProjectsSection from "./projects/section";
import ProjectsExplorer from "./projects/explorer";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("[data-projects-grid]")) {
    new ProjectsSection();
  }

  const explorerRoot = document.querySelector<HTMLElement>(
    "[data-projects-explorer]",
  );
  if (explorerRoot) {
    new ProjectsExplorer(explorerRoot);
  }
});
