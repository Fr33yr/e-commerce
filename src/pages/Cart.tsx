import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { CartItem } from '../components/CartItem'
import { getLocalStorage } from '../redux/states/cart.state'
import { RootState } from '../redux/store'

export function Cart() {
    const cartState = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        const items = localStorage.getItem('cart')
        let localCart = items && JSON.parse(items)
        if (items) {
            dispatch(getLocalStorage(localCart))
        }
    }, [cartState])

    return (
        <div className='flex flex-col justify-center'>
            <div className='max-w-screen my-0 mx-auto px-8 
            overflow-scroll overflow-x-hidden max-h-96'>
                {
                    cartState && cartState.map((element, index) => (<CartItem {...element} key={index} />))
                }
            </div>
            <div className='flex flex-row justify-center mt-12 ml-96'>
                <h3 className='text-white'>$999</h3>
                <button className='py-1 px-2 border-2 ml-32
                    border-white text-white text-center w-28'
                >
                    Buy cart
                </button>
            </div>
        </div>
    )
}
