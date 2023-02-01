import { api } from "./api";

async function getProducts() {
  const response = await api.get("/api/products/home");
  return response.data;
}

async function getProductDetail(id) {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
}

async function getProductByCategory(id) {
  const response = await api.get(`/api/products/category/${id}`);
  return response.data;
}

export const productsApi = { getProducts, getProductDetail, getProductByCategory };
