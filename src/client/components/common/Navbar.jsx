import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import { Link } from 'react-router-dom';

import { BlackLink } from './Link.jsx';


import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "shards-react";

import NavStyle from '../../styles/components/common/Common.less';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar type="light" theme="white" expand="md" className={NavStyle.navBg}>
        <NavbarBrand href="#" >
          <img
            alt=""
            src="https://res.cloudinary.com/cardboard32/image/upload/v1575344489/Myriade/logo_text_ql9qpd.svg"
            height="35"
          />
        </NavbarBrand>
        <Nav navbar className="ml-auto">
          <NavItem >
            <BlackLink to={ROUTES.DASHBOARD}>
              <Button pill outline theme='secondary' > Dashboard </Button>
            </BlackLink>
          </NavItem>
        </Nav>

      </Navbar>
    );
  }
}



export default NavigationBar;
