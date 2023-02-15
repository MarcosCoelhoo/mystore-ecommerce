export default function initMenuMobile() {
  const buttonMenu = document.querySelector('[data-menu="button"]');

  function menuMobile() {
    const containerMenu = document.querySelector('[data-menu="container"]');

    containerMenu.classList.toggle("active");
    buttonMenu.classList.toggle("active");
  }

  buttonMenu.addEventListener("click", menuMobile);
}
