import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

type Props = {
  children?: React.ReactNode
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Outlet />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout
