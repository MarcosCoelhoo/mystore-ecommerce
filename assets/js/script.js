import MenuMobile from "./modules/menu-mobile.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="container"]'
);
menuMobile.init();
