import React, { useEffect } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { ringType } from '../utils/utils'
import { TypeCard } from '../components/cards/TypeCard'
import { OffSale } from '../components/cards/OffSale'


export function Home() {

  return (
    <>
      <div className='max-w-full my-0 mx-4 pb-8 flex flex-wrap gap-8 justify-center
      drop-shadow-lg lg:mx-72'>
        {
          ringType.map((item, index)=>(
            <TypeCard {...item} key={index}/>
          ))
        }
      </div>
      <div className='drop-shadow-lg'>
        <span className='block w-1/2 border-t-2 my-12 mx-auto '></span>
      </div>
      <div className='max-w-2xl my-0 mx-auto pt-8'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
