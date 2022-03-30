import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  id: string;
}

const initialState: User = {
  username: "anonymous",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
