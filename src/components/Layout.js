import React, { useState } from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)
  const handleClose = () => setSidebarIsOpen(false)

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {sidebarIsOpen && (
        <Sidebar open={sidebarIsOpen} handleClose={handleClose} />
      )}
      {children}
      <Footer />
    </>
  )
}

export default Layout
