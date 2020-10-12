import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload }
      const foundItem = state.cartItem.find((item) => item.id == newItem.id)
      if (foundItem) {
        console.log(newItem)
        foundItem.quantity = foundItem.quantity + 1
        state.cartItem = state.cartItem.map((item) =>
          item.id === foundItem.id ? foundItem : item
        )
      } else {
        state.cartItem.push({ ...newItem, quantity: 1 })
      }
    },
    subItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (cart) => cart.id !== action.payload
      )
    },
  },
})

export const { addItem, subItem } = cartSlice.actions

export const selectCart = (state) => state.cart.cartItem //import this to the top of Products.js

export default cartSlice.reducer //import this to app/store.js

// createSlice({ state(initialState), action(reducer) })
