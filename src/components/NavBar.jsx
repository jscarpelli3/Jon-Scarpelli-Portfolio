import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-name name">
        <h1 className="title">Jon Scarpelli</h1>
      </div>
      <div className="nav-links">
        <Link to="/">
          <h3 className="nav-link">Home</h3><h3 className="nav-link">|</h3>
        </Link>
        <Link to="/about-me">
          <h3 className="nav-link">About Me</h3><h3 className="nav-link">|</h3>
        </Link>
        <h3 className="nav-link"> <a href="https://docs.google.com/document/d/1aQ81_zmerbjSuLIKYvzh8fgONmQjI4K6ngtQvaX414Q/export?format=pdf" target="blank">Resume <span className='italic'>(download)</span></a></h3>
      </div>

    </div>

  )
}

export default NavBar