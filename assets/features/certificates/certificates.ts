export function setupCertificatesCarousel() {
  const carousel = document.getElementById("certificatesGrid");
  const dotsContainer = document.getElementById("certificatesDots");
  const paginationContainer = document.getElementById("certificatesPagination");

  if (!carousel || !dotsContainer || !paginationContainer) return;

  const updateDots = () => {
    const cards = Array.from(carousel.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && !child.classList.contains("is-hidden"),
    );

    const count = cards.length;

    if (count <= 1) {
      paginationContainer.style.display = "none";
      return;
    } else {
      paginationContainer.style.display = "";
    }

    if (dotsContainer.children.length !== count) {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("span");
        dot.className = "certificates__dot";
        if (i === 0) dot.classList.add("certificates__dot--active");
        dot.id = `carousel-dot-${i}`;
        dotsContainer.appendChild(dot);
      }
    }

    if (count === 0) return;

    const firstCard = cards[0];
    const cardWidth =
      firstCard.offsetWidth + parseFloat(getComputedStyle(carousel).gap || "0");
    const scrollPosition = carousel.scrollLeft;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    let activeIndex;

    if (scrollPosition >= maxScroll - 10) {
      activeIndex = count - 1;
    } else {
      activeIndex = Math.max(
        0,
        Math.min(count - 1, Math.round(scrollPosition / cardWidth)),
      );
    }

    for (let i = 0; i < count; i++) {
      const dot = document.getElementById(`carousel-dot-${i}`);
      if (dot) {
        if (i === activeIndex) {
          dot.classList.add("certificates__dot--active");
        } else {
          dot.classList.remove("certificates__dot--active");
        }
      }
    }
  };

  carousel.addEventListener("scroll", () => {
    requestAnimationFrame(updateDots);
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(updateDots);
  });

  updateDots();

  const observer = new MutationObserver(() => {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
    updateDots();
  });

  observer.observe(carousel, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
}

import { Drawer } from "../../shared/ui/drawer/drawer";

export function setupCertificatesFiltersDrawer() {
  const container = document.querySelector(".certificates");
  if (!container) return;
  const mobileFilterBtn = container.querySelector<HTMLButtonElement>(
    ".certificates__mobile-filter-btn",
  );
  if (!mobileFilterBtn) return;

  const drawer = new Drawer({ idPrefix: "certificatesFilters" });

  mobileFilterBtn.addEventListener("click", () => {
    populateDrawer();
    drawer.open();
  });

  function populateDrawer() {
    if (!drawer.listEl || !drawer.titleEl || !drawer.descEl) return;
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
