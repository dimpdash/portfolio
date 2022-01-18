import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <>
    <div 
      className="card"
      >
      <div className="content">
        <a
          href={projectLink ? projectLink : "#"}
          style={{textDecoration: 'none'}}
        >
          <h1 className="header" >{heading}</h1>
        </a>
        <p className="text">{paragraph}</p>

      </div>

    </div>

    </>
  )
}

export default Card
