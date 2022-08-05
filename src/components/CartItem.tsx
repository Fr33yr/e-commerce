import React from 'react'


export function CartItem() {


    return (
        <>
            <div className="max-w-2xl h-max bg-stone-900
            grid grid-cols-3 p-6 drop-shadow-lg rounded-sm">
                <div className="col-span-2">
                    <h3 className='text-white p-2 pl-0'>Title</h3>
                    <p className='text-gray-600 pr-2'>
                        Description Lorem ipsum dolor sit.
                        Lorem ipsum dolor sit.Lorem ipsum dolor sit.
                    </p>
                    <button className='py-1 px-2 mt-6 border-2
                    border-white text-white text-center w-28'>Remove</button>
                </div>
                <div className='flex flex-row ml-8'>
                    <div>
                        <img src="" alt="" width="130" height="120" />
                    </div>
                    <div className="flex flex-col ml-2">
                        <button className='p-2 bg-gray-600
                        text-white text-center'>+</button>
                        <p className='p-2 text-white'>1</p>
                        <button className='p-2 bg-gray-600
                        text-white text-center'>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}
