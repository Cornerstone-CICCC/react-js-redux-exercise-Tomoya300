import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/UserSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export type AppDispatch = typeof store.dispatch