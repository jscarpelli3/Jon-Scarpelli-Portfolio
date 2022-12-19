import React from 'react'

const Project = ({ title, image, cap, thumb, cap2 }) => {
  return (
    <div className="project-card" >
      <h1 className="project-title">{title}</h1>
      <a target="blank" href={thumb}>
        <img className="project-thumb" src={image} />
      </a>
      <p className="caption">{cap}</p>
      <p className="caption">{cap2}</p>
    </div>
  )
}

export default Project