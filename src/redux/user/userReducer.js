import { SET_CURRENT_USER } from "./actions";

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }
  return state;
};
