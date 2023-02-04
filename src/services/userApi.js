import { api } from "./api";

async function signup(data) {
  const response = await api.post("/users/signup", data);
  return response.data;
}

async function signin(data) {
  const response = await api.post("/users/signin", data);
  return response.data;
}

async function getUser(email) {
  const response = await api.get(`/users/profile/${email}`);
  return response.data;
}

async function updateProfile(data) {
  const response = await api.put("/users/update", data);
  return response.data;
}

export const userApi = { signup, signin, getUser, updateProfile };
