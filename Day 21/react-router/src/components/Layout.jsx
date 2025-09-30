import React from 'react'
import "../App.css"
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import Home from './Home'
function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout           