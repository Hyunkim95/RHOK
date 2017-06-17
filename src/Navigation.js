
import React, { Component } from 'react';
import { Navbar, Nav, Navitem, MenuItem } from 'reactstrap';
import './App.css';

class Navigation extends Component {
  render() {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar>
    );
  }
}

export default Navigation;
