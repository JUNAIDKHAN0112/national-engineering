/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
