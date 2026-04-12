const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".content-panel");
const indicator = document.querySelector(".tab-indicator");

const updateIndicator = (activeTab) => {
  if (!indicator || !activeTab) {
    return;
  }

  const tabsContainer = activeTab.parentElement;
  const containerRect = tabsContainer.getBoundingClientRect();
  const tabRect = activeTab.getBoundingClientRect();
  const leftOffset = tabRect.left - containerRect.left;

  indicator.style.width = `${tabRect.width}px`;
  indicator.style.transform = `translateX(${leftOffset}px)`;
};

const setActiveTab = (tabName) => {
  let activeTab = null;
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");

    if (isActive) {
      activeTab = tab;
    }
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.content === tabName);
  });

  updateIndicator(activeTab);
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

const activeTab = document.querySelector(".tab.active") || tabs[0];
updateIndicator(activeTab);

window.addEventListener("resize", () => {
  updateIndicator(document.querySelector(".tab.active"));
});