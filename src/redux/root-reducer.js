import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userReducer";
import { bookmarksReducer } from "./bookmarks/bookmarksReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "bookmarks"],
};

const rootReducer = combineReducers({
  user: userReducer,
  bookmarks: bookmarksReducer,
});

export default persistReducer(persistConfig, rootReducer);
