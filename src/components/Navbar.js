import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"

import logo from "../assets/images/logo.svg"
import pageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="web dev" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(({ id, text, url }) => (
            <Link to={url} key={id}>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
