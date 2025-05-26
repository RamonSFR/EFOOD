import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './reducers/cart'
import { modalReducer } from './reducers/modal'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
