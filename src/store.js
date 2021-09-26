import { configureStore } from '@reduxjs/toolkit'
import authReducers from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    ...authReducers,
  },
})