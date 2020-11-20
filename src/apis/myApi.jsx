import axios from "axios";
export const myApi = axios.create({
  //Here You Should Set Your Server, this Application using GraphQL for endpoint.
  //In order to Access data from anywhere, you should get a public server.
  // or if it is only for your usage, you can use localhost
  baseURL: "http://localhost:6233/graphql",
});
