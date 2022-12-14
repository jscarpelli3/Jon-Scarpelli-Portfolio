import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'
import tmtScreen from '../images/TMT_scrn_b.png'
import zmbScreen from '../images/zombie.png'
import RRmain from '../images/RR_main2.png'
import Hiredmain from '../images/Hired_main2.png'
import RDTmain from '../images/RDT_main2.png'
import LkIn from '../images/LIInBug.png'
import email from '../images/email.png'
import git from '../images/github-mark-white.png'
import jsAltPic from '../images/Scarpelli-Jon-007.png'

const Main = () => {
  return (
    <div className="main-div">
      <section>
        <div className="icons">
          <a href="https://www.linkedin.com/in/jon-scarpelli/" target="blank"><img alt="linkd-tag" src={LkIn} className="icon lnk-ico" /></a>
          <a href="mailto:scarpelli.jon@gmail.com" target="blank"><img alt="mail-tag" src={email} className="icon main-ico" /></a>
          <a href="https://github.com/jscarpelli3" target="blank"><img alt="git-tag" src={git} className="icon git-ico" /></a>

        </div>
        <div className="greeting">
          <div>
            <img alt="prof-pic" className="prof-pic" src={jsAltPic}></img>
            <div className="more-about">
              <a href="https://docs.google.com/document/d/1aQ81_zmerbjSuLIKYvzh8fgONmQjI4K6ngtQvaX414Q/export?format=pdf" target="blank">
                <h3>DOWNLOAD MY RESUME</h3>
              </a>
            </div>
          </div>
          <div className='greeting-info'>
            <h1 className='hello'>hello, i'm</h1>
            <h2 className='name'>Jon Scarpelli</h2>
            <h3 className='titles'>Software Developer | Musician | Game Designer </h3>
            <p className='about'>I am a Software engineer with a passion for creative problem solving and intuitive design. Prior to transitioning to the tech space, I spent my career as a professional musician, music teacher and recording engineer, cultivating my skill set in administering high level client service, detail-oriented deliverables & clear communication strategies.</p>
            <Link to="/about-me">
              <h4 className="more">...click for more about me</h4>
            </Link>
          </div>
          {/* <div className="more-about">
            <a href="https://docs.google.com/document/d/1aQ81_zmerbjSuLIKYvzh8fgONmQjI4K6ngtQvaX414Q/export?format=pdf" target="blank">
              <h3>DOWNLOAD MY RESUME</h3>
            </a>
          </div> */}
        </div>
      </section >
      <h2 className="p-title">Projects</h2>
      <div className="project-grid">
        <div className="project">
          <Project expressCk={true} reactCk={true} jsCk={true} cssCk={true} vueCk={false} postgCk={false} htmlCk={true} mongoCk={true} title={'ResRecs'} image={RRmain} cap={"A restaurant recommendation app for small groups"} cap2={"note: server code lives in the same Git repo as the client"} thumb={"https://resrecs.herokuapp.com"} git={"https://github.com/jscarpelli3/ResRecs"} git2Check={false} />
        </div>
        <div className="project">
          <Project expressCk={true} reactCk={false} jsCk={true} cssCk={true} vueCk={true} postgCk={true} htmlCk={true} mongoCk={false} title={'RockDog Trivia!'} image={RDTmain} cap={"A mobile-styled competitive music trivia app"} thumb={"https://rockdog-trivia.herokuapp.com"} cap2={"Meant for mobile devices & features hand-rolled auth and a 3rd party API"} git={"https://github.com/jscarpelli3/rockdog-trivia"} gitB={"https://github.com/jscarpelli3/rockdog-trivia-backend"} git2Check={true} />
        </div>
        <div className="project">
          <Project expressCk={false} reactCk={false} jsCk={true} cssCk={true} vueCk={false} postgCk={false} htmlCk={true} mongoCk={false} title={'The Maze Tower'} image={tmtScreen} cap={"A maze adventure game in the style of 80's MS-DOS Freeware"} thumb={"https://the-maze-tower.surge.sh/"} cap2={"This is an original game design featuring modular level building at runtime"} git={"https://github.com/jscarpelli3/Jon-Scarpelli_The-Maze-Tower"} git2Check={false} />
        </div>
        <div className="project">
          <Project expressCk={true} reactCk={true} jsCk={true} cssCk={true} vueCk={false} postgCk={true} htmlCk={true} mongoCk={false} title={'Hired'} image={Hiredmain} cap={"A hiring app for bandleaders looking for musicians"} thumb={"https://hiredgig.herokuapp.com"} cap2={"Includes hand-rolled auth"} git={"https://github.com/jscarpelli3/Hired"} gitB={"https://github.com/jscarpelli3/ResRecs"} git2Check={true} />
        </div>
        <div className="project">
          <Project expressCk={false} reactCk={false} jsCk={false} cssCk={false} vueCk={false} postgCk={false} htmlCk={false} mongoCk={false} pythonCk={true} title={'Python Adventure'} image={zmbScreen} cap={"A 'Choose Your Own Adventure' written in Python"} thumb={"https://replit.com/@jscarpelli3/zombie-text-adventure"} cap2={"Text-only & features 8 different endings."} git={"https://github.com/jscarpelli3/zombie-text-adventure"} git2Check={false} />
        </div>
      </div>
    </div >
  )
}

export default Main