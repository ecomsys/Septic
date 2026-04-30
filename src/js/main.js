import '@/css/main.css'

// Базовые скрипты для автомастабирования и больших экранов с dpr
import initAutoRem from './utils/autorem';
// const { scaleFactor, destroy } = initAutoRem({
//   baseSiteWidth: 1536,
//   baseFontSize: 16
// });

// import { initViewport } from "@/js/utils/viewport";
// initViewport({
//   breakpoint: 1536,
//   designWidth: 1536
// });

/*======================================================================================================================
Основной js
========================================================================================================================*/
import { burgerModal } from './modules/burger-modal';
import { mapCard } from './modules/map';
import { faqAccordion } from './modules/faq';
import { processSlider } from './modules/proccessSlider';
import { initDatepicker } from './modules/datapicker';
import { speciesTabs } from './modules/species-tabs';

document.addEventListener('DOMContentLoaded', () => {
    burgerModal();
    mapCard();
    faqAccordion(); 
    processSlider(); // yuotube video
    initDatepicker();
    speciesTabs();
})
