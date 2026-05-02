export function successModalController() {
  const overlay = document.getElementById("success-modal-overlay");
  const modal = document.getElementById("success-modal-content");
  const closeBtn = document.querySelectorAll("[data-success-modal-close]");

  if (!overlay || !modal) return;

  function openModal() {
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");

    modal.classList.remove("opacity-0", "scale-95");
    modal.classList.add("opacity-100", "scale-100");

    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.add("opacity-0", "pointer-events-none");
    overlay.classList.remove("opacity-100");

    modal.classList.add("opacity-0", "scale-95");
    modal.classList.remove("opacity-100", "scale-100");

    document.body.style.overflow = "";
  }

  // закрытие по overlay (НО не по самому контенту)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // крестик
  closeBtn?.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  return { openModal, closeModal };
}

export function initSuccessModalTriggers() {
  const modal = successModalController();
  if (!modal) return;

  const triggers = document.querySelectorAll('[data-successmodal="true"]');

  triggers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      modal.openModal();
    });
  });
}
