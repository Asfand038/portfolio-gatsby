import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="featured projects" projects={projects} showLink />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(
      filter: { featured: { eq: true } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        url
        title
        slug
        stack {
          id
          title
        }
        description
        github
        featured
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
