import { env } from "../env/env";
import { baseService } from "../services/baseService";

export const getUsers = () => {
  return baseService.get(env.api, "users");
};

export const getUserById = (id) => {
  return baseService.get(env.api, "users/" + id);
};

export const registerUser = (data) => {
  return baseService.post(env.api, "users", data);
};
