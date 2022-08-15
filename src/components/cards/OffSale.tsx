import React from 'react'


export function OffSale({imgUrl, pricing}: Data) {
  return (
    <>
        <div className='flex flex-col w-fit h-fit'>
            <div className="flex flex-row justify-between" style={{maxWidth: "304px"}}>
                <p className='text-stone-600'>Off sale</p>
                <p className='text-white'><s>${pricing.price}</s> ${pricing.offsale} </p>
            </div>
            <img src={imgUrl} alt="ring-img" height='210' width='210'
            className='rounded cursor-pointer' />
        </div>
    </>
  )
}
