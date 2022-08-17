import React, { useEffect, useState } from 'react'
import {useParams, useLocation} from 'react-router-dom'

const EmptyDataState: IData = {
  _id: "",
    name: "",
    imgUrl: "",
    description: {
        specs: [],
        text: ""
    },
    pricing: {
        price: 0,
        offsale: 0
    }
}

export function Product() {
  const [data, setData] = useState<IData>(EmptyDataState)
  const {imgUrl, pricing, description, name} = data
  let location = useLocation()
  const {_id} = useParams()

  useEffect(()=>{
    fetch(`https://floating-lowlands-72186.herokuapp.com/api/products/${_id}`)
    .then(res => res.json())
    .then(res => {
      return res && setData(res)
    })
  },[location])

  return (
    <>
      <article className='min-h-fit my-32'>
        <div className='flex flex-row bg-stone-900 
      drop-shadow-md w-fit my-0 mx-auto'>
          <img src={imgUrl} alt="ring-img" width="360" height="360" />
          <div className="flex flex-col p-4 max-w-sm">
            <h3 className='text-white mb-4'>{pricing.offsale? pricing.offsale : pricing.price}</h3>
            <p className='text-stone-400 mb-2'>{name}</p>
            <p className='text-stone-600 mb-16'>
              {description.text}
            </p>
            <div className="flex flex-row justify-center">
              <button className='py-1 px-2 w-24 border-2 border-white
              text-white bg-stone-900 mr-12'>
                Buy
              </button>
              <button className='py-1 px-2 w-24 border-2 border-white
              text-white bg-stone-900'>
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
