import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

console.log("TOKEN:", token);

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    ...(token && { Authorization: `token ${token}` }),
  },
});