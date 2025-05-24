import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cart'
import { modalReducer } from './reducers/modal'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
