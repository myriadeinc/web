import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Style from '../../styles/components/landing/main.less';

class GetStarted extends Component {
  render() {
    return (
      <Container className="pt-4 h-100">
        <h1 style={{ color: 'rgb(246, 134, 0)' }}>
          Getting Started With Myriade
        </h1>
        <br />
        <Row>
          <Col>
            <h3>
              How it Works (
              <a
                href="https://paul-myriade.medium.com/a-beginners-guide-to-myriade-mining-9d93e435b74a"
                target="blank"
              >
                Beginners click here
              </a>
              )
            </h3>
            <hr />
            <h5>
              When you mine <strong>Monero</strong> (XMR) with us, you can earn{' '}
              <strong>Mining Credits</strong> (MC) and Monero (XMR) directly.
              You can even decide on a unique mix of MC and XMR to mine both at
              once or pick to earn just one.
            </h5>
            <h5>
              The purpose of MC is to spend them on raffle tickets in the Game
              Room for a chance to win more XMR than you'd otherwise earn while
              mining Monero alone.
            </h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>1. How to Start Earning MC</h3>
            <hr />
            <h5>
              To start mining, simply head over to the{' '}
              <a href="/#/dashboard/mining">Start Mining</a> page where you will
              find a step-by-step guide and video tutorial on mining with your
              computer.
            </h5>
            <h5>
              Once the miner is up and running, make sure you head over to the{' '}
              <a href="/#/dashboard">Mining Metrics</a> page to select your
              optimal MC/XMR split.
            </h5>
            <h5>
              Please message <a href="/#/dashboard/support">Support</a> if you
              have any questions. The mining process can be a pain, so until we
              make it easier please use us if you need to. We are here to help!
              :)
            </h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>2. How to Enter Drawings</h3>
            <hr />
            <h5>
              Once you have some MC, head over to the{' '}
              <a href="/#/dashboard/gameroom/raffles">Game Room</a> and buy
              tickets for any drawing you wish to enter!
            </h5>
            <h5>Here's what a drawing looks like in the Game Room:</h5>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <img
              src="https://i.ibb.co/drrxZ6F/Anatomy-of-a-drawing-1.png"
              alt="Anatomy-of-a-drawing-1"
              border="0"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GetStarted;
