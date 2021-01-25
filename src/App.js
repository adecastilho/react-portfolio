import React, { Component } from 'react';
import './App.css';
import './styles/main.css';
import Navbar from './components/navbar'
import Hero from './components/hero'

class App extends Component {
  render() {
    return (
		<div id="page">
			
			<Navbar></Navbar>
			<Hero></Hero>
			<div className="temp">
				<p>Welcome!</p> 
				<p>This site is a work in progess, an opportunity for me to explore ReactJS, and share the things I love!</p>
			</div>
		</div>
    );
  }
}

export default App;
