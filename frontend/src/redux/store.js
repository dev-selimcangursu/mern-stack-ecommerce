import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './slices/ProductSlice'
import WebformReducer from './slices/WebformSlice'

export const store = configureStore({
  reducer: {
    product:ProductReducer,
    webform:WebformReducer
  },
})