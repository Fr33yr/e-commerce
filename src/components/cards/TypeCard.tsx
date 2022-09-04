import React from 'react'
import { useNavigate } from 'react-router-dom'


type CardItempProps = {
    name: string,
    imgUrl: string
}

export function TypeCard({ name, imgUrl }: CardItempProps) {
    let navigate = useNavigate()

    const handleOnClick = () => {
        navigate(`/products/${name}`)
    }

    return (
        <>
            <div className='flex flex-col w-32 h-fit drop-shadow-sm cursor-pointer
            text-stone-600 hover:text-white md:w-fit' onClick={handleOnClick}>
                <img src={imgUrl} alt="ring-img" height="153" width="207"
                    className='rounded-t' />
                <div className=' bg-stone-900 rounded-b p-3'>
                    <p className=''>{name}</p>
                </div>
            </div>
        </>
    )
}
