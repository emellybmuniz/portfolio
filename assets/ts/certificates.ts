export function setupCertificatesCarousel() {
  const carousel = document.getElementById("certificatesGrid");
  const dotsContainer = document.getElementById("certificatesDots");
  const paginationContainer = document.getElementById("certificatesPagination");

  if (!carousel || !dotsContainer || !paginationContainer) return;

  const updateDots = () => {
    const cards = Array.from(carousel.children).filter(
      (child) => !child.classList.contains("is-hidden"),
    ) as HTMLElement[];

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

    const activeIndex = Math.max(
      0,
      Math.min(count - 1, Math.round(scrollPosition / cardWidth)),
    );

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

  // recalculate dots on filtering
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
