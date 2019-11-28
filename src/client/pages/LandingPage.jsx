import React, { Component } from 'react';

import Header from '../components/landing/Navbar.jsx';
import LandingBody from '../components/landing/LandingBody.jsx';
import SignUp from '../components/landing/SignUp.jsx'
import PoolStats from '../components/PoolStats.jsx';
import FindOutMore from '../components/landing/FindOutMore.jsx';

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: "main"
    };
  }

  render() {
    return (
      <>
        <Header />
        <LandingBody />
      </>
    );
  }
}

export default LandingPage;
