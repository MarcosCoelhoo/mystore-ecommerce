import initBuildSection from "./build-section-products.js";

export default function initFetchSectionRecommended() {
  async function fetchRecommended() {
    const jsonProducts = await (
      await fetch("https://dummyjson.com/products?limit=30&skip=10")
    ).json();

    // const dataProduct = {
    //   price: product.price.toFixed(2),
    //   title: product.title,
    //   category: product.category,
    //   imgUrl: "https://api.lorem.space/image?w=640&h=480&hash=",
    // };

    initBuildSection(
      "#recommended",
      jsonProducts.products,
      "https://api.lorem.space/image?w=640&h=480&hash="
    );
  }
  fetchRecommended();
}
