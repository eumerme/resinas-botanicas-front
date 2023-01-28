const baseURL = process.env.REACT_APP_API_BASE_URL;

async function getProducts() {
  const response = await fetch(`${baseURL}/products/home`, {
    method: "GET",
  });
  return response.json();
}

async function getProductDetail(id) {
  const response = await fetch(`${baseURL}/products/id/${id}`, {
    method: "GET",
  });
  return response.json();
}

export const productsApi = { getProducts, getProductDetail };
