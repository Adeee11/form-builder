import { configureStore } from "@reduxjs/toolkit";
import  loginReducer  from '../features/loginSlice'
import  userReducer from '../features/userSlice'

export const store = configureStore({
    reducer:{
        login: loginReducer,
        user: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch