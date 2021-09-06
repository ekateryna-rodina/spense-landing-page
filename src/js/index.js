(function () {
  function onActiveMenu(e) {
    const parent = e.target.closest("ul");
    parent.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    e.target.classList.add("active");
  }
  function toggleBars() {
    const menuBars = document.getElementById("toggleMenu");
    const open = menuBars.classList.toggle("open");
    // toggle overlay
    const overlay = document.querySelector(".overlay");
    if (open) {
      overlay.classList.add("fadeIn");
      overlay.classList.remove("fadeOut");

      popupMenu.classList.add("fadeIn");
      popupMenu.classList.remove("fadeOut");
    } else {
      overlay.classList.add("fadeOut");
      overlay.classList.remove("fadeIn");

      popupMenu.classList.add("fadeOut");
      popupMenu.classList.remove("fadeIn");
    }
  }
  const links = document.querySelectorAll(".header__links>li");
  //   toggle bars
  const menuBars = document.getElementById("toggleMenu");
  const popupMenu = document.getElementById("popupMenu");
  links.forEach((l) => l.addEventListener("click", onActiveMenu, true));
  menuBars.addEventListener("click", toggleBars, true);
})();
