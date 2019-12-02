import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/main.less';

import { Canvas } from 'react-three-fiber';

import { Row, Col } from 'react-bootstrap';

import Scene from './Scene.jsx';

import { PrimaryButton, SecondaryButton } from '../common/Buttons.jsx';
import { WhiteLink, BlueLink } from '../common/Link.jsx';

class LandingBody extends Component {

  render() {
    return (

      <Row className={Style.Header}>
        <Col md={6}>
          <div className={Style.Hero}>
            <h1>The first Fortune-Mining Pool.</h1>
            <h1>Made for Monero.</h1>
            <br />
            <PrimaryButton pill ><WhiteLink to={ROUTES.DASHBOARD}>Get Started</WhiteLink> </PrimaryButton>
            <SecondaryButton pill outline><BlueLink to={ROUTES.SIGN_UP}>Sign up </BlueLink></SecondaryButton>
          </div>
        </Col>
        <Col md={6}>

          <Canvas camera={{ fov: 75, near: 1, far: 1000 }} pixelRatio={window.devicePixelRatio}>
            <Scene />
          </Canvas>
        </Col>

      </Row>
    );
  }
}

export default LandingBody;
