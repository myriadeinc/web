import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import SignUp from '../components/SignUp.jsx';
import PoolStats from '../components/PoolStats.jsx';

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <SignUp />
        <PoolStats />
      </>
    );
  }
}

export default LandingPage;
