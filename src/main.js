import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { getData } from "./api";
import {createMarkup} from "./markUp";
import {box} from "./refs";


function addMarkup(markup){
box.insertAdjacentHTML('beforeend', markup);

}


async function init(){
const {products} = await getData('products');

const create = createMarkup(products);
addMarkup(create)
}

init();