import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './states/cart.state'
import searchReducer from './states/search.state'

export interface AppStore {
    cart: ICart,
    search: ISearch
}

export default configureStore<AppStore>({
    reducer: {
        cart: cartReducer,
        search: searchReducer
    }
})