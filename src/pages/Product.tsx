import React from 'react'

export function Product() {
  return (
    <>
      <article className='min-h-fit my-32'>
        <div className='flex flex-row bg-stone-900 
      drop-shadow-md w-fit my-0 mx-auto'>
          <img src="" alt="" width="330" height="360" />
          <div className="flex flex-col p-4 max-w-sm">
            <h3 className='text-white'>$69.99</h3>
            <p>Item name</p>
            <p>Description Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Voluptatibus, magni perspiciatis?
              Labore sequi alias consequatur</p>
          </div>
        </div>
      </article>
    </>
  )
}
