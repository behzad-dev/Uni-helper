import axios from "axios";
export const myApi = axios.create({
  //Here You Should Set Your Server, this Application using GraphQL for endpoint.
  baseURL: "http://localhost:6233/graphql",
});
