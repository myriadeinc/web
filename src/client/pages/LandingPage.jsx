import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import LandingBody from '../components/LandingBody.jsx';

import PoolStats from '../components/PoolStats.jsx';
import FindOutMore from '../components/FindOutMore.jsx';

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
