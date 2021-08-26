import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob {
      nodes {
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJob: { nodes: jobs },
  } = useStaticQuery(query)

  const [currentJobIndex, setCurrentJobIndex] = useState(0)

  const { company, position, date, description } = jobs[currentJobIndex]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ company }, index) => (
            <button
              key={index}
              className={
                index === currentJobIndex ? "job-btn active-btn" : "job-btn"
              }
              onClick={() => setCurrentJobIndex(index)}
            >
              {company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(({ id, name }) => (
            <div key={id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
