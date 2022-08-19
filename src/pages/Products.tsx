import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import { Card } from '../components/cards/Card'

export function Products() {
    const searchState = useSelector((state: RootState) => state.search)

    return (
        <>
            <div className="flex flex-wrap p-12 justify-center gap-16">
                {
                    searchState && searchState.map((element, index) => (
                        <Card {...element} />
                    ))
                }
            </div>
        </>
    )
}
