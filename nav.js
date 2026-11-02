const menuButtons = document.querySelectorAll(".mobile-menu-toggle");

menuButtons.forEach((button) => {
  const menu = document.getElementById(button.getAttribute("aria-controls"));
  if (!menu) return;

  const labelFor = (open) => {
    const isEnglish = document.documentElement.lang === "en";
    if (isEnglish) return open ? "Close navigation" : "Open navigation";
    return open ? "Tutup navigasi" : "Buka navigasi";
  };

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", labelFor(false));
    menu.hidden = true;
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    button.setAttribute("aria-label", labelFor(!isOpen));
    menu.hidden = isOpen;
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});
