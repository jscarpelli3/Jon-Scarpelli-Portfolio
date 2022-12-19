import React from 'react'
import { Link, useNavigate, Routes, Route } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-div">
      <div className="nav-name name">
        <h2>Jon Scarpelli</h2>
      </div>
      <div className="nav-links">
        <h3> <a href="https://docs.google.com/document/d/1aQ81_zmerbjSuLIKYvzh8fgONmQjI4K6ngtQvaX414Q/export?format=pdf" target="blank">Resume</a></h3>
      </div>

    </div>

  )
}

export default NavBar