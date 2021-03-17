
import Header from "./Header"
import React from 'react'
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"

function Layout({children}) {
    return (
        <>
        <GlobalStyle/>
            <Header/>
    <main>{children}</main>
    <Footer/>
        </>
    )
}

export default Layout
