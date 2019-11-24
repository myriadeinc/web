import React, { Component } from 'react';
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import LineChart from './LineChart.jsx';

class MiningComponent extends Component {
  render() {
    return (
      <Container className="h-100 w-100 d-flex flex-column m-5">
        <h4>Mining</h4>
        <CardDeck className="h-30">
          <Card className="text-white">
            {/*<img src={window.location.origin + '/images/dashboard1.svg'} />*/}
            <Card.Img src="https://place-hold.it/300x200" alt="Card image" />
            <Card.Img src='dashboard1.svg' alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>Average Hashrate</Card.Text>
              <Card.Title>598H/sec</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="text-white">
            <Card.Img src="https://place-hold.it/300x200" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>Total MC Earned</Card.Text>
              <Card.Title>598H/sec</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <Card className="text-white">
            <Card.Img src="https://place-hold.it/300x200" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text>XMR/USD</Card.Text>
              <Card.Title>598H/sec</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </CardDeck>
        <Row className="h-50">
          <Col md="8 pt-4 pb-5">
            <Card className="h-100">
              <Card.Header>
                <Card.Title>Daily MC Earned</Card.Title>
              </Card.Header>
              <LineChart />
            </Card>
          </Col>
          <Col md="4 pt-4 pb-5">
            <Card className="h-100">
              Card2
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MiningComponent;
