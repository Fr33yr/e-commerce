import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './states/cart.state'
import searchReducer from './states/search.state'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch