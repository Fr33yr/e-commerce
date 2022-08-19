import React from 'react'
import { useNavigate } from 'react-router-dom'


export function Card({name, imgUrl, pricing, _id}:IData) {
  let navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/product/${_id}`)
  }

  return (
    <>
      <div className='flex flex-col h-fit drop-shadow-lg w-54 hover:drop-shadow'>
        <img src={imgUrl} alt="ring-img" height="153" width="224"
        className='max-w-full h-auto rounded-t cursor-pointer' 
        onClick={handleOnClick}/>
        <div className='flex flex-col bg-stone-900 rounded-b p-2
        h-28'>
          {
            pricing.offsale > 0? <h3 className='text-white'>
              <s className='mr-4'>${pricing.price}</s>${pricing.offsale} </h3>  
            : <h3 className='text-white'>${pricing.price}</h3>
          }
          <p className='text-stone-600 w-52 break-words py-1'>{name}</p>
        </div>
      </div>
    </>
  )
}
