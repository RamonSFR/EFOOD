import { createSlice } from '@reduxjs/toolkit'

type modalState = {
  isOpen: boolean
}

const initialState: modalState = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { close, open } = modalSlice.actions
export const modalReducer = modalSlice.reducer
