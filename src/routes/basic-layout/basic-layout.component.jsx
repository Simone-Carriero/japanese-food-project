import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/footer.component'
import Header from './header/header.component'

const BasicLayout = () => {
  return (
      <>
          <Header />
            <Outlet />
          <Footer />
      </>
  )
}

export default BasicLayout