import { api } from "./api";

async function getProducts() {
  const response = await api.get("/products/home");
  return response.data;
}

async function getProductDetail(id) {
  console.log(id);
  const response = await api.get(`/products/id/${id}`);
  return response.data;
}

export const productsApi = { getProducts, getProductDetail };
