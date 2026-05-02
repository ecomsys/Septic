export function modalController() {
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById("modal-content");
  const closeBtn = document.getElementById("modal-close");

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
  closeBtn?.addEventListener("click", closeModal);

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  return { openModal, closeModal };
}


export function initModalTriggers() {
  const modal = modalController();
  if (!modal) return;

  const triggers = document.querySelectorAll('[data-modal="true"]');

  triggers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      modal.openModal();
    });
  });
}