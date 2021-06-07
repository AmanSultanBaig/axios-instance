import axios from "axios";

const instance = axios.create({
  baseURL: ``,
});

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const create = (url, body) => instance.post(url, body)
export const update = (url, body) => instance.put(url, body)
export const remove = (url) => instance.delete(url)
export const get = (url) => instance.get(url);
