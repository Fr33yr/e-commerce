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
          const index = state.findIndex(obj => {
            return obj.item._id === _id
          })
          if (index !== -1){
            state.splice(index, 1)
          }
        },
        increaseAmount: (state, action: PayloadAction<IitemCart>) => {
          let {_id} = action.payload.item
          const index = state.map(element => element.item._id).indexOf(_id)
          state[index].amount = state[index].amount + 1
        },
        decreaseAmount: (state, action: PayloadAction<IitemCart>) => {
          let {_id} = action.payload.item
          const index = state.map(element => element.item._id).indexOf(_id)
          state[index].amount = state[index].amount - 1
        },
        resetCart: () => CartEmptyState
    }
})

export const { addItem, removeItem, increaseAmount, decreaseAmount, resetCart} = cartSlice.actions
export default cartSlice.reducer