import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";


export function initDatepicker() {
  const inputs = document.querySelectorAll("[data-datepicker]");

  inputs.forEach((input) => {
    const fp = flatpickr(input, {
      dateFormat: "d.m.Y",
      allowInput: true,
      disableMobile: true, // важно — чтобы не открывал нативный мобайл пикер
      clickOpens: false,   // мы сами управляем открытием
    });

    const trigger = input
      .closest(".input-field")
      ?.querySelector("[data-trigger]");

    trigger?.addEventListener("click", () => {
      fp.open();
    });

    input.addEventListener("click", () => {
      fp.open();
    });
  });
}