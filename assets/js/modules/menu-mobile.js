export default class MenuMobile {
  constructor(button, container) {
    this.menuButton = document.querySelector(button);
    this.containerMenu = document.querySelector(container);

    this.menuMobile = this.menuMobile.bind(this);
  }

  menuMobile() {
    this.containerMenu.classList.toggle("active");
    this.menuButton.classList.toggle("active");
  }

  init() {
    this.menuButton.addEventListener("click", this.menuMobile);
  }
}
