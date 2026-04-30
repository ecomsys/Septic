export function burgerModal() {
  const burgerBtn = document.getElementById("burger-btn");
  const burgerModal = document.getElementById("burger-modal");
  const panel = burgerModal?.querySelector(".burger-modal"); // важно добавить класс в HTML

  function openMenu() {
    burgerModal.classList.remove("hide-burger-modal");
    burgerModal.classList.add("show-burger-modal");

    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    burgerModal.classList.remove("show-burger-modal");
    burgerModal.classList.add("hide-burger-modal");

    document.body.classList.remove("overflow-hidden");
  }

  // open
  burgerBtn?.addEventListener("click", openMenu);

  // close on overlay click ONLY
  burgerModal?.addEventListener("click", (e) => {
    // если клик не внутри панели → закрываем
    if (!panel.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
}