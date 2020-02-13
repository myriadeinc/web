import React, { Component } from 'react';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/components/landing/main.less';
import { Row, Container, Accordion, Card, ResponsiveEmbed, Jumbotron } from 'react-bootstrap';

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
          <div className={Style.TitleDiv}>
            <h1 className="text-white"><strong>The World’s First Fortune-Mining Pool.</strong></h1>
            <h1 className="text-white"><strong>Made for Monero.</strong></h1>
            <Row className="ml-5 pl-3">
              <WhiteLink to={ROUTES.SIGN_UP}><PrimaryButton pill >Get Started</PrimaryButton></WhiteLink>
              <BlueLink to={ROUTES.DASHBOARD}><SecondaryButton pill>Log In</SecondaryButton></BlueLink>
            </Row>
          </div>
        </div>

        <Container>
          <Video />
          <Faq />
          <Jumbotron className="mt-5">
            <div ref={(el) => this.el = el} className={Style.mailingForm} />
          </Jumbotron>
        </Container>

      </div >
    );
  }
}

const Video = () => (
  <div className="mt-5 pt-5">
    <h3 className={Style.Title}>What It's All About</h3>
    <Jumbotron className="p-3">
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe src="https://www.youtube.com/embed/U0uYO3xVTDU" frameBorder="0" allowFullScreen></iframe>
      </ResponsiveEmbed>
    </Jumbotron>
  </div>
);

const Faq = () => (
  <div className="pt-5 pb-5">
    <h3 className={Style.Title}>Frequently Asked Questions</h3>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0" className={Style.faqToggle}>
          <Card.Title>What is Myriade?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" className={Style.faqCollapse}>
          <Card.Body>Myriade is a crypto asset service company that is for the moment focusing on mining, specifically: Monero (XMR). Though look out, we plan on offering other services in the near future.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1" className={Style.faqToggle}>
          <Card.Title>So... You’re a mining pool... we have plenty of those already.</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" className={Style.faqCollapse}>
          <Card.Body>What sets us apart from traditional mining pools is our novel payout method. Rather than using classic systems such as PPS and PPLNS, we’re using something completely different. Something we call: Fortune Mining.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2" className={Style.faqToggle}>
          <Card.Title>How does Fortune Mining work?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" className={Style.faqCollapse}>
          <Card.Body>When you sign in and mine on the Myriade mining pools, your account will be
credited in Mining Credits (MC), which are proportionally distributed based off your hashing power (similar to current mining pools). To be clear. MCs are NOT a crypto asset in any way, shape, or form. It does not have a set value, it is not mineable. You will be mining on the Monero network, and there will be no scenario where you would be able to pull MC out to an exchange or use it anywhere other than the Myriade ecosystem. Instead, think of MC like tokens at an arcade or credit card rebate points that are exclusively redeemable here. </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3" className={Style.faqToggle}>
          <Card.Title>Why Fortune Mining?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3" className={Style.faqCollapse}>
          <Card.Body>The goal of Myriade’s Fortune Mining system is to create value from personal gaming computers that aren’t being used during downtime. Myriade allows gamers and people with spare hashing power laying around to put their old and unused devices to use, by creating a potentially profitable means of earning Monero.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4" className={Style.faqToggle}>
          <Card.Title>What is MC used for?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4" className={Style.faqCollapse}>
          <Card.Body>We invite you to create an account, if anything, just to see how the service works. You’ll see that MC can be used in the game room, where you can stake them for the chance to win Monero in a “raffle type game”. For example, for one day’s worth of mining on a CPU that would normally earn you $0.13 USD /day of XMR,  you could instead walk out with a full block reward, cash out, and never touch Myriade again.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5" className={Style.faqToggle}>
          <Card.Title>How does Myriade make money?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5" className={Style.faqCollapse}>
          <Card.Body>For the moment, we only have one game in our game room so we will focus on that. The drawings happen in 4 stages: Creation, Funding, Profit, and Execution. We make our money in the profit stage. The creation stage is where we determine the amount of XMR that will be in play based off the current price of XMR/USD. The price will then be frozen for the remaining life of that drawing, no matter how the market may fluctuate. Then comes the funding stage. This is where people can start purchasing tickets with MC for the drawing. Once the amount of MC in the drawing has reached the point where it is fully funded, then we enter the profit stage. The profit stage lasts 20 minutes and the tickets will cost more MC to purchase. Purchasing a ticket during the profit stage is generally for the people who do not want to wait however long it takes the other drawings to become funded. Finally, execution: this is where a winner is chosen and their Myriade account is credited with XMR.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6" className={Style.faqToggle}>
          <Card.Title>Are there any special events?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6" className={Style.faqCollapse}>
          <Card.Body>We plan on having many special events where there will be huge jackpots that will be on a timer and will not require the drawing to be fully funded. Theoretically, you can buy 1 ticket, and if no one else plays against you then you will be the only winner. The way that we do this is by giving everyone a little bit less MC so we can store up big pools of XMR which we will be giving out either in big jackpot prizes, or by giving users small amounts of XMR randomly throughout their time mining just to say thank you for using Myriade.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="7" className={Style.faqToggle}>
          <Card.Title>Who is this for?</Card.Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7" className={Style.faqCollapse}>
          <Card.Body>Myriade is for the people who don’t have a full time mining rig (though those who do are also welcome) it’s for people who truly believe in the project and want to contribute any way they can. Before Myriade, the only way to do that was to either solo mine and have a low chance to win the whole block reward or mine in a pool and earn $4.18 /month of 24/7 mining (Intel I7-7700k, Dec 28 2019). The fact is: we’ve seen so many reddit posts where people ask “can I mine profitably with CPU X,Y,Z?” The responses are usually: no and that if they want Monero, they should just buy it instead. That doesn’t really follow with the Monero ethos of decentralisation. Now, with Myriade, that’s no longer true. So, who is Myriade for? Honestly, we made the service for ourselves since it’s something we would want to use and we think you all would like it too.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
);

export default LandingBody;
