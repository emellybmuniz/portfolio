document.addEventListener("DOMContentLoaded", () => {
  const ICONS = {
    Code2:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-wrapper"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="M14.5 4l-5 16"/></svg>',
    Database:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-wrapper"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
    LayoutTemplate:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-wrapper"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>',
    Briefcase:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-wrapper"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    PenTool:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-wrapper"><path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  };

  const skills = [
    {
      name: "HTML",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/html.svg",
      color: { from: "#F16529", to: "#D6336C" },
    },
    {
      name: "CSS",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/css.svg",
      color: { from: "#2965F1", to: "#2DD4BF" },
    },
    {
      name: "JavaScript",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/js.svg",
      color: { from: "#f7e031", to: "#F0B90B" },
    },
    {
      name: "Python",
      category: ["backend"],
      icon: "src/assets/images-skills-svg/python.svg",
      color: { from: "#2C3E50", to: "#1A2533" },
    },
    {
      name: "MySQL",
      category: ["backend"],
      icon: "src/assets/images-skills-svg/mysql.svg",
      color: { from: "#347098", to: "#2f6a91" },
    },
    {
      name: "VS Code",
      category: ["tools"],
      icon: "src/assets/images-skills-svg/vscode.svg",
      color: { from: "#2C3E50", to: "#1A2533" },
    },
    {
      name: "IntelliJ IDEA",
      category: ["tools"],
      icon: "src/assets/images-skills-svg/intellij.svg",
      color: { from: "#a855f7", to: "#ec4899" },
    },
    {
      name: "Java",
      category: ["backend"],
      icon: "src/assets/images-skills-svg/Java.svg",
      color: { from: "#dbdbdb", to: "#edf5f7" },
    },
    {
      name: "Git",
      category: ["tools"],
      icon: "src/assets/images-skills-svg/Git.svg",
      color: { from: "#1f2937", to: "#000000" },
    },
    {
      name: "Firebase",
      category: ["tools", "backend"],
      icon: "src/assets/images-skills-svg/Firebase.svg",
      color: { from: "#3c3c3c", to: "#1e1e1e" },
    },
    {
      name: "Canva",
      category: ["design"],
      icon: "src/assets/images-skills-svg/Canva.svg",
      color: { from: "#2C3E50", to: "#1A2533" },
    },
    {
      name: "Figma",
      category: ["design"],
      icon: "src/assets/images-skills-svg/Figma.svg",
      color: { from: "#4a5568", to: "#2d3748" },
    },
    {
      name: "Maven",
      category: ["tools", "backend"],
      icon: "src/assets/images-skills-svg/maven.svg",
      color: { from: "#02303A", to: "#000000" },
    },
    {
      name: "Gradle",
      category: ["tools", "backend"],
      icon: "src/assets/images-skills-svg/gradle.svg",
      color: { from: "#e3eff2", to: "#edf5f7" },
    },
    {
      name: "MongoDB",
      category: ["backend"],
      icon: "src/assets/images-skills-svg/mongodb.svg",
      color: { from: "#104828", to: "#0A2C18" },
    },
    {
      name: "Next.js",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/nextjs.svg",
      color: { from: "#000000", to: "#444444" },
    },
    {
      name: "Tailwind CSS",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/tailwind.svg",
      color: { from: "#06B6D4", to: "#38BDF8" },
    },
    {
      name: "Bootstrap",
      category: ["frontend"],
      icon: "src/assets/images-skills-svg/bootstrap.svg",
      color: { from: "#fff", to: "#D899FF" },
    },
  ];

  const categories = [
    { id: "all", labelKey: "skills.allSkills", iconName: "Code2" },
    { id: "frontend", labelKey: "skills.frontend", iconName: "LayoutTemplate" },
    { id: "backend", labelKey: "skills.backend", iconName: "Database" },
    { id: "tools", labelKey: "skills.tools", iconName: "Briefcase" },
    { id: "design", labelKey: "skills.design", iconName: "PenTool" },
  ];

  let activeCategory = "all";
  let translations = {};

  const resolve = (path, obj) => {
    if (!path || !obj) return null;
    return path
      .split(".")
      .reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  };

  const desktopFilterButtons = document.getElementById(
    "desktop-filter-buttons"
  );
  const desktopSkillsGrid = document.getElementById("desktop-skills-grid");
  const mobileCategoryButtons = document.getElementById(
    "mobile-category-buttons"
  );

  const drawerOverlay = document.getElementById("drawer-overlay");
  const drawerContent = document.getElementById("drawer-content");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerDescription = document.getElementById("drawer-description");
  const drawerSkillsList = document.getElementById("drawer-skills-list");
  const drawerCloseButton = document.getElementById("drawer-close-button");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const getTextColorForBackground = (hexColor) => {
    if (!hexColor || hexColor.length < 7) return "#ffffff";
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? "#111827" : "#ffffff";
  };

  function renderDesktopFilters() {
    if (!desktopFilterButtons) return;
    desktopFilterButtons.innerHTML = "";
    categories.forEach((category) => {
      const isActive = category.id === activeCategory;
      const button = document.createElement("button");
      const label = resolve(category.labelKey, translations) || category.id;

      button.className = `filter-button ${isActive ? "active" : "inactive"}`;
      button.onclick = () => handleFilterClick(category.id);

      button.innerHTML = `
              ${ICONS[category.iconName]}
              <span>${label}</span>
              ${isActive ? '<div class="pulse-effect"></div>' : ""}
          `;
      desktopFilterButtons.appendChild(button);
    });
  }

  function renderDesktopSkills() {
    if (!desktopSkillsGrid) return;
    desktopSkillsGrid.innerHTML = "";

    const filteredSkills =
      activeCategory === "all"
        ? skills
        : skills.filter((skill) => skill.category.includes(activeCategory));

    if (filteredSkills.length === 0) {
      const noSkillsMessage =
        resolve("skills.noSkills", translations) ||
        "No skills found for this category.";
      desktopSkillsGrid.innerHTML = `<p class="no-skills-message">${noSkillsMessage}</p>`;
      return;
    }

    filteredSkills.forEach((skill, index) => {
      const skillCard = document.createElement("div");
      skillCard.className = "skill-card glass-card animate-scale-in";
      skillCard.style.animationDelay = `${index * 0.05}s`;

      const categoryTags = skill.category
        .map((cat) => `<span>${cat}</span>`)
        .join(" ");

      const color = skill.color || { from: "#9ca3af", to: "#4b5563" };
      const gradient = `linear-gradient(to bottom right, ${color.from}, ${color.to})`;

      skillCard.innerHTML = `
              <div class="icon-container">
                  <div class="icon-bg" style="background-image: ${gradient}">
                      <img src="${skill.icon}" alt="${skill.name}" />
                  </div>
                  <div class="glow-effect" style="background-image: ${gradient}"></div>
              </div>
              <h3>${skill.name}</h3>
              <div class="category-tags">${categoryTags}</div>
          `;
      desktopSkillsGrid.appendChild(skillCard);
    });
  }

  function renderMobileButtons() {
    if (!mobileCategoryButtons) return;
    mobileCategoryButtons.innerHTML = "";
    categories.forEach((category, index) => {
      const categorySkills =
        category.id === "all"
          ? skills
          : skills.filter((s) => s.category.includes(category.id));

      const label = resolve(category.labelKey, translations) || category.id;
      const skillsText = resolve("skills.skills", translations) || "skills";

      const button = document.createElement("button");
      button.className = "glass-card animate-fade-in";
      button.style.animationDelay = `${index * 0.05}s`;
      button.onclick = () => openDrawer(category.id);

      button.innerHTML = `
              ${ICONS[category.iconName]}
              <span class="font-medium">${label}</span>
              <span class="category-count">${
                categorySkills.length
              } ${skillsText}</span>
          `;
      mobileCategoryButtons.appendChild(button);
    });
  }

  function handleFilterClick(categoryId) {
    activeCategory = categoryId;
    renderDesktopFilters();
    renderDesktopSkills();
  }

  function openDrawer(categoryId) {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;

    const categorySkills =
      category.id === "all"
        ? skills
        : skills.filter((s) => s.category.includes(category.id));

    const label = resolve(category.labelKey, translations) || category.id;
    const skillText = resolve("skills.skill", translations) || "skill";
    const skillsText = resolve("skills.skills", translations) || "skills";
    const categoryText =
      resolve("skills.categoryText", translations) || "in this category";

    drawerTitle.innerHTML = `${ICONS[category.iconName]} ${label}`;
    drawerTitle.dataset.categoryId = categoryId;
    drawerDescription.textContent = `${categorySkills.length} ${
      categorySkills.length === 1 ? skillText : skillsText
    } ${categoryText}`;

    drawerSkillsList.innerHTML = "";
    categorySkills.forEach((skill) => {
      const color = skill.color || { from: "#9ca3af", to: "#4b5563" };
      const badge = document.createElement("div");
      badge.className = "skill-badge";
      badge.style.backgroundImage = `linear-gradient(to bottom right, ${color.from}, ${color.to})`;
      badge.style.color = getTextColorForBackground(color.from);
      badge.innerHTML = `
              <img src="${skill.icon}" alt="${skill.name}" />
              ${skill.name}
          `;
      drawerSkillsList.appendChild(badge);
    });

    drawerOverlay.classList.add("visible");
    drawerContent.classList.add("visible");
    document.body.style.overflow = "hidden";

    if (scrollTopBtn) {
      scrollTopBtn.classList.remove("show");
    }
  }

  function closeDrawer() {
    drawerOverlay.classList.remove("visible");
    drawerContent.classList.remove("visible");
    document.body.style.overflow = "";

    if (scrollTopBtn && window.scrollY > 500) {
      scrollTopBtn.classList.add("show");
    }
  }

  function updateUI() {
    renderDesktopFilters();
    renderDesktopSkills();
    renderMobileButtons();

    if (drawerContent.classList.contains("visible")) {
      const categoryId = drawerTitle.dataset.categoryId;
      if (categoryId) {
        openDrawer(categoryId);
      }
    }
  }

  drawerCloseButton.addEventListener("click", closeDrawer);
  drawerOverlay.addEventListener("click", closeDrawer);

  document.addEventListener("languageChanged", (e) => {
    translations = e.detail.translations;
    updateUI();
  });
});
