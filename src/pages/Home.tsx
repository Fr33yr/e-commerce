import React from 'react'

import {Card} from '../components/cards/Card'
import {OffSale} from '../components/cards/OffSale'
import {Filters} from '../components/Filters'

export function Home() {
  return (
    <>
        <div className='flex justify-center'>
            <Filters/>
        </div>
        <div className='flex justify-center'>
            <Card/>
        </div>
        <div className='flex justify-center'>
            <OffSale/>
        </div>
    </>
  )
}
