import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const itemsCart = localStorage.getItem('cart')
const itemssCartss: IitemCart[] = itemsCart && JSON.parse(itemsCart)
const CartEmptyState = [] as IitemCart[]

export const cartSlice = createSlice({
  name: 'cart',
  initialState: itemssCartss ? itemssCartss : CartEmptyState,
  reducers: {
    addItem: (state, action: PayloadAction<IitemCart>) => {
      let { _id } = action.payload.item
      if (state.find(element => element.item._id === _id)) {
        ""
      } else {
        state.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },

    removeItem: (state, action: PayloadAction<IitemCart>) => {
      let { _id } = action.payload.item
      const index = state.findIndex(obj => {
        return obj.item._id === _id
      })
      if (index !== -1) {
        state.splice(index, 1)
        try{
          localStorage.setItem('cart', JSON.stringify(state))
        }catch(err){
          console.log(err)
        }
      }
      
      if (state.length < 1) {
        localStorage.setItem('cart', JSON.stringify(CartEmptyState))
      }
    },

    increaseAmount: (state, action: PayloadAction<IitemCart>) => {
      let { _id } = action.payload.item
      const index = state.map(element => element.item._id).indexOf(_id)
      state[index].amount = state[index].amount + 1
      localStorage.setItem('cart', JSON.stringify(state))
    },

    decreaseAmount: (state, action: PayloadAction<IitemCart>) => {
      let { _id } = action.payload.item
      const index = state.map(element => element.item._id).indexOf(_id)
      state[index].amount = state[index].amount - 1
      localStorage.setItem('cart', JSON.stringify(state))
    },
    getLocalStorage: (state, action) => {
      state = action.payload
    },
    resetCart: () => CartEmptyState
  }
})

export const { addItem, removeItem, increaseAmount,
  decreaseAmount, resetCart, getLocalStorage } = cartSlice.actions
export default cartSlice.reducer