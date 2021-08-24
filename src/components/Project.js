import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  index,
  slug,
  title,
  image,
  description,
  stack,
  github,
  url,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(({ id, title }) => (
            <span key={id}>{title}</span>
          ))}
        </div>
        <a href={github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </article>
  )
}

export default Project
