import React from 'react'
import Header from '../header'
import Footer from '../footer'
import './index.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout