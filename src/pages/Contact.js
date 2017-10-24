import React, { Component } from 'react';
import '../assets/css/App.css';
import Header from '../component/Header';

class Contact extends Component {
  render() {
    return (
      <div>
      	<Header />
      	<div className="Contact">
	        <h1>Contact Page</h1>
	      </div>
      </div>
    );
  }
}

export default Contact;