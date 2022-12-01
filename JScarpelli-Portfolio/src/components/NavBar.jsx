import React from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-div">
      <div className="nav-name">
        <h2>Jon Scarpelli</h2>
      </div>
      <div className="nav-links">
        <h3><Link to='/'>Home</Link>| <a href="https://docs.google.com/document/d/1pNdg2NvJ7TlWuhiRaffaeeBwiSA4Brqs9DjviPDSYHo/edit?usp=sharing" target="blank">Resume</a> | <Link to=''>Contact</Link></h3>
      </div>

    </div>

  )
}

export default NavBar