import React from "react"

import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(({ id, url, icon }) => (
            <a key={id} href={url} className="social-link">
              {icon}
            </a>
          ))}
        </div>
        <h4>
          &copy; {new Date().getFullYear()} Asfandyar Jamali. All rights
          reserved. Built with{" "}
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
