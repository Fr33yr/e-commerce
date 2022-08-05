import React from 'react'

export function Product() {
  return (
    <>
      <article className='min-h-fit my-32'>
        <div className='flex flex-row bg-stone-900 
      drop-shadow-md w-fit my-0 mx-auto'>
          <img src="" alt="" width="330" height="360" />
          <div className="flex flex-col p-4 max-w-sm">
            <h3 className='text-white mb-4'>$69.99</h3>
            <p className='text-stone-400 mb-2'>Item name</p>
            <p className='text-stone-600 mb-16'>Description Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Voluptatibus, magni perspiciatis?
              Labore sequi alias consequatur
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
