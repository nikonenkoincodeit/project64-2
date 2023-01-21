import { getData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

async function init(e) {
  const product = await getData("products");
  console.log(product);
}
init();
