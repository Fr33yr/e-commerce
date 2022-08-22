import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'

import {CartItem} from '../components/CartItem'
import { getLocalStorage } from '../redux/states/cart.state'
import { RootState } from '../redux/store'

export function Cart() {
const cartState = useSelector((state: RootState) => state.cart)
const dispatch = useDispatch()

    useEffect(()=>{
        const items = localStorage.getItem('cart')
        let localCart = items && JSON.parse(items)
        if(items){
            dispatch(getLocalStorage(localCart))
        }
    },[cartState])

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
