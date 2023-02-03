import { api } from "./api";

async function getCategories() {
  const response = await api.get("/categories");
  return response.data;
}

export const categoriesApi = { getCategories };
