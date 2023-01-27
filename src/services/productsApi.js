import { api } from "./api";

async function getProducts() {
  const response = await api.get("/products");
  return response.data;
}

export const productsApi = { getProducts };
