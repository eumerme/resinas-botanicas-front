import { api, createHeaders } from "./api";

async function signup(data) {
  const headers = createHeaders();
  const response = await api.post("/users/signup", data, headers);

  return response.data;
}

export const userApi = { signup };
