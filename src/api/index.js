import axios from "axios";
axios.defaults.baseURL = "https://dummyjson.com/";

export async function getData(path = "") {
  try {
    const responce = await axios.get(path);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}
