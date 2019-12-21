import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/main.less';

import { Canvas } from 'react-three-fiber';

import { Row, Col, Container } from 'react-bootstrap';

import Scene from './Scene.jsx';

import * as typeformEmbed from '@typeform/embed';

import { PrimaryButton, SecondaryButton } from '../common/Buttons.jsx';
import { WhiteLink, BlueLink } from '../common/Link.jsx';

class LandingBody extends Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "https://myriade.typeform.com/to/Y6daMA", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
  }

  render() {
    return (
      <Container>
        <Row className={Style.Header}>
          <Col md={6}>
            <div className={Style.Hero}>
              <h1>The first Fortune-Mining Pool.</h1>
              <h1>Made for Monero.</h1>
              <br />
              <WhiteLink to={ROUTES.SIGN_UP}><PrimaryButton pill >Get Started</PrimaryButton></WhiteLink>
              <BlueLink to={ROUTES.DASHBOARD}><SecondaryButton pill outline>Log In</SecondaryButton></BlueLink>
            </div>
          </Col>
          <Col md={6}>

            <Canvas camera={{ fov: 75, near: 1, far: 1000 }} pixelRatio={window.devicePixelRatio}>
              <Scene />
            </Canvas>
          </Col>
        </Row>
        <div ref={(el) => this.el = el} style={{ width: '100%', height: '500px' }} />
      </Container>
    );
  }
}

export default LandingBody;
