import { getData } from "./api";
import { createProductsMarkup } from "./markup";
import { listRef, formRef } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formRef.addEventListener("submit", onSubmit);

async function onSubmit(evt) {
  evt.preventDefault();
  const searchValue = evt.target.qwery.value.trim();
  if (!searchValue) {
    return;
  }
  const { products } = await getData(`products/search?q=${searchValue}`);
  console.log(products);
  const markup = createProductsMarkup(products);
  clearMarkup();
  addListMarkup(markup);
}

async function init(e) {
  const { products } = await getData("products");
  console.log(products);
  const markup = createProductsMarkup(products);
  console.log(markup);
  addListMarkup(markup);
}
init();

function addListMarkup(markup = "") {
  listRef.insertAdjacentHTML("beforeend", markup);
}

function clearMarkup() {
  listRef.innerHTML = "";
}

// const a = 5;
// const c = 10;
// const result = a + c;
// // ^?
