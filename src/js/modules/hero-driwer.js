export function heroBurgerDriwer() {
  const burgerBtn = document.getElementById("hero-burger-btn");
  const drawer = document.getElementById("hero-drawer");
  const overlay = document.getElementById("hero-overlay");
  const dollyclose = document.querySelector('.dolly-close');

  if (!burgerBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.remove("translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");
    document.documentElement.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");
    document.documentElement.style.removeProperty("overflow");
  }

  // открыть
  burgerBtn.addEventListener("click", openDrawer);

  // закрыть по overlay и пустой ячейке
  overlay.addEventListener("click", closeDrawer);
  dollyclose?.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  drawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeDrawer);
  });
}
