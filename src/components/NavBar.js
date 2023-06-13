import React, { Component } from 'react'
// import PropTypes from 'prop-types'4
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ marginRight: '30px', marginLeft: '30px', fontWeight: '700' }} href="/">NewsRoom</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              <Link className="nav-link" style={{ color: "black" }} aria-current="page" to="/">Home</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Business">Business</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Entertainment">Entertainment</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Health">Health</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Science">Science</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Sports">Sports</Link>
              <Link className="nav-link" style={{ color: "black" }} to="/Technology">Technology</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default NavBar
