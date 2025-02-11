import React, { Component } from 'react';

import LandingBody from '../components/landing/LandingBody.jsx';
import LandingFooter from '../components/landing/LandingFooter.jsx';

import { Alert } from 'shards-react';

import PageStyle from '../styles/pages/Landing.less';
import { Redirect } from 'react-router';
import * as ROUTES from '../utils/routes.js';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.dismiss = this.dismiss.bind(this);
    this.state = {
      poolAlert: true,
    };
  }

  dismiss() {
    this.setState({ poolAlert: false });
  }

  render() {
    if (this.props.authenticated) {
      return <Redirect to={ROUTES.DASHBOARD} />;
    } else {
      return (
        <>
          <Alert
            theme="warning"
            className={PageStyle.amber}
            dismissible={this.dismiss}
            open={this.state.poolAlert}
          >
            Our Mining Pool is in alpha so there may be some issues. Currently we are facing downtime and are working on a fix. Withdrawals and Game room are still operational. Check back with us soon. Thanks for
            your patience!
            
          </Alert>
          <LandingBody />
          <LandingFooter />
        </>
      );
    }
  }
}

export default LandingPage;
