import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getData } from "./api";
import { createMarkup } from "./markUp";
import { box, form } from "./refs";

form.addEventListener("submit", searchProduct);

const params = {
  limit: 20,
  skip: 0,
};

let options = {
  threshold: 0.5,
};

let observer = new IntersectionObserver(onScroll, options);

function addMarkup(markup) {
  box.insertAdjacentHTML("beforeend", markup);
}

async function init() {
  const { products } = await getData("products");

  const create = createMarkup(products);
  addMarkup(create);
  observer.observe(document.querySelector(".col-lg-3:last-child"));
}

init();

async function searchProduct(evt) {
  evt.preventDefault();

  const value = evt.target.qwery.value.trim();

  if (!value) return;
  console.log(value);
  const { products } = await getData(`products/search?q=${value}`);
  clearMarkup();
  const create = createMarkup(products);
  addMarkup(create);
}

function clearMarkup() {
  box.innerHTML = "";
}

async function onScroll(entries, observer) {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      params.skip += params.limit;
      const paramUrl = new URLSearchParams(params);
      const { products, total } = await getData("products?" + paramUrl);
      if (products.length) {
        const create = createMarkup(products);
        addMarkup(create);
        observer.observe(document.querySelector(".col-lg-3:last-child"));
      } else {
        alert(`that all images`);
      }
    }

    //   entry.isIntersecting
    //   entry.target
  });
}
