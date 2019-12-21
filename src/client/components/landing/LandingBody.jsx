import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/main.less';

import { Canvas } from 'react-three-fiber';

import { Row, Col, Container, Accordion, Card } from 'react-bootstrap';

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

        <h3 className={Style.Title}>Frequently Asked Questions</h3>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              What is Myriade?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Myriade is a crypto asset service company that is for the moment focusing on mining, specifically: Monero (XMR).</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              So... You’re a mining pool... we have plenty of those already.
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>What sets us apart from traditional mining pools is our novel payout method. Rather than using classic systems such as PPS and PPLNS, we’re using something completely different; Fortune Mining.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              How does Fortune Mining work?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>When you sign in and mine on the Myriade mining pool, your account will be credited in Mining Credits (MC), which are proportionally distributed based off your hashing power. MCs are NOT a crypto asset in any way, shape, or form. It does not have a set value. You will be mining on the Monero network, and there will be no scenario where you would be able to pull MC out to an exchange. Instead, think of MC like tokens at an arcade or credit card rebate points that are only redeemable here.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Why Fortune Mining?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>The goal of Myriade’s Fortune Mining system is to create value from personal gaming systems that aren’t being used during downtime. Myriade allows gamers to put their old and unused devices to use, by creating a means to use that extra hashing power.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              What is MC used for?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>MC can be used in the game room, where you can stake it for the chance to win Monero in a raffle type game. For one day’s worth of mining on a CPU that would normally earn you $0.11 USD /day you could walk out with a full block reward, and cash out whenever you’d like.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Who is this for?
              </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Myriade hopes to offer an alternative for the average user, who doesn’t own the top tier CPU. We hope to allow everyday people to see potential value in using their hardware to mine again. By creating a community pool that people can win from, Myriade helps to democratize the mining process, while making it easy for newcomers to be onboarded.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <div ref={(el) => this.el = el} style={{ width: '100%', height: '500px' }} />

      </Container >
    );
  }
}

export default LandingBody;
