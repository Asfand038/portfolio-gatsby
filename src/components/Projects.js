import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Project from "./Project"

const Projects = ({ title, projects, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project {...project} index={index} key={project.id} />
        ))}
      </div>
      {showLink && (
        <Link className="btn center-btn" to="/projects">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
