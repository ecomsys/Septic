import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function initProductsSliders() {
  const sliders = document.querySelectorAll(
    "[id^='products-slider-']:not([id$='-nav'])",
  );

  sliders.forEach((sliderEl) => {
    const id = sliderEl.id;
    const nav = document.querySelector(`#${id}-nav`);

    if (!nav) return;

    const next = nav.querySelector(".slider-next");
    const prev = nav.querySelector(".slider-prev");
    const pagination = nav.querySelector(".products-pagination");

    const slider = new Swiper(sliderEl, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 25,

      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        724: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      },

      on: {
        init(swiper) {
          initPagination(swiper, pagination);
          updatePagination(swiper, pagination);
        },
        slideChange(swiper) {
          updatePagination(swiper, pagination);
        },
      },
    });
  });
}

/* ================= PAGINATION ================= */

function initPagination(swiper, container) {
  if (!container) return;

  container.innerHTML = "";

  const total = swiper.snapGrid.length;

  for (let i = 0; i < total; i++) {
    const item = document.createElement("div");

    item.className =
      "h-[0.1875rem] flex-1 bg-slate-200 rounded-full cursor-pointer transition-all";

    item.addEventListener("click", () => {
      swiper.slideTo(i);
    });

    container.appendChild(item);
  }
}

function updatePagination(swiper, container) {
  if (!container) return;

  const items = container.querySelectorAll("div");

  items.forEach((el, index) => {
    if (index === swiper.snapIndex) {
      el.classList.remove("bg-slate-200");
      el.classList.add("bg-black");
    } else {
      el.classList.remove("bg-black");
      el.classList.add("bg-slate-200");
    }
  });
}
