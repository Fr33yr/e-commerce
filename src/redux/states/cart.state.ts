import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const CartEmptyState = [] as IData[]

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartEmptyState,
    reducers: {
        addItem: (state, action: PayloadAction<IData>) => {
         state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<IData>) => {
          state.push(action.payload) //cambiar luego
        },
        resetCart: () => CartEmptyState
    }
})

export const { addItem, resetCart} = cartSlice.actions
export default cartSlice.reducer