import React from 'react'
import Project from './Project'
import ProfPic2 from '../images/prof_pic2.jpg'
import tmtScreen from '../images/TMT_scrn_b.png'
import RRmain from '../images/RR_main2.png'
import Hiredmain from '../images/Hired_main2.png'
import RDTmain from '../images/RDT_main2.png'
import LkIn from '../images/LIInBug.png'
import email from '../images/email.png'
import git from '../images/github-mark-white.png'
import express from '../images/express.png'
import react from '../images/react.png'
import js from '../images/js.png'
import css from '../images/css.png'
// import vue from '../images/vuejs-icon.png'

const Main = () => {
  return (
    <div className="main-div">
      <section>
        <div className="icons">
          <a href="https://www.linkedin.com/in/jon-scarpelli/" target="blank"><img src={LkIn} className="icon" /></a>
          <a href="mailto:scarpelli.jon@gmail.com" target="blank"><img src={email} className="icon" /></a>
          <a href="https://github.com/jscarpelli3" target="blank"><img src={git} className="icon" /></a>

        </div>
        <div className="greeting">
          <img src={ProfPic2} className="prof-pic" />
          <div className='greeting-info'>
            <h3 className='hello'>hello, i'm</h3>
            <h1 className='name'>Jon Scarpelli</h1>
            <h4 className='titles'>Software Developer | Musician | Game Designer </h4>
            <p className='about'>I am a Software engineer with a passion for creative problem solving and accessible design. Prior to transitioning to the tech world, I spent my career as a professional musician, music teacher and recording engineer where I developed the ability to bring together high level client service, clear communication skills & detail-oriented performance.</p>
          </div>
        </div>
      </section >
      <div className="project-grid">
        <div className="project">
          {/* <a target="blank" href="https://resrecs.herokuapp.com"> */}
          <Project title={'ResRecs'} image={RRmain} cap={"A restaurant reccomendation app for small groups"} thumb={"https://resrecs.herokuapp.com"} />
          {/* </a> */}
        </div>
        <div className="project">
          {/* <a target="blank" href="https://rockdog-trivia.herokuapp.com"> */}
          <Project title={'RockDog Trivia!'} image={RDTmain} cap={"A competative music trivia app"} thumb={"https://rockdog-trivia.herokuapp.com"} />
          {/* </a> */}
        </div>
        <div>
          {/* <a target="blank" href="https://the-maze-tower.surge.sh/"> */}
          <Project title={'The Maze Tower'} image={tmtScreen} cap={"A maze adventure game in the style of 80's MS-DOS Freeware"} thumb={"https://the-maze-tower.surge.sh/"} />
          {/* </a> */}
        </div>
        <div className="project">
          {/* <a target="blank" href="https://hiredgig.herokuapp.com"> */}
          <Project title={'Hired'} image={Hiredmain} cap={"A hiring app for bandleaders looking for musicians"} thumb={"https://hiredgig.herokuapp.com"} />
          {/* </a> */}
        </div>
      </div>


    </div >
  )
}

export default Main