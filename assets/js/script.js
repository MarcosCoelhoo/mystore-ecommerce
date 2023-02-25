import MenuMobile from "./modules/menu-mobile.js";
import initFetchSectionRecommended from "./modules/fetch-section-recommended.js";
import initFetchSectionSmartwatches from "./modules/fetch-section-smartwatches.js";
import initFetchSectionShoes from "./modules/fetch-section-shoes.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="container"]'
);
menuMobile.init();

initFetchSectionRecommended();
initFetchSectionSmartwatches();
initFetchSectionShoes();
