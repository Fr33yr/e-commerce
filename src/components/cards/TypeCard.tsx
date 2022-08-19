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
            <div className='flex flex-col w-fit h-fit drop-shadow-sm cursor-pointer
            text-stone-600 hover:text-white' onClick={handleOnClick}>
                <img src={imgUrl} alt="ring-img" height="153" width="207"
                    className='max-w-full h-auto rounded-t' />
                <div className='flex flex-col bg-stone-900 rounded-b p-3'>
                    <p className=''>{name}</p>
                </div>
            </div>
        </>
    )
}
