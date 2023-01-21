import { getData } from './api';
import { createProductsMarkup } from './markup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

async function init(e) {
  const { products } = await getData('products');
  console.log(products);
  const markup = createProductsMarkup(products);
  console.log(markup);
}
init();
