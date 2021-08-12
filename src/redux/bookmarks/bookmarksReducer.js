import { ADD_BOOKMARK } from "./actions";

const initialState = {
  bookmarks: [],
};

export const bookmarksReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOKMARK) {
    return {
      ...state,
      currentUser: [...state.bookmarks, action.payload],
    };
  }
  return state;
};
