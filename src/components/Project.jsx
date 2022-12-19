import React from 'react'
import gitIcn from '../images/github-mark-white.png'

const Project = ({ title, image, cap, thumb, cap2, git, git2, git2Check }) => {
  return (
    <div className="project-card" >
      <h1 className="project-title">{title}</h1>
      <a target="blank" href={thumb}>
        <img className="project-thumb" src={image} />
      </a>
      <div className="proj-details">
        <p className="caption">{cap}</p>
        <p className="caption">{cap2}</p>
        <div className="link-area">
          <div className="git-card">
            <a className="git-txt" href={git}>
              <img className="icon" src={gitIcn} /><br />FrontEnd
            </a>
          </div>
          {git2Check ? <div className="git-card">
            <a className="git-txt" href={git2}>
              <img className="icon" src={gitIcn} /> <br />BackEnd
            </a>
          </div> : undefined}
        </div>
      </div>
    </div>
  )
}

export default Project