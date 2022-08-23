import React from 'react'
import { useNavigate } from 'react-router-dom'



export function OffSale({imgUrl, pricing, _id, name, description}: IData) {
  const props = {imgUrl, pricing, _id, name, description}
  let navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/product/${_id}`)
  }

  return (
    <>
        <div className='flex flex-col w-fit h-fit'>
            <div className="flex flex-row justify-between" style={{maxWidth: "304px"}}>
                <p className='text-stone-600'>Off sale</p>
                <p className='text-white'><s className='pr-4'>${pricing.price}</s>  ${pricing.offsale} </p>
            </div>
            <img src={imgUrl} alt="ring-img" height='210' width='210'
            className='rounded cursor-pointer' onClick={handleOnClick}/>
        </div>
    </>
  )
}
