import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

// Configuration for redux-persist to persist the root reducer
const persistConfig = {
  key: "root", // Key for the persisted state in local storage
  storage, // Storage engine to use for persisting the state
};

// Create a persisted reducer using the persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer and apply middleware
export const store = createStore(persistedReducer, applyMiddleware());

// Create a persistor object to persist the Redux store
export const persistor = persistStore(store);
