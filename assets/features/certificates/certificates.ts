// Carousel logic moved to portfolio-carousel.ts Web Component

import type { UiDrawer } from "../../shared/ui/drawer/ui-drawer";

export function setupCertificatesFiltersDrawer() {
  const container = document.querySelector(".certificates");
  if (!container) return;
  const mobileFilterBtn = container.querySelector<HTMLButtonElement>(
    ".certificates__mobile-filter-btn",
  );
  if (!mobileFilterBtn) return;

  const drawer = document.getElementById(
    "certificatesFiltersUiDrawer",
  ) as UiDrawer | null;

  mobileFilterBtn.addEventListener("click", () => {
    populateDrawer();
    drawer?.open();
  });

  function populateDrawer() {
    if (!drawer || !drawer.listEl || !drawer.titleEl || !drawer.descEl) return;
    drawer.titleEl.textContent =
      mobileFilterBtn?.textContent?.trim() || "Filtros";
    drawer.descEl.textContent = "Selecione uma instituição";
    drawer.listEl.innerHTML = "";

    const originalButtons = Array.from(
      container!.querySelectorAll<HTMLButtonElement>(
        ".certificates__filters-desktop .certificates__filter-btn",
      ),
    );

    const fragment = document.createDocumentFragment();
    originalButtons.forEach((btn) => {
      const clone = btn.cloneNode(true) as HTMLButtonElement;
      clone.addEventListener("click", () => {
        btn.click();
        drawer.close();
      });
      fragment.appendChild(clone);
    });
    drawer.listEl.appendChild(fragment);
  }
}
