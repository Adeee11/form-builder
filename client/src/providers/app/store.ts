import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import userReducer from "../features/userSlice";
import tokenReducer from "../features/tokenSlice";
import editFormIdReducer from "../features/editFormIdSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    token: tokenReducer,
    editFormId: editFormIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
