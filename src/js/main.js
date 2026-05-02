import "@/css/main.css";

// Базовые скрипты для автомастабирования и больших экранов с dpr
import initAutoRem from "./utils/autorem";
const { scaleFactor, destroy } = initAutoRem({
  baseSiteWidth: 1536,
  baseFontSize: 16
});

import { initViewport } from "@/js/utils/viewport";
initViewport({
  breakpoint: 1536,
  designWidth: 1536
});

/*======================================================================================================================
Основной js
========================================================================================================================*/
import { burgerModal } from "./modules/burger-modal";
import { mapCard } from "./modules/map";
import { faqAccordion } from "./modules/faq";
import { processSlider } from "./modules/proccessSlider";
import { initDatepicker } from "./modules/datapicker";
import { speciesTabs } from "./modules/species-tabs";
import { initProductsSliders } from "./modules/productsSlider";
import { installationSlider } from "./modules/installationSlider";
import { compareSlider } from "./modules/compareSlider";
import { heroBurgerDriwer } from "./modules/hero-driwer";
import { initModalTriggers } from "./modules/modalController";

import { initProductModalTriggers } from "./modules/productModalController";
import { initSuccessModalTriggers } from "./modules/successModalController";

document.addEventListener("DOMContentLoaded", () => {
  burgerModal();
  mapCard();
  faqAccordion();
  processSlider(); // yuotube video
  initDatepicker();
  speciesTabs();
  initProductsSliders();
  installationSlider();
  compareSlider();
  heroBurgerDriwer();
  initModalTriggers();
  initProductModalTriggers();
  initSuccessModalTriggers();
});

