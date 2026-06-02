import ProjectsExplorer from "./projects/explorer";

function setupProjectsSection(): void {
  const container = document.querySelector<HTMLElement>(".projects--home");
  if (!container) return;

  const grid = container.querySelector<HTMLElement>("[data-projects-grid]");
  const expandBtn = container.querySelector<HTMLButtonElement>(
    "[data-projects-expand-btn]",
  );
  const allProjectsLink = container.querySelector<HTMLAnchorElement>(
    "[data-projects-all-link]",
  );
  const filterButtons = Array.from(
    container.querySelectorAll<HTMLButtonElement>(".projects__filter-btn"),
  );
  const allItems = Array.from(
    container.querySelectorAll<HTMLElement>(".projects__grid-item"),
  );
  const countEl = expandBtn?.querySelector<HTMLElement>(
    ".projects__expand-count",
  );

  if (!grid || !expandBtn || !countEl || !allProjectsLink) return;

  let activeCategory = "all";
  const INITIAL_VISIBLE_COUNT = 3;
  const EXPAND_BATCH_SIZE = 3;
  let visibleCount = INITIAL_VISIBLE_COUNT;

  const render = () => {
    const filteredItems = allItems.filter((item) => {
      if (activeCategory === "all") return true;
      const categories = (item.dataset.category || "").split(/\s+/);
      return categories.includes(activeCategory);
    });

    const visibleBatch = filteredItems.slice(0, visibleCount);

    allItems.forEach((item) => {
      const matchesFilter = filteredItems.includes(item);
      const isInBatch = visibleBatch.includes(item);

      item.classList.toggle("is-hidden", !matchesFilter);

      if (matchesFilter) {
        item.classList.toggle("projects__grid-item--revealed", isInBatch);
        item.classList.toggle("projects__grid-item--collapsed", !isInBatch);
      }
    });

    const remainingCount = filteredItems.length - visibleBatch.length;
    if (countEl) {
      countEl.textContent = `+${remainingCount}`;
    }

    if (remainingCount > 0) {
      expandBtn.style.display = "";
      allProjectsLink.style.display = "none";
    } else {
      expandBtn.style.display = "none";
      allProjectsLink.style.display = filteredItems.length === 0 ? "none" : "";
    }
  };

  const handleFilterClick = (button: HTMLButtonElement) => {
    activeCategory = button.dataset.category || "all";
    visibleCount = INITIAL_VISIBLE_COUNT;

    filterButtons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle("projects__filter-btn--active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    render();
  };

  expandBtn.addEventListener("click", () => {
    visibleCount += EXPAND_BATCH_SIZE;
    render();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => handleFilterClick(button));
  });

  render();
}

function initializeProjectScripts(): void {
  if (document.querySelector("[data-projects-grid]")) {
    setupProjectsSection();
  }
  const explorerRoot = document.querySelector<HTMLElement>(
    "[data-projects-explorer]",
  );
  if (explorerRoot) {
    new ProjectsExplorer(explorerRoot);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeProjectScripts);
} else {
  initializeProjectScripts();
}
