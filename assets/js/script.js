import MenuMobile from "./modules/menu-mobile.js";
import CarouselControl from "./modules/carousel-control.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="container"]'
);
menuMobile.init();

const carouselControl = new CarouselControl(
  "[data-control]",
  ".list-products .product"
);
carouselControl.init();
