import axios from "axios";
export const myApi = axios.create({
  baseURL: "http://localhost:6233/graphql",
});
