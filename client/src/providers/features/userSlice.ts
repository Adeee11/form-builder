import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    username:string,
}

const initialState:User = {
    username: "anonymous"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        changeUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})

export const { changeUserName} = userSlice.actions
export default userSlice.reducer