import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from '../component/Header';

class About extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<div className="About">
	        <h1>About Page</h1>
	      </div>
      </div>
    );
  }
}

export default About;