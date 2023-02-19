export default class CarouselControl {
  constructor(controls, list) {
    this.controls = document.querySelectorAll(controls);
    this.listCarousel = document.querySelectorAll(list);
    this.currentItem = 0;
  }

  handleCarousel({ target }) {
    const max = this.listCarousel.length;

    if (target.dataset.control === "right") {
      this.currentItem += 2;
    } else {
      this.currentItem -= 2;
    }

    if (this.currentItem >= max) {
      this.currentItem = 0;
    }

    if (this.currentItem < 0) {
      this.currentItem = max - 1;
    }

    this.listCarousel[this.currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }

  addEventInControls() {
    this.controls.forEach((control) => {
      control.addEventListener("click", (event) => {
        this.handleCarousel(event);
      });
    });
  }

  init() {
    this.addEventInControls();
  }
}
