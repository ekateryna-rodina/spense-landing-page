(function () {
  function onActiveMenu(e) {
    const parent = e.target.closest("ul");
    parent.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
    e.target.classList.add("active");
  }
  const links = document.querySelectorAll(".header__links>li");
  console.log(links);
  links.forEach((l) => l.addEventListener("click", onActiveMenu, true));
})();
