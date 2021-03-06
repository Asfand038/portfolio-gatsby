import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline" />
            <h1>i'm asfandyar</h1>
            <h4>fullStack web developer, react | node</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(({ id, icon, url }) => (
                <a
                  key={id}
                  href={url}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
