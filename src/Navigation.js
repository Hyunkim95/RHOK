
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

class Navigation extends Component {
  render() {
    return (

        <div>
        <Navbar color="faded" light>
            <NavbarBrand href="/"><i class="fa fa-arrow-left" aria-hidden="true"></i></NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
