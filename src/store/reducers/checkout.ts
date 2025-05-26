import { createSlice } from '@reduxjs/toolkit'

interface CheckoutState {
  isOpen: boolean
}

const initialState: CheckoutState = {
  isOpen: false
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isOpen = true
    },
    closeCheckout: (state) => {
      state.isOpen = false
    }
  }
})

export const { openCheckout, closeCheckout } = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer
