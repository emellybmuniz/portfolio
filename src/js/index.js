const showProjectsButton = document.querySelector(".btn-show-projects");
const inactiveProjects = document.querySelectorAll(".project:not(.active)");
const projectsSection = document.querySelector("#projects");

showProjectsButton.addEventListener("click", () => {
  const isButtonActive = showProjectsButton.classList.contains("active");

  if (isButtonActive) {
    hideProjects();
  } else {
    showMoreProjects();
  }
});

// Hide projects
function hideProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.remove("active");
  });
  showProjectsButton.classList.remove("active");
  showProjectsButton.textContent = "Mostrar mais";

  setTimeout(() => {
    projectsSection.scrollIntoView();
  }, 100);
}

// Show more projects
function showMoreProjects() {
  inactiveProjects.forEach((inactiveProject) => {
    inactiveProject.classList.add("active");
  });
  showProjectsButton.classList.add("active");
  showProjectsButton.textContent = "Mostrar menos";
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

// Typing effect
const text = "Olá! Sou a Emelly Beatriz.";
const typedEl = document.querySelector(".typed");

let i = 0;

function type() {
  if (i < text.length) {
    typedEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 130);
  }
}
window.addEventListener("DOMContentLoaded", type);

window.addEventListener("load", () => {
  const slideContainer = document.querySelector(".certificates-slide");
  if (slideContainer) {
    const slideContent = slideContainer.innerHTML;
    slideContainer.innerHTML += slideContent;
  }
});

// Btn scroll to top logic 
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
document.addEventListener('DOMContentLoaded', () => {
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(animationClass, entry.isIntersecting);
      });
    }, { threshold });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  };

  createAnimationObserver('.home .photo.inner-shadow', 'animate-gradient', 0.2);
  createAnimationObserver('.home .informations', 'fadeInLeft', 0.2);
  createAnimationObserver('.home .photo-container', 'fadeInRight', 0.2);
  createAnimationObserver('.projects', 'in-view', 0.1);
  createAnimationObserver('.certificates', 'in-view', 0.25);
  createAnimationObserver('.skills', 'in-view', 0.25);
  createAnimationObserver('.project', 'in-view', 0.2);
  createAnimationObserver('.btn-show-projects', 'in-view', 0.2);
  createAnimationObserver('.form-container', 'in-view', 0.15);
});
