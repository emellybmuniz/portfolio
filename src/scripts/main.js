const showProjectsButton = document.querySelector(".btn-show-projects");
const inactiveProjects = document.querySelectorAll(".project:not(.active)");
const projectsSection = document.querySelector("#projects");
let showMoreText = "Mostrar mais";
let showLessText = "Mostrar menos";

showProjectsButton.addEventListener("click", () => {
  const isButtonActive = showProjectsButton.classList.contains("active");

  if (isButtonActive) {
    hideProjects();
  } else {
    showMoreProjects();
  }
});

function hideProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.remove("active");
  });
  showProjectsButton.classList.remove("active");
  showProjectsButton.textContent = showMoreText;

  setTimeout(() => {
    projectsSection.scrollIntoView();
  }, 100);
}

function showMoreProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.add("active");
  });
  showProjectsButton.classList.add("active");
  showProjectsButton.textContent = showLessText;
}

// Parallax effect
if (window.matchMedia("(pointer: fine)").matches) {
  const lightPos = { x: 0, y: 0 };
  const targetPos = { x: 0, y: 0 };
  const easeFactor = 0.15;
  let animationFrameId = null;

  function updateLightPosition() {
    const dx = targetPos.x - lightPos.x;
    const dy = targetPos.y - lightPos.y;

    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      return;
    }
    lightPos.x += dx * easeFactor;
    lightPos.y += dy * easeFactor;

    document.body.style.setProperty("--mouse-x", `${Math.round(lightPos.x)}px`);
    document.body.style.setProperty("--mouse-y", `${Math.round(lightPos.y)}px`);

    animationFrameId = requestAnimationFrame(updateLightPosition);
  }

  document.documentElement.addEventListener("mousemove", (e) => {
    targetPos.x = e.clientX;
    targetPos.y = e.clientY;

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateLightPosition);
    }
  });
}

const typedEl = document.querySelector(".typed");
let typingText = "";
let i = 0;
let typeTimeout;

function typeAnimation() {
  if (i < typingText.length) {
    typedEl.textContent += typingText.charAt(i);
    i++;
    typeTimeout = setTimeout(typeAnimation, 130);
  }
}

function startTyping(text) {
  if (typeTimeout) clearTimeout(typeTimeout);
  if (typedEl) typedEl.textContent = "";
  typingText = text;
  i = 0;
  typeAnimation();
}

window.addEventListener("load", () => {
  const slideContainer = document.querySelector(".certificates-slide");
  if (slideContainer) {
    const slideContent = slideContainer.innerHTML;
    slideContainer.innerHTML += slideContent;
  }
});

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  }
});

// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", () => {
  /**
   * Creates an Intersection Observer to add/remove a CSS class when an element enters/leaves the viewport.
   * This ensures animations run only when visible.
   * @param {string} selector - The CSS selector for the element to observe.
   * @param {string} animationClass - The CSS class to toggle.
   * @param {number} threshold - The percentage of the element that needs to be visible to trigger the animation.
   */
  const createAnimationObserver = (selector, animationClass, threshold) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(animationClass, entry.isIntersecting);
        });
      },
      { threshold }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  };

  createAnimationObserver(".home .photo.inner-shadow", "animate-gradient", 0.2);
  createAnimationObserver(".home .informations", "fadeInLeft", 0.2);
  createAnimationObserver(".home .photo-container", "fadeInRight", 0.2);
  createAnimationObserver(".projects", "in-view", 0.1);
  createAnimationObserver(".certificates", "in-view", 0.25);
  createAnimationObserver(".skills", "in-view", 0.12);
  createAnimationObserver(".project", "in-view", 0.2);
  createAnimationObserver(".btn-show-projects", "in-view", 0.2);
  createAnimationObserver(".form-container", "in-view", 0.15);
});

document.addEventListener("languageChanged", (e) => {
  const { translations } = e.detail;

  const resolve = (path, obj) =>
    path.split(".").reduce((p, c) => (p && p[c]) || null, obj);

  showMoreText = resolve("projects.showMore", translations) || showMoreText;
  showLessText = resolve("projects.showLess", translations) || showLessText;

  if (showProjectsButton) {
    const isButtonActive = showProjectsButton.classList.contains("active");
    showProjectsButton.textContent = isButtonActive
      ? showLessText
      : showMoreText;
  }

  const typedText = resolve("home.typed", translations);
  if (typedEl && typedText) {
    startTyping(typedText);
  }
});
