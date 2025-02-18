import React from 'react'
import { useInView } from 'react-intersection-observer'
import Project from './Project'
import jsAltPic from '../images/Scarpelli-Jon-007.png'
import pond5 from '../images/lisc_port_pond5.png'
import HMS from '../images/HMS.png'
import seabound from '../images/seabound.png'
import tnbd from '../images/theneighborhood.png'
import LSspotify from '../images/LSspotify.png'
import LSsite from '../images/ls_site.png'
import Stitely from '../images/Stitely.png'

const AboutMe = () => {
  const { ref, inView } =  useInView ({
    threshold: 0,
    rootMargin: '-100px 0px',
  })

  return (
    <div className='main-div'>
      <div className="about-me">
        {/* <img alt="alt-prof-pic" className="alt-js" src={jsAltPic}></img> */}
        <div className="blurb">

          <h2 className="about-header">...a bit more about me</h2>
          <section ref={ref} className={`greeting-info ${inView ? 'fade-in' : 'fade-out'}`}>

            <p className="blurb-text"> Though I have come a little late in life to sofware development, the tech space has been ever present in my mind and heart.  I am a life long computer-kid spending my early years with my older brother working through various Commodore64 programs and immersed in old video games.  Over the years, as I followed my love and talent for music, tehcnology was a constant.  In college I started an electronic music ensemble, engaged in digital media courses and pursued electronic music recording and composition.  After graduating, I set out to learn audio engineering in the Chicago advertising industry becoming an assistant at one of the top commercial music houses in Chicago.  </p>
            <p className="blurb-text">Along the way, I developed and led several original music projects, websites to help promote those endeavors, a music liscensing portfolio and most recently I also began delving into video game development.</p>
            <p className="blurb-text">  The links below can take you to the variety of personal and professional projects I have worked on over the years.  ALL of these projects, in one way or another, have prepared me for a future in tech.  They have helped me grow my understanding of topics such as communication, leadership, & marketing and have pushed me to create public facing work with high attention to detail & a clear sense of purpose. </p>
          </section>

        </div>
      </div>
      <h3 className="p-title">Personal Work</h3>
      <h5 className="personal-subtitle">non-software development or software development adjacent work</h5>
      <section className='project-grid'>
        <div className="project">
          <Project title={'The Nighborhood (COMING SOON!'} thumb={tnbd} cap={"A suspense 'Point-And-Click-Like' Adventure game about a kid who saves his neighborhood and his best friend from an ancient evil"} cap2={"Built in Construct3, Chapter One is due out FALL '24!!! "} thumbAlt={""} git2Check={false} />
        </div>
        <div className="project">
          <Project title={'Music Liscensing Portfolio'} thumb={pond5} cap={"Collection of original music compositions available for liscensing through POND5.com"} cap2={""} thumbAlt={"https://www.pond5.com/artist/jscarpelli?tab=music"} git2Check={false} />
        </div>
        <div className="project">
          <Project title={'Seabound (DEMO)'} thumb={seabound} cap={"Demo of 2-D pixel-art video game developed using 'Construct3' game making software, 'Asperite' & javaScript.  Work-in-progress being developed by myself and a partner."} cap2={""} thumbAlt={"https://pixelisfaded.itch.io/seabound"} git2Check={false} />
        </div>
        <div className="project">
          <Project title={'Low Swans on Spotify'} thumb={LSspotify} cap={"Original music from my band, 'Low Swans'.  All songs written, programmed & recorded by me except where noted."} cap2={""} thumbAlt={"https://open.spotify.com/artist/0eofl8XS5S9CBbMmAuDsxw"} git2Check={false} />
        </div>
        <div className="project">
          <Project title={'Stitely Orchesta'} thumb={Stitely} cap={"I play guitar & sing for this Chicago-based events band.  The band is comprised of some of the best soul & jazz musicians in Chicago."} cap2={""} thumbAlt={"https://www.stitely.com/the-stitely-orchestra-meet-the-band"} git2Check={false} />
        </div>
        <div className="project">
          <Project title={'Hinsdale Music Studio'} thumb={HMS} cap={"Website for Hinsdale Music Studio where I teach private music lessons & administer the website."} cap2={""} thumbAlt={"https://www.hinsdalemusicstudio.com/about"} git2Check={false} />
        </div>
      </section>
    </div>
  )
}

export default AboutMe