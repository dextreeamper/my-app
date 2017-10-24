// 1. what route to go and component used (react-router)
// 2. app component
// 3. app js
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';

const Routes = () => (
	 <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
);

export default Routes;