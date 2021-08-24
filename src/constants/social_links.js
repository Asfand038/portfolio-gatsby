import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/asfandyar-jamali-5214b3207/",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/asfandyar038",
  },
  {
    id: 3,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://twitter.com/asfandyar038",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/jamaliasfandyar/",
  },
]

export default data
