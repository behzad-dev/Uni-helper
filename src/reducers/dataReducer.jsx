import { RETRIEVE_GRAPHQL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_GRAPHQL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
