import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import SignUp from '../components/SignUp.jsx';

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <SignUp />
      </>
    );
  }
}

export default LandingPage;
