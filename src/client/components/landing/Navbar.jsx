import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {

  navigate(dest){
    //console.log(dest)
    this.props.onSetPage(dest)
  }

  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand onClick={this.navigate.bind(this, "main")}>
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
            <Nav.Link onClick={this.navigate.bind(this, "game")}>Game Room</Nav.Link>
            <Nav.Link onClick={this.navigate.bind(this, "shop")}>Shop</Nav.Link>
            <Nav.Link onClick={this.navigate.bind(this, "signup")}>Sign Up</Nav.Link>
          </Nav>
        </Navbar>
    );
  }
}

export default Header;
