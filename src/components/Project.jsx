import React from 'react'

const Project = ({ title, image, cap, thumb }) => {
  return (
    <div className="project-card" >
      <h1 className="project-title">{title}</h1>
      <a target="blank" href={thumb}>
        <img className="project-thumb" src={image} />
      </a>
      <p className="caption">{cap}</p>
    </div>
  )
}

export default Project