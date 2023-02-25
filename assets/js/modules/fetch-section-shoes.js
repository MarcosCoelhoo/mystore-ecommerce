import initBuildSection from "./build-section-products.js";

export default function initFetchSectionShoes() {
  async function fetchShoes() {
    const jsonProducts = await (
      await fetch("https://dummyjson.com/products?limit=30&skip=60")
    ).json();

    // const dataProduct = {
    //   price: product.price.toFixed(2),
    //   title: product.title,
    //   category: product.category,
    //   imgUrl: "https://api.lorem.space/image/shoes?w=640&h=480&hash=",
    // };

    initBuildSection(
      "#shoes",
      jsonProducts.products,
      "https://api.lorem.space/image/shoes?w=640&h=480&hash="
    );
  }
  fetchShoes();
}
