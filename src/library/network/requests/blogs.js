import { env } from "../env/env";
import { baseService } from "../services/baseService";

export const getBlogs = () => {
  return baseService.get(env.api, "blogs");
};

export const getBlogById = (id) => {
  return baseService.get(env.api, "blogs/" + id);
};

export const deleteBlogById = (id) => {
  return baseService.delete(env.api, "blogs/" + id);
};

export const createBlog = (data) => {
  return baseService.post(env.api, "blogs", data);
};

export const updateBlog = (id, data) => {
  return baseService.put(env.api, "blogs/" + id, data);
}