import React from 'react'
import {useSelector} from 'react-redux'

import {CartItem} from '../components/CartItem'
import { RootState } from '../redux/store'


export function Cart() {
const cartState = useSelector((state: RootState) => state.cart)

    return (
        <>
            <div className='max-w-fit flex flex-col justify-center
             gap-8 my-0 mx-auto overflow-scroll overflow-x-hidden'>
                {
                   cartState && cartState.map(element => <CartItem {...element}/>)
                }
            </div>
        </>
    )
}
