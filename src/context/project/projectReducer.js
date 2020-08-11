import { SELECT_PROJECT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
      break;
    default:
      return state;
  }
};
