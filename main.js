document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navDrawer = document.getElementById("nav-drawer");
  const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

  // Toggle Main Menu
  toggleBtn.addEventListener("click", () => {
    const isOpen = navDrawer.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
  });

  // Toggle Submenus
  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const submenu = document.getElementById(
        trigger.getAttribute("aria-controls")
      );
      const isSubOpen = submenu.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", isSubOpen);
    });
  });

  // Close menu if clicking outside
  document.addEventListener("click", (e) => {
    if (!navDrawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      navDrawer.classList.remove("is-open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
});
