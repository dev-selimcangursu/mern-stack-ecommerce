import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './slices/ProductSlice'
import WebformReducer from './slices/WebformSlice'
import BlogReducer from './slices/BlogSlice'
import OrderReducer from './slices/OrderSlice'
import SearchReducer from './slices/SearchSlice'
import AuthReducer from './slices/AuthSlice'

export const store = configureStore({
  reducer: {
    product:ProductReducer,
    webform:WebformReducer,
    blog:BlogReducer,
    order:OrderReducer,
    search:SearchReducer,
    auth:AuthReducer
  },
})