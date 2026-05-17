import React from 'react'
import Header from './components/Header/header'
import Footer from './components/footer/footer'
import About from './components/about/about'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
     <Outlet/>
    {/* by oulet upar wala chwwz same rhega */}
    <Footer/>
    
    </>
  )
}

export default layout