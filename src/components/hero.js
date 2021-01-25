import React, { Component } from 'react'
import amanda from '../resources/amanda.jpg'

export default class Hero extends Component {
  render() {
    return (

        <div className="parallax">
            <div class="hero-text">
                <section id="welcome-section" class="d-flex flex-row justify-content-start align-items-center flex-wrap">
                    <img src={amanda} class="head-shot rounded-circle"></img>
                    <div class="header d-flex flex-column">
                    <h1>Amanda de Castilho</h1>
                    <p>Software Engineering Student</p>
                    </div>
                </section>
            </div>
        </div>
    );
  }
}