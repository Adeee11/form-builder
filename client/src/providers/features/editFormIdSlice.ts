import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EditFormState {
  editFormId: String;
}

const initialState: EditFormState = {
  editFormId: "623979d5b03f09fe73e76dda",
};

export const editFormIdSlice = createSlice({
  name: "editFormId",
  initialState,
  reducers: {
    changeEditFormId: (state, action: PayloadAction<String>) => {
      console.log("Edit Form Id Payload", action.payload);
      state.editFormId = action.payload;
    },
  },
});

export const { changeEditFormId } = editFormIdSlice.actions;

export default editFormIdSlice.reducer;
