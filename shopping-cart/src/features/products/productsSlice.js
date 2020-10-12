import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { getProducts } = productsSlice.actions

export const productsAsync = () => (dispatch) => {
  axios
    .get(`http://localhost:3001/products`)
    .then((resp) => dispatch(getProducts(resp.data)))
}

export const selectProducts = (state) => state.products.products

export default productsSlice.reducer
