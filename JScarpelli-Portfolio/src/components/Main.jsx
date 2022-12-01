import React from 'react'
import Project from './Project'
import tmtScreen from '../images/TMT_scrn_b.png'

const Main = () => {
  return (
    <div className="main-div">
      <h5>hello, i'm</h5>
      <h2>Jon Scarpelli</h2>
      <h6>Software Developer | Musician | Game Designer </h6>
      <div className="project-grid">
        <Project title={'The Maze Tower'} image={tmtScreen} cap={"A maze adventure game in the style of 80's MS-DOS Freeware"} />
      </div>


    </div>
  )
}

export default Main