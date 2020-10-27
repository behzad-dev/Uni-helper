import { LOGIN_GRAPHQL } from "../actions/types";
// import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_GRAPHQL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
