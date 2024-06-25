import React from 'react'
import Header from './Component/header/header'
import { Outlet } from 'react-router-dom'
import Footer from './Component/footer/footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout