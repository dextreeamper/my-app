import React, { Component } from 'react';
import '../assets/css/header.css';
import Tekcode from '../assets/images/tekcode-logo.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      	<Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Tekcode Logo</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
            <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="/contact">Contact</NavItem>
          </Nav>
          <div className="nav navbar-right">
              <NavItem eventKey={1} href="/">Inquire</NavItem>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;