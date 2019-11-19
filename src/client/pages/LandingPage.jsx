import React, { Component } from 'react';

import Header from '../components/landing/Header.jsx';
import LandingBody from '../components/landing/LandingBody.jsx';
import SignUp from '../components/landing/SignUp.jsx'
import PoolStats from '../components/PoolStats.jsx';
import FindOutMore from '../components/landing/FindOutMore.jsx';

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <LandingBody/>
        <PoolStats />
        <FindOutMore />
      </>
    );
  }
}

export default LandingPage;
