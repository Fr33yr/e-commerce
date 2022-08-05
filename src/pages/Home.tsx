import React from 'react'
import {Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'

import { Card } from '../components/cards/Card'
import { OffSale } from '../components/cards/OffSale'
import { Filters } from '../components/Filters'

export function Home() {
  return (
    <>
      <div className='max-w-5xl my-0 mx-auto pt-24 pb-8'>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
        >
          <SwiperSlide className='w-fit'><Card/></SwiperSlide>
          <SwiperSlide className='w-fit'><Card/></SwiperSlide>
          <SwiperSlide className='w-fit'><Card/></SwiperSlide>
          <SwiperSlide className='w-fit'><Card/></SwiperSlide>
          <SwiperSlide className='w-fit'><Card/></SwiperSlide>
        </Swiper>
      </div>
      <div>
        <span className='block w-1/2 border-t-2 my-12 mx-auto'></span>
      </div>
      <div className='max-w-2xl my-0 mx-auto pt-8'>
        <Swiper
         modules={[Autoplay]}
         spaceBetween={0}
         slidesPerView={2}
         autoplay={{delay: 5000}}
        >
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
          <SwiperSlide className='w-fit'><OffSale /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
