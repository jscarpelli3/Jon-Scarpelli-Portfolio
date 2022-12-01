import React from 'react'

const Project = ({ title, image, cap }) => {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <img className="project-thumb" src={image} />
      <p className="caption">{cap}</p>




    </div>
  )
}

export default Project