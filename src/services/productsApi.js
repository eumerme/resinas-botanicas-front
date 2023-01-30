import { api } from "./api";

async function getProducts() {
  const response = await api.get("/products/home");
  return response.data;
}

async function getProductDetail(id) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

async function getProductByCategory(id) {
  const response = await api.get(`/products/category/${id}`);
  return response.data;
}

export const productsApi = { getProducts, getProductDetail, getProductByCategory };
