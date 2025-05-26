import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type cartState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: cartState = {
  items: [],
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      if (
        state.items.find(
          (item) =>
            item.id === action.payload.id && item.nome === action.payload.nome
        )
      ) {
        alert('Item already on shopping cart')
      } else {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<CardapioItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, clear, open, close } = cartSlice.actions
export const cartReducer = cartSlice.reducer
