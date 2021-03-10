import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
            <h3>How it Works</h3>
            <hr />
            <h5>
              When you mine <strong>Monero</strong> (XMR) with us, you earn{' '}
              <strong>Mining Credits</strong> (MC).
            </h5>
            <h5>
              You can spend your <strong>MC</strong> on raffle tickets in the
              Game Room to win XMR!
            </h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>1. How to Start Earning MC</h3>
            <hr />
            <h5>
              To start earning MC, simply head over to the{' '}
              <a href="/#/dashboard/mining">Start Mining</a> page where you will
              find a step-by-step guide and video tutorial on mining with your
              computer.
            </h5>
            <h5>
              Once the miner is setup and running, you can start earning MC!
            </h5>
            <h5>
              Please message <a href="/#/dashboard/support">Support</a> if you
              have any questions. We are here to help! :)
            </h5>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>2. How to Enter Drawings</h3>
            <hr />
            <h5>
              Go to the <a href="/#/dashboard/gameroom/raffles">Game Room</a>{' '}
              and use your MC to buy tickets for any drawing you wish to enter!
            </h5>
            <h5>
              Here's what a drawing looks like in the{' '}
              <a href="/#/dashboard/gameroom/raffles">Game Room</a>:
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className={Style.timeline__image}
              src="https://i.ibb.co/J3SncF4/Anatomy-of-a-drawing.png"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GetStarted;
