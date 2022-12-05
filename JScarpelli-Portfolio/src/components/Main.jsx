import React from 'react'
import Project from './Project'
import tmtScreen from '../images/TMT_scrn_b.png'
import RRmain from '../images/RR_main.png'
import Hiredmain from '../images/Hired_main.png'
import ProfPic from '../images/prof_pic1.png'
import ProfPic2 from '../images/prof_pic2.jpg'
import ProfPic3 from '../images/prof_pic3.jpg'

const Main = () => {
  return (
    <div className="main-div">
      <section>
        <div className="greeting">
          <img src={ProfPic2} className="prof-pic" />
          <div className='greeting-info'>
            <h3 className='hello'>hello, i'm</h3>
            <h2 className='name'>Jon Scarpelli</h2>
            <h5 className='titles'>Software Developer | Musician | Game Designer </h5>
            <p className='about'>I am a Software engineer with a passion for creative problem solving and accessible design. Prior to transitioning to the tech world, I spent my career as a professional musician, music teacher and recording engineer where I developed the ability to bring together high level client service, clear communication skills & detail-oriented performance.</p>
          </div>
        </div>
      </section>
      <div className="project-grid">
        <div>
          <Project title={'The Maze Tower'} image={tmtScreen} cap={"A maze adventure game in the style of 80's MS-DOS Freeware"} />
        </div>
        <div className="project">
          <Project title={'ResRecs'} image={RRmain} cap={"A restaurant reccomendation app for small groups"} />
        </div>
        <div className="project">
          <Project title={'Hired'} image={Hiredmain} cap={"A hiring app for bandleaders looking for musicians"} />
        </div>
      </div>


    </div>
  )
}

export default Main