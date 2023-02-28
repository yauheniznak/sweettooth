import { configureStore } from '@reduxjs/toolkit'
import sweets from './sweetSlice'
import cart from './cartSlice'

export const store = configureStore({
    reducer: {
        sweets,
        cart
    },
  })