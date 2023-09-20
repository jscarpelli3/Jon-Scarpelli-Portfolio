import React from 'react'
import { useInView } from 'react-intersection-observer'
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
import gatsby from '../images/gatsby.png'

const Project = ({
  title,
  thumb,
  cap,
  thumbAlt,
  cap2,
  git,
  git2,
  git2Check,
  expressCk,
  reactCk,
  jsCk,
  cssCk,
  vueCk,
  postgCk,
  htmlCk,
  mongoCk,
  pythonCk,
  gatsbyCk
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px'
  })

  return (
    <div
      className={`project-card ${inView ? 'slide-in' : 'fade-out'}`}
      ref={ref}
    >
      <h1 className="project-title">{title}</h1>
      <a target="blank" href={thumbAlt}>
        <img className="project-thumbAlt square" alt="thumbAlt" src={thumb} />
      </a>
      <div className="proj-details">
        <div className="captions">
          <p className="caption">{cap}</p>
          <p className="caption">{cap2}</p>
        </div>
        <div className="link-area">
          <div className="git-card">
            {git ? (
              <a className="git-txt" href={git}>
                <img alt="icn" className="icon" src={gitIcn} />
                <br />
                FrontEnd
              </a>
            ) : undefined}
          </div>
          {git2Check ? (
            <div className="git-card">
              <a className="git-txt" href={git2}>
                <img alt="icn" className="icon" src={gitIcn} /> <br />
                BackEnd
              </a>
            </div>
          ) : undefined}
        </div>
        <div className="tech-box">
          {reactCk ? (
            <img alt="ReactJS" className="t-icon" src={react} />
          ) : undefined}
          {vueCk ? <img alt="VueJS" className="t-icon" src={vue} /> : undefined}
          {expressCk ? (
            <img alt="ExpressJS" className="t-icon" src={express} />
          ) : undefined}
          {mongoCk ? (
            <img alt="Mongo" className="t-icon" src={mongo} />
          ) : undefined}
          {postgCk ? (
            <img alt="Postrges" className="t-icon" src={postg} />
          ) : undefined}
          {pythonCk ? (
            <img alt="Python" className="t-icon" src={python} />
          ) : undefined}
          {gatsbyCk ? (
            <img alt="Gatsby" className="t-icon" src={gatsby} />
          ) : undefined}
          {htmlCk ? <img alt="HTML5" className="t-icon" src={html} /> : undefined}
          {cssCk ? <img alt="CSS" className="t-icon" src={css} /> : undefined}
          {jsCk ? <img alt="Javascript" className="t-icon" src={js} /> : undefined}
        </div>
      </div>
    </div>
  )
}

export default Project
