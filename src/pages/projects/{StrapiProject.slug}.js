import { graphql } from "gatsby"
import React from "react"

import Seo from "../../components/Seo"

const ProjectTemplate = ({
  data: {
    strapiProject: { title, description, image },
  },
}) => {
  return (
    <>
      <Seo
        title={title.toUpperCase()}
        description={description}
        image={image.localFile.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query FetchProject($slug: String) {
    strapiProject(slug: { eq: $slug }) {
      title
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
