import React from 'react'
import { useState } from 'react'
import Project from './Project'
import ProfPic2 from '../images/prof_pic2.jpg'
import tmtScreen from '../images/TMT_scrn_b.png'
import RRmain from '../images/RR_main2.png'
import Hiredmain from '../images/Hired_main2.png'
import RDTmain from '../images/RDT_main2.png'
import LkIn from '../images/LIInBug.png'
import email from '../images/email.png'
import git from '../images/github-mark-white.png'

const Main = () => {
  return (
    <div className="main-div">
      <section>
        <div className="icons">
          <a href="https://www.linkedin.com/in/jon-scarpelli/" target="blank"><img src={LkIn} className="icon lnk-ico" /></a>
          <a href="mailto:scarpelli.jon@gmail.com" target="blank"><img src={email} className="icon main-ico" /></a>
          <a href="https://github.com/jscarpelli3" target="blank"><img src={git} className="icon git-ico" /></a>

        </div>
        <div className="greeting">
          <img src={ProfPic2} className="prof-pic" />
          <div className='greeting-info'>
            <h3 className='hello'>hello, i'm</h3>
            <h1 className='name'>Jon Scarpelli</h1>
            <h4 className='titles'>Software Developer | Musician | Game Designer </h4>
            <p className='about'>I am a Software engineer with a passion for creative problem solving and intuitive design. Prior to transitioning to the tech space, I spent my career as a professional musician, music teacher and recording engineer, cultivating my skill set in administering high level client service, detail-oriented deliverables & clear communication strategies.</p>
          </div>
        </div>
      </section >
      <p className="p-title">Projects</p>
      <div className="project-grid">
        <div className="project">
          <Project expressCk={true} reactCk={true} jsCk={true} cssCk={true} vueCk={false} postgCk={false} htmlCk={true} mongoCk={true} title={'ResRecs'} image={RRmain} cap={"A restaurant recommendation app for small groups"} cap2={"ReactJS, MongoDB, JavaScript, HTML, CSS"} thumb={"https://resrecs.herokuapp.com"} git={"https://github.com/jscarpelli3/ResRecs"} git2Check={false} />
        </div>
        <div className="project">
          <Project expressCk={true} reactCk={false} jsCk={true} cssCk={true} vueCk={true} postgCk={true} htmlCk={true} mongoCk={false} title={'RockDog Trivia!'} image={RDTmain} cap={"A mobile-styled competitive music trivia app"} thumb={"https://rockdog-trivia.herokuapp.com"} cap2={"VueJS, PostgreSQL, JavaScript, HTML, CSS"} git={"https://github.com/jscarpelli3/rockdog-trivia"} gitB={"https://github.com/jscarpelli3/rockdog-trivia-backend"} git2Check={true} />
        </div>
        <div className="project">
          <Project expressCk={false} reactCk={false} jsCk={true} cssCk={true} vueCk={false} postgCk={false} htmlCk={true} mongoCk={false} title={'The Maze Tower'} image={tmtScreen} cap={"A maze adventure game in the style of 80's MS-DOS Freeware"} thumb={"https://the-maze-tower.surge.sh/"} cap2={"JavaScript, HTML, CSS"} git={"https://github.com/jscarpelli3/Jon-Scarpelli_The-Maze-Tower"} git2Check={false} />
        </div>
        <div className="project">
          <Project expressCk={true} reactCk={true} jsCk={true} cssCk={true} vueCk={false} postgCk={true} htmlCk={true} mongoCk={false} title={'The Maze Tower'} image={tmtScreen} title={'Hired'} image={Hiredmain} cap={"A hiring app for bandleaders looking for musicians"} thumb={"https://hiredgig.herokuapp.com"} cap2={"ReactJS, PostgreSQL, JavaScript, HTML, CSS"} git={"https://github.com/jscarpelli3/Hired"} gitB={"https://github.com/jscarpelli3/ResRecs"} git2Check={true} />
        </div>
      </div>
    </div >
  )
}

export default Main