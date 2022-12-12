import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const BaseLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
