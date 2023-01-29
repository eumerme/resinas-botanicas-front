import { baseURL } from "./apiUrl";

async function getProducts() {
  const response = await fetch(`${baseURL}/products/home`, {
    method: "GET",
  });
  return response.json();
}

async function getProductDetail(id) {
  const response = await fetch(`${baseURL}/products/${id}`, {
    method: "GET",
  });
  return response.json();
}

async function getProductByCategory(id) {
  const response = await fetch(`${baseURL}/products/category/${id}`, {
    method: "GET",
  });

  return response.json();
}

export const productsApi = { getProducts, getProductDetail, getProductByCategory };
