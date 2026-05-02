import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function compareSlider() {
  const section = document.querySelector("#compare-slider");
  const nav = document.querySelector("#compare-slider-nav");

  if (!section || !nav) return;

  const next = nav.querySelector(".slider-next");
  const prev = nav.querySelector(".slider-prev");
  const paginationContainer = nav.querySelector(".compare-pagination");

  const slider = new Swiper("#compare-slider", {
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
         spaceBetween: 25,
      },
      550: {
        slidesPerView: 2,
         spaceBetween: 15,
      },
      750: {
        slidesPerView: 3,
         spaceBetween: 25,
      },
      992: {
        slidesPerView: 4,
         spaceBetween: 25,
      },
      1280: {
        slidesPerView: 5,
         spaceBetween: 25,
      },
    },

    on: {
      init(swiper) {
        togglePagination(swiper);
        initPagination(swiper);
        updatePagination(swiper);
      },
      slideChange(swiper) {
        updatePagination(swiper);
      },
      resize(swiper) {
        togglePagination(swiper);
        initPagination(swiper);
        updatePagination(swiper);
      },
    },
  });

  function togglePagination(swiper) {
    const totalSlides = swiper.slides.length;
    const perView = swiper.params.slidesPerView;

    // если slidesPerView объект (breakpoints)
    const currentPerView =
      typeof perView === "number"
        ? perView
        : swiper.params.breakpoints?.[swiper.currentBreakpoint]?.slidesPerView || 1;

    if (totalSlides <= currentPerView) {
      paginationContainer.classList.add("hidden");
    } else {
      paginationContainer.classList.remove("hidden");
    }
  }

  function initPagination(swiper) {
    const total = swiper.snapGrid.length;

    // если 1 страница — не рисуем
    if (total <= 1) {
      paginationContainer.innerHTML = "";
      return;
    }

    paginationContainer.innerHTML = "";

    for (let i = 0; i < total; i++) {
      const item = document.createElement("div");

      item.className =
        "h-[0.1875rem] flex-1 bg-slate-200 rounded-full cursor-pointer transition-all";

      item.addEventListener("click", () => {
        swiper.slideTo(i);
      });

      paginationContainer.appendChild(item);
    }
  }

  function updatePagination(swiper) {
    const items = paginationContainer.querySelectorAll("div");

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
}