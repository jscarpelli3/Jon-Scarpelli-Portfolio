import React from 'react'
import gitIcn from '../images/github-mark-white.png'
import express from '../images/express.png'
import react from '../images/react.png'
import js from '../images/js.png'
import css from '../images/css.png'
import vue from '../images/vuejs-icon.png'
import postg from '../images/PostgreSQL.png'
import html from '../images/html.png'
import mongo from '../images/mongo.png'
import python from '../images/python.png'

const Project = ({ title, image, cap, thumb, cap2, git, git2, git2Check, expressCk, reactCk, jsCk, cssCk, vueCk, postgCk, htmlCk, mongoCk, pythonCk }) => {
  return (
    <div className="project-card" >
      <h1 className="project-title">{title}</h1>
      <a target="blank" href={thumb}>
        <img className="project-thumb" alt="thumb" src={image} />
      </a>
      <div className="proj-details">
        <div>
          <p className="caption">{cap}</p>
          <p className="caption">{cap2}
          </p>
        </div>
        <div className="link-area">
          <div className="git-card">
            {git ? <a className="git-txt" href={git}>
              <img alt="icn" className="icon" src={gitIcn} /><br />FrontEnd
            </a> : undefined}
          </div>
          {git2Check ? <div className="git-card">
            <a className="git-txt" href={git2}>
              <img alt="icn" className="icon" src={gitIcn} /> <br />BackEnd
            </a>
          </div> : undefined}
        </div>
        <div className="tech-box">
          {reactCk ? <img alt="icn" className="t-icon" src={react} /> : undefined}
          {vueCk ? <img alt="icn" className="t-icon" src={vue} /> : undefined}
          {expressCk ? <img alt="icn" className="t-icon" src={express} /> : undefined}
          {mongoCk ? <img alt="icn" className="t-icon" src={mongo} /> : undefined}
          {postgCk ? <img alt="icn" className="t-icon" src={postg} /> : undefined}
          {pythonCk ? <img alt="icn" className="t-icon" src={python} /> : undefined}
          {htmlCk ? <img alt="icn" className="t-icon" src={html} /> : undefined}
          {cssCk ? <img alt="icn" className="t-icon" src={css} /> : undefined}
          {jsCk ? <img alt="icn" className="t-icon" src={js} /> : undefined}
        </div>
      </div>
    </div>
  )
}

export default Project