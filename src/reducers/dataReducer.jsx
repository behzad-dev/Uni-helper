import { RETRIEVE_GRAPHQL } from "../actions/types";
// import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_GRAPHQL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
