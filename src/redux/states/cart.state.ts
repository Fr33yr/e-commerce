import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const CartEmptyState = [] as IitemCart[]

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartEmptyState,
    reducers: {
        addItem: (state, action: PayloadAction<IitemCart>) => {
          let {_id} = action.payload.item
          if(state.find(element => element.item._id === _id)){
            ""
          }else{
            state.push(action.payload)
          }
        },
        removeItem: (state, action: PayloadAction<IitemCart>) => {
          let {_id} = action.payload.item
          state = state.filter(element => element.item._id !== _id)
        },
        resetCart: () => CartEmptyState
    }
})

export const { addItem, resetCart} = cartSlice.actions
export default cartSlice.reducer