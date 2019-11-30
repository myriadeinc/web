import React, { Component } from 'react';

import LandingBody from '../components/landing/LandingBody.jsx';

import { Alert } from 'shards-react';

class LandingPage extends Component {

  render() {
    return (    
      <>    
        <Alert theme="warning"> Our mining pool is currently under Beta testing and not fully operational yet. </Alert>
        <LandingBody />
      </>
    );
  }
}

export default LandingPage;
