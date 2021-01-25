import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (

      <div>
        <nav id="navbar" className="bg-dark navbar-dark  navbar navbar-expand-sm fixed-top">
          <button className="navbar-toggler pull-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#welcome-section">About</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="#software">Software</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#crochet">Crochet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#photography">Photography</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}