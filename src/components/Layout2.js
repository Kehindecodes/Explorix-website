import Header2 from "./Header2"
import React from 'react'
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"

function Layout({children}) {
    return (
        <>
        <GlobalStyle/>
            <Header2/>
    <main>{children}</main>
    <Footer/>
        </>
    )
}

export default Layout
