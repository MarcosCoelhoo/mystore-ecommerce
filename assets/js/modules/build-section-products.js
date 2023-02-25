import initCarouselControl from "./carousel-control.js";

export default function initBuildSection(idSection, productObjData, imgUrl) {
  const parentListSection = document.querySelector(
    `${idSection} .list-products`
  );

  function buildSection() {
    productObjData.forEach((product) => {
      // desconsrói o objeto e coloca os dados em constantes
      const { category, price, title } = product;

      // cria um hash aleatorio
      // para criar imagens diferentes
      const randomHash = (Math.random() * 100).toFixed();

      const productHtml = document.createElement("li");
      productHtml.classList.add("product");

      productHtml.innerHTML = `
           <div class="favorite">
           <span class="icon material-symbols-rounded">
             heart_plus
           </span>
         </div>
 
         <div class="image">
           <img src="${imgUrl}${randomHash}" alt="">
         </div>
 
         <div class="content">
           <div class="description">
             <span class="category">${category}</span>
             <h3 class="name">${title}</h3>
           </div>
           <div class="footer">
             <h4 class="price">R$${price.toFixed(2)}</h4>
             <div class="cart-button">
               <span class="icon material-symbols-rounded">
                 add_shopping_cart
               </span>
             </div>
           </div>
         </div>
           `;

      parentListSection.appendChild(productHtml);
    });
  }
  buildSection();
  initCarouselControl(idSection, parentListSection);
}
