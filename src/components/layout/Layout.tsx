import React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export declare interface AppProps {
    children?: React.ReactNode
}

export function Layout({children}: AppProps) {

    return (
        <>
            <Header></Header>
                {children}
            <Footer></Footer>
        </>
    )
}
