import {useSelector} from 'react-redux'

import {CartItem} from '../components/CartItem'
import { RootState } from '../redux/store'
import { useLocalStorage } from '../hooks/useLocalStorage'

export function Cart() {
const cartState = useSelector((state: RootState) => state.cart)

    return (
        <>
            <div className='max-w-fit flex flex-col justify-center
             gap-8 my-0 mx-auto overflow-scroll overflow-x-hidden'>
                {
                   cartState && cartState.map((element, index) => (<CartItem {...element} key={index}/>))
                }
            </div>
        </>
    )
}
