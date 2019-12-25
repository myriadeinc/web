import React, { Component } from 'react';

import LandingBody from '../components/landing/LandingBody.jsx';
import LandingFooter from '../components/landing/LandingFooter.jsx';


import { Alert } from 'shards-react';

import PageStyle from '../styles/pages/Landing.less';

class LandingPage extends Component {

  render() {
    return (
      <>
        <Alert theme="warning" className={PageStyle.amber}> Our mining pool is currently under Beta testing and not fully operational yet. </Alert>
        <LandingBody />
        <LandingFooter />
      </>
    );
  }
}

export default LandingPage;
