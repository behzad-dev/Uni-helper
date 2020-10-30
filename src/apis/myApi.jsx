import axios from "axios";
export const myApi = axios.create({
  // baseURL: "http://test.itsbeh.ir/graphql/",

  baseURL: "http://localhost:6233/graphql",
});
