import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../features/api/apiSlice'
import authSlice from '../features/auth/authSlice'
import filterSlice from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})