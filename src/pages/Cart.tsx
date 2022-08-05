import React from 'react'

import {CartItem} from '../components/CartItem'

export function Cart() {
    return (
        <>
            <div className='max-w-fit flex flex-col justify-center
             gap-8 my-0 mx-auto overflow-scroll overflow-x-hidden'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        </>
    )
}
