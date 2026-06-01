interface FilterGroupConfig {
  containerSelector: string;
  buttonSelector: string;
  itemSelector: string;
  activeButtonClass?: string;
  hiddenClass?: string;
  defaultCategory?: string;
}

function setupFilterGroup(config: FilterGroupConfig): void {
  const container = document.querySelector<HTMLElement>(
    config.containerSelector,
  );
  if (!container) return;

  const buttons = Array.from(
    container.querySelectorAll<HTMLButtonElement>(config.buttonSelector),
  );
  const items = Array.from(
    container.querySelectorAll<HTMLElement>(config.itemSelector),
  );

  if (buttons.length === 0 || items.length === 0) return;

  const activeButtonClass =
    config.activeButtonClass ||
    `${config.buttonSelector.replace(/^[.#]/, "")}--active`;
  const hiddenClass = config.hiddenClass || "is-hidden";

  const applyFilter = (category: string) => {
    items.forEach((item) => {
      const categories = (item.dataset.category || "")
        .split(/\s+/)
        .filter(Boolean);
      const shouldShow = category === "all" || categories.includes(category);
      item.classList.toggle(hiddenClass, !shouldShow);
    });
  };

  const setActiveButton = (clickedButton: HTMLButtonElement) => {
    buttons.forEach((button) => {
      button.classList.remove(activeButtonClass);
      button.setAttribute("aria-pressed", "false");
    });
    clickedButton.classList.add(activeButtonClass);
    clickedButton.setAttribute("aria-pressed", "true");
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category || "all";
      setActiveButton(button);
      applyFilter(category);
    });
  });

  const defaultCategory = config.defaultCategory || "all";
  const defaultButton = buttons.find(
    (button) => button.dataset.category === defaultCategory,
  );
  if (defaultButton) {
    setActiveButton(defaultButton);
  }
  applyFilter(defaultCategory);
}

export { setupFilterGroup };
