import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/components/landing/main.less';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

import GLOBE from '../../vendor/vanta.globe.min.js';
import * as THREE from 'three';

import * as typeformEmbed from '@typeform/embed';

import { PrimaryButton, SecondaryButton } from '../common/Buttons.jsx';
import { WhiteLink, BlueLink } from '../common/Link.jsx';

class LandingBody extends Component {
  constructor(props) {
    super(props);
    this.el = null;
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    if (this.el) {
      typeformEmbed.makeWidget(this.el, "https://myriade.typeform.com/to/Y6daMA", {
        hideFooter: true,
        hideHeaders: true,
        opacity: 0
      });
    }
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      THREE: THREE,
      color: 0xf05c1f,
      color2: 0xFFFFFF,
      backgroundColor: 0xe0222,
      size: 0.6
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }

  render() {
    return (

      <div>
        <div ref={this.vantaRef} className="vh-100">
          <Row className={Style.TitleDiv}>
            <Col>
              <div className={Style.Hero} >
                <h1 className="text-white"><strong>The First Fortune-Mining Pool.</strong></h1>
                <h1 className="text-white"><strong>Made for Monero.</strong></h1>
                <br />
                <WhiteLink to={ROUTES.SIGN_UP} className="ml-5"><PrimaryButton pill >Get Started</PrimaryButton></WhiteLink>
                <BlueLink to={ROUTES.DASHBOARD}><SecondaryButton pill outline>Log In</SecondaryButton></BlueLink>
              </div>
            </Col>
          </Row>
        </div>
        {/*
            <Canvas camera={{ fov: 75, near: 1, far: 1000 }} pixelRatio={window.devicePixelRatio}>
              <Scene />
            </Canvas>
             */}

        <div className={Style.faq}>
          <h3 className={Style.Title}>Frequently Asked Questions</h3>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" className={Style.faqToggle}>
                <Card.Title>What is Myriade?</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Myriade is a crypto asset service company that is for the moment focusing on mining, specifically: Monero (XMR).</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <Card.Title>So... You’re a mining pool... we have plenty of those already.</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>What sets us apart from traditional mining pools is our novel payout method. Rather than using classic systems such as PPS and PPLNS, we’re using something completely different; Fortune Mining.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <Card.Title>How does Fortune Mining work?</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>When you sign in and mine on the Myriade mining pool, your account will be credited in Mining Credits (MC), which are proportionally distributed based off your hashing power. MCs are NOT a crypto asset in any way, shape, or form. It does not have a set value. You will be mining on the Monero network, and there will be no scenario where you would be able to pull MC out to an exchange. Instead, think of MC like tokens at an arcade or credit card rebate points that are only redeemable here.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <Card.Title>Why Fortune Mining?</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>The goal of Myriade’s Fortune Mining system is to create value from personal gaming systems that aren’t being used during downtime. Myriade allows gamers to put their old and unused devices to use, by creating a means to use that extra hashing power.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <Card.Title>What is MC used for?</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>MC can be used in the game room, where you can stake it for the chance to win Monero in a raffle type game. For one day’s worth of mining on a CPU that would normally earn you $0.11 USD /day you could walk out with a full block reward, and cash out whenever you’d like.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <Card.Title>Who is this for?</Card.Title>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>Myriade hopes to offer an alternative for the average user, who doesn’t own the top tier CPU. We hope to allow everyday people to see potential value in using their hardware to mine again. By creating a community pool that people can win from, Myriade helps to democratize the mining process, while making it easy for newcomers to be onboarded.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <div ref={(el) => this.el = el} className={Style.mailingForm} />

      </div >
    );
  }
}

export default LandingBody;
