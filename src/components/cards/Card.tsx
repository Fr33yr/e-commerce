import React from 'react'

type CardProps = {
  name: string,
  imgUrl: string,
  price: Number
}

export function Card({name, imgUrl, price}:CardProps) {

  return (
    <>
      <div className='flex flex-col w-fit h-fit drop-shadow-sm'>
        <img src="" alt={imgUrl} height="153" width="207"
        className='max-w-full h-auto rounded-t'/>
        <div className='flex flex-col bg-stone-900 rounded-b p-2'>
          <h3 className='text-white'>{`$${price}`}</h3>
          <p className='text-stone-600'>{name}</p>
        </div>
      </div>
    </>
  )
}
