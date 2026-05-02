export function mapCard() {
  const card = document.getElementById("map-card");
  const close = document.getElementById("map-card-close");
  const map = document.getElementById("map");

  if (!card || !map) return;

  function open() {
    card.classList.remove("hidden");
  }

  function hide() {
    card.classList.add("hidden");
  }

  function toggle() {
    card.classList.contains("hidden") ? open() : hide();
  }

  // Клик по карте → открывает
  map.addEventListener("click", open);

  // Крестик → закрывает
  close?.addEventListener("click", (e) => {
    e.stopPropagation();
    hide();
  });

  // Клик внутри карточки → НЕ закрывает
  card.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  

  // ESC → закрывает
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hide();
    }
  });
}

