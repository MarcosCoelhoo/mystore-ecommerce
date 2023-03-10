import initBuildSection from "./build-section-products.js";

export default function initFetchSectionSmartwatches() {
  async function fetchSmartwatches() {
    const jsonProducts = await (
      await fetch("https://dummyjson.com/products?limit=30&skip=30")
    ).json();

    // const dataProduct = {
    //   price: product.price.toFixed(2),
    //   title: product.title,
    //   category: product.category,
    //   imgUrl: "https://api.lorem.space/image/watch?w=640&h=480&hash=",
    // };

    initBuildSection(
      "#smartwatches",
      jsonProducts.products,
      "https://api.lorem.space/image/watch?w=640&h=480&hash="
    );
  }
  fetchSmartwatches();
}
