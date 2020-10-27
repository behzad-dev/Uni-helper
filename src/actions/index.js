// import _ from "lodash";
import { myApi } from "../apis/myApi";
import { RETRIEVE_GRAPHQL, LOGIN_GRAPHQL ,CREATEPOST_GRAPHQL} from "./types";
// import history from "../apis/history";

export const retrieve_graphql = () => async (dispatch) => {
  // console.log("Into retrieve_graphql");
  const graph = {
    query: `{getall{Uni_name Field_name Admission LanguageScore Overall_score _id}}`,
  };
  const headersx = {
    "Content-Type": "application/json",
    "Access-Control": "-Allow-Orgin: *",
    test: "mybeh",
  };
  try{
  const response = await myApi.post("", graph, { headers: headersx });
  // console.log(response);
  if(!response){console.log('ERROR');}
  // console.log(response);
  dispatch({ type: RETRIEVE_GRAPHQL, payload: response.data });
  return response;
  }
  catch{
    console.log("ERROR CATCH");
    return null;
  }
  
};

export const login_graphql = (Username, Password) => async (dispatch) => {
  const user = Username;
  // console.log("Into LOGIN");
  const graph = {
    query: `mutation {loginUser(userInput:{username:"${Username}" password:"${Password}"}){
      username 
      token
    }}`,
  };
  const headersx = {
    "Content-Type": "application/json",
    "Access-Control": "-Allow-Orgin: *",
    test: "mybeh",
  };
  const response = await myApi.post("", graph, { headers: headersx });
  console.log(response);
  dispatch({ type: LOGIN_GRAPHQL, payload: response.data });
  return response;
};
export const createpost_graphql = (Uni_name,Field_name, Admission,LanguageScore,Overall_score) => async (dispatch) => {
  console.log("Into CreatePost");
  const graph = {
    query: `mutation {sendnewpost(userInput:{Uni_name:"${Uni_name}" Field_name:"${Field_name}" 
    Admission:"${Admission}" LanguageScore:"${LanguageScore}" Overall_score:"${Overall_score}"}){
       
      Field_name
    }}`,
  };
  const headersx = {
    "Content-Type": "application/json",
    "Access-Control": "-Allow-Orgin: *",
    "Authorization": localStorage.getItem('token'),
    test: "mybeh",
  };
  const response = await myApi.post("", graph, { headers: headersx });
  // console.log(response);
  dispatch({ type: CREATEPOST_GRAPHQL, payload: response.data });
  return response;
};
