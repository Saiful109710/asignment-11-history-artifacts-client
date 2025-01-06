import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen container mx-auto'>
        <Navbar></Navbar>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout
