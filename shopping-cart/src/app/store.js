import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import productsReducer from "../features/products/productsSlice"
import cartReducer from "../features/products/cartSlice" // this

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    cart: cartReducer, // this
  },
})
