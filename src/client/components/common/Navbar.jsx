import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import { BlackLink } from './Link.jsx';

import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'shards-react';

import NavStyle from '../../styles/components/common/Common.less';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar type="light" theme="white" expand="md" className={NavStyle.navBg}>
        <NavbarBrand href="#">
          <img
            alt="navbar logo"
            src="https://res.cloudinary.com/dtocmcjrg/image/upload/v1575006713/myriade_logo_m9gab5.svg"
            height="35"
          />
        </NavbarBrand>
        <Nav navbar className="ml-auto">
          <NavItem>
            <BlackLink to={ROUTES.DASHBOARD}>
              <Button pill outline theme="secondary">
                {' '}
                Dashboard{' '}
              </Button>
            </BlackLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
