import { baseURL } from "./apiUrl";

async function getCategories() {
  const response = await fetch(`${baseURL}/categories`, {
    method: "GET",
  });
  return response.json();
}

export const categoriesApi = { getCategories };
