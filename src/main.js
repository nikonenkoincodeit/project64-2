import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getData } from "./api";
import {createMarkup} from "./markUp";
import { box, form } from "./refs";

form.addEventListener('submit', searchProduct);

function addMarkup(markup){
box.insertAdjacentHTML('beforeend', markup);

}

async function init(){
const {products} = await getData('products');

const create = createMarkup(products);
addMarkup(create)
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
    box.innerHTML = '';
}
