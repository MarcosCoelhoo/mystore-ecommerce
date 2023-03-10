export default function initCarouselControl(idSection, parentListProducts) {
  const controlsCarousel = document.querySelectorAll(
    `${idSection} [data-control]`
  );
  const listCarousel = parentListProducts.querySelectorAll(`.product`);

  let currentItem = 0;

  function handleCarousel({ target }) {
    const max = listCarousel.length;

    if (target.dataset.control === "right") {
      currentItem += 2;
    } else {
      currentItem -= 2;
    }

    if (currentItem >= max) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = max - 1;
    }

    listCarousel[currentItem].scrollIntoView({
      inline: "center",
      block: "center",
    });
  }

  controlsCarousel.forEach((control) => {
    control.addEventListener("click", handleCarousel);
  });
}
