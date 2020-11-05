import { LOGIN_GRAPHQL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_GRAPHQL:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
