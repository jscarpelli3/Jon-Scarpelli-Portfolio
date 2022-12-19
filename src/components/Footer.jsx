import React from 'react'
import LkIn from '../images/LIInBug.png'
import email from '../images/email.png'
import git from '../images/github-mark-white.png'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2 className="ft-name name">Jon Scarpelli</h2>
      </div>
      <div className="ft-icons">
        <a href="https://www.linkedin.com/in/jon-scarpelli/" target="blank"><img src={LkIn} className="ft-icon lnk-ico" /></a>
        <a href="mailto:scarpelli.jon@gmail.com" target="blank"><img src={email} className="ft-icon main-ico" /></a>
        <a href="https://github.com/jscarpelli3" target="blank"><img src={git} className="ft-icon git-ico" /></a>
      </div>
      <p className="credits">
        Background Photo by <a href="https://unsplash.com/@baumnico?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nico Baum</a> on <a href="https://unsplash.com/s/photos/geometry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a><br />
        Email Icon
        <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Uniconlabs - Flaticon</a>
      </p>
    </div>
  )
}

export default Footer