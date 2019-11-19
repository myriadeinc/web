import React, { Component } from 'react';
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";


class Mining extends Component {
    render() {
        return (
          <Container className="h-100 d-flex flex-column">
            <h4>Mining</h4>
            <CardDeck>
              <Card className="text-white">
                <Card.Img src="https://place-hold.it/300x200" alt="Card image" />
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
            <Row className="flex-grow-1">
              <Col md="8 pt-4 pb-5">
                <Card className="h-100">
                  Card1
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

export default Mining;
