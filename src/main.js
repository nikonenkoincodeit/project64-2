import { getData } from "./api";
import { createProductsMarkup } from "./markup";
import { listRef, formRef } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

const options = {
  rootMargin: "0px",
  threshold: 0.33,
};

const observer = new IntersectionObserver(onInfinityLoad, options);

async function onInfinityLoad(entries, observer) {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      console.log(11);

      observer.unobserve(entry.target);
      const { products } = await getData("products");

      const markup = createProductsMarkup(products);

      addListMarkup(markup);
      observer.observe(document.querySelector(".col-lg-3:last-child"));
    }
  });
}

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

  const markup = createProductsMarkup(products);

  addListMarkup(markup);
  observer.observe(document.querySelector(".col-lg-3:last-child"));
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
