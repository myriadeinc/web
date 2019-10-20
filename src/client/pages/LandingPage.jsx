import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import SignUp from '../components/SignUp.jsx';
import PoolStats from '../components/PoolStats.jsx';
import FindOutMore from '../components/FindOutMore.jsx';

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <SignUp />
        <PoolStats />
        <FindOutMore />
      </>
    );
  }
}

export default LandingPage;
