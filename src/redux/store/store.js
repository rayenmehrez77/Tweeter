import { createStore } from "redux";
import rootReducer from "../root-reducer";
import persistStore from "redux-persist/es/persistStore";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default { store, persistor };
