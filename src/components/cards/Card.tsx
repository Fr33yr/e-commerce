import React from 'react'

export function Card() {
  return (
    <>
      <div className='flex flex-col w-fit h-fit'>
        <img src="" alt="" height="153" width="207"
        className='max-w-full h-auto rounded-t'/>
        <div className='flex flex-col bg-stone-900 rounded-b'>
          <h3 className='text-white'>$69.99</h3>
          <h3 className='text-stone-600'>itemName</h3>
          <p className='text-stone-600'>item desciption</p>
        </div>
      </div>
    </>
  )
}
