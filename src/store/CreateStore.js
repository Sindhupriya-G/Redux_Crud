import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/CreateSlice'

export const store=configureStore({
    devTools:'true',
    reducer:{
        users:userReducer
    }
})
