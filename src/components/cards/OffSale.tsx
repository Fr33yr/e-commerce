import React from 'react'

export function OffSale() {
  return (
    <>
        <div className='flex flex-col mt-20 w-fit h-fit'>
            <div className="flex flex-row justify-between" style={{maxWidth: "304px"}}>
                <p className='text-stone-600'>Off sale</p>
                <p className='text-white'>$24.99</p>
            </div>
            <img src="" alt="" height='168' width='304'
            className='rounded'/>
        </div>
    </>
  )
}
