import React from 'react'
import Header from './components/Header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
     <Outlet/>//uper ke chize same reghenge

    <Footer/>
    
    </>
  )
}

export default layout