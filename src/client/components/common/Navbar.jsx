import React, { Component } from 'react';

import styled from 'styled-components';

import * as ROUTES from '../../utils/routes.js';

import { Link } from 'react-router-dom';

import { BlackLink, WhiteLink } from '../common/Link.jsx';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "shards-react";

import NavStyle from '../../styles/components/Navbar.less';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar type="light" theme="white" expand="md" className={NavStyle.Main}>
          <NavbarBrand href="#">
            <img
              alt=""
              src="https://res.cloudinary.com/dtocmcjrg/image/upload/v1575006713/myriade_logo_m9gab5.svg"
              width="150"
            /> 
          </NavbarBrand>
          <Nav navbar className="ml-auto">
            <NavItem >
              
              <Button pill outline theme='secondary'>
                <BlackLink to={ROUTES.DASHBOARD}> Dashboard </BlackLink>
              </Button>
            </NavItem>
          </Nav>
        
      </Navbar>
    );
  }
}



export default NavigationBar;
