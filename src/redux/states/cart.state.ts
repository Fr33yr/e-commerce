import { createSlice } from '@reduxjs/toolkit'

export const CartEmptyState: ICart = {
  cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartEmptyState,
    reducers: {
        addItem: (state, action) => action.payload,
        removeItem: (state, action) => action.payload,
        resetCart: () => CartEmptyState
    }
})

export const { addItem, resetCart} = cartSlice.actions
export default cartSlice.reducer