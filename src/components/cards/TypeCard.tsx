import React from 'react'

type CardItempProps = {
    name: string,
    imgUrl: string
}

export function TypeCard({name, imgUrl}:CardItempProps) {

    return (
        <>
            <div className='flex flex-col w-fit h-fit drop-shadow-sm cursor-pointer
            text-stone-600 hover:text-white'>
                <img src={imgUrl} alt="ring-img" height="153" width="207"
                    className='max-w-full h-auto rounded-t' />
                <div className='flex flex-col bg-stone-900 rounded-b p-3'>
                    <p className=''>{name}</p>
                </div>
            </div>
        </>
    )
}
