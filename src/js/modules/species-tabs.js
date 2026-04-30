export function speciesTabs() {
  const root = document.querySelector(".species");
  if (!root) return;

  const nav = document.querySelector("#species-tabs-nav");
  const prev = nav.querySelector(".slider-prev");
  const next = nav.querySelector(".slider-next");
  const pagination = nav.querySelector(".species-pagination");

  const rows = root.querySelectorAll("[data-mobile-cell]");
  const mobileHeader = root.querySelector("[data-mobile-header]");

  // 🔹 БЕРЕМ ВСЕ ТИПЫ ИЗ DOM
  const types = [...root.querySelectorAll(".type-col")].map(el => ({
    id: el.dataset.type,
    title: el.dataset.title,
    img: el.dataset.img
  }));

  let current = 0;
  const total = types.length;

  // 🔹 ПАГИНАЦИЯ
  function renderPagination() {
    pagination.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const el = document.createElement("div");

      el.className = `
        flex-1 h-[4px] rounded-full transition
        ${i === current ? "bg-black" : "bg-neutral-300"}
      `;

      pagination.appendChild(el);
    }
  }

  // 🔹 HEADER (МОБИЛКА)
  function renderHeader() {
    const type = types[current];

    mobileHeader.innerHTML = `
      <div class="max-w-[100px] aspect-square mx-auto mb-[8px]">
        <img src="${type.img}" class="w-full h-full object-cover" />
      </div>
      <div class="text-[12px] md:text-[16px] leading-[1.6] text-light-base min-h-[38px] md:min-h-[52px] font-unbounded uppercase leading-[1.6]">${type.title}</div>
    `;
  }

  // 🔹 ТАБЫ
  function render() {
    const type = types[current];

    rows.forEach(cell => {
      const row = cell.closest(".grid");
      const value = row.querySelector(`[data-type="${type.id}"]`).innerHTML;
      cell.innerHTML = value;
    });

    renderHeader();
    renderPagination();

    prev.disabled = current === 0;
    next.disabled = current === total - 1;
  }

  prev.addEventListener("click", () => {
    if (current > 0) {
      current--;
      render();
    }
  });

  next.addEventListener("click", () => {
    if (current < total - 1) {
      current++;
      render();
    }
  });

  render();
}