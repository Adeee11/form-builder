import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Token {
    token:string
}

const initialState:Token ={
    token:''
}

export const tokenSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers:{
        changeToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload;
        }
    }
})

export const {changeToken} = tokenSlice.actions;
export default tokenSlice.reducer;