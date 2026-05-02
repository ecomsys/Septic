import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export function installationSlider() {
  const section = document.querySelector("#installation-slider");
  const nav = document.querySelector("#installation-slider-nav");

  if (!section) return;

  const next = nav.querySelector(".slider-next");
  const prev = nav.querySelector(".slider-prev");

  const slider = new Swiper("#installation-slider", {
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
      640: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },

    on: {
      init(swiper) {
        initPagination(swiper);
        updatePagination(swiper);
      },
      slideChange(swiper) {
        updatePagination(swiper);
      },
    },
  });

  function initPagination(swiper) {
    const container = document.querySelector(".installation-pagination");
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

  function updatePagination(swiper) {
    const items = document.querySelectorAll(".installation-pagination div");

    items.forEach((el, index) => {
      if (index === swiper.snapIndex) {
        el.classList.remove("bg-slate-200");
        el.classList.add("bg-black"); // активный
      } else {
        el.classList.remove("bg-black");
        el.classList.add("bg-slate-200");
      }
    });
  }
}
