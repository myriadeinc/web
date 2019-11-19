import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class HeaderComponent extends Component {

  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../../../public/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Myriade'}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Game Room</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Sign Up</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}

export default HeaderComponent;
