import React from "react"
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"

const data = [
  {
    id: 1,
    icon: <SiUpwork className="social-icon"></SiUpwork>,
    url: "https://www.upwork.com/freelancers/~01d59dd6708520575e?viewMode=1",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/asfandyar-jamali/",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/asfandyar038",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/jamaliasfandyar/",
  },
]

export default data
