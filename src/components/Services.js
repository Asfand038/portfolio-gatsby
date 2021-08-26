import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"

import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center">
        {services.map(({ id, icon, title, details }) => (
          <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <ul>
              {details.map((text, index) => (
                <li key={index}>
                  <FaAngleDoubleRight />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
