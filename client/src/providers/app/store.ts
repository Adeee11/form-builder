import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import userReducer from "../features/userSlice";
import tokenReducer from "../features/tokenSlice";
import editFormIdReducer from "../features/editFormIdSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "main-root",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  token: tokenReducer,
  login: loginReducer,
  editFormId: editFormIdReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
