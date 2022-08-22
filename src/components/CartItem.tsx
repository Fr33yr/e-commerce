import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { removeItem, increaseAmount, decreaseAmount } from '../redux/states/cart.state'
import { RootState } from '../redux/store'


export function CartItem({ item, amount }: IitemCart) {
    const { _id, name, imgUrl, description, pricing } = item
    const dispatch = useDispatch()
    const cartState = useSelector((state: RootState) => (state.cart))

    const handleIncrease = () => {
        dispatch(increaseAmount({ item, amount }))
    }

    const handleDecrease = () => {
        dispatch(decreaseAmount({ item, amount }))
    }

    const handleRemove = () => {
        dispatch(removeItem({ item, amount }))
    }

    return (
        <>
            <div className="max-w-2xl h-max bg-stone-900
            grid grid-cols-3 p-6 my-4 drop-shadow-lg rounded-sm">
                <div className="col-span-2">
                    <h3 className='text-white p-2 pl-0'>{name}</h3>
                    <p className='text-gray-600 pr-2'>
                        Description Lorem ipsum dolor sit.
                        Lorem ipsum dolor sit.Lorem ipsum dolor sit.
                    </p>
                    <button className='py-1 px-2 mt-6 border-2
                    border-white text-white text-center w-28'
                        onClick={handleRemove}>Remove</button>
                </div>
                <div className='flex flex-row ml-8'>
                    <div>
                        <img src={imgUrl} alt="ring-img" width="130" height="120" />
                    </div>
                    <div className="flex flex-col ml-2">
                        <button className='p-2 bg-gray-600
                        text-white text-center'
                            onClick={handleIncrease}>+</button>
                        <p className='p-2 text-white'>{amount}</p>
                        <button className='p-2 bg-gray-600
                        text-white text-center'
                            onClick={handleDecrease}
                            disabled={amount < 1 ? true : false}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
