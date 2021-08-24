import React from "react"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"

import links from "../constants/links"
import socialLinks from "../constants/social_links"

const Sidebar = ({ open, handleClose }) => {
  return (
    <aside className={open ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={handleClose}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={open ? "sidebar-links" : null}>
          {links.map(({ id, url, text }) => (
            <li key={id}>
              <Link to={url} onClick={handleClose}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={open ? "social-links sidebar-icons" : null}>
          {socialLinks.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url} className="social-link">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
