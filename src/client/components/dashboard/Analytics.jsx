import React, { Component } from 'react';
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import LineChart from './LineChart.jsx';
import PageStyle from '../../styles/components/AnalyticsComponent.less';


class AnalyticsComponent extends Component {
  render() {
    return (
      <Container className="h-100 w-100 d-flex flex-column m-5">
        <h1 className={PageStyle.title}>Analytics</h1>
        <CardDeck className="text-white">
          <Card>
            {/*<img src={window.location.origin + '/images/dashboard1.svg'} />*/}
            <Card.Img src="https://ak7.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg" alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Text>Average Hashrate</Card.Text>
              <h1>598H/sec</h1>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img src="https://cdn.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-4.jpg" alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Text>Total MC Earned</Card.Text>
              <h1>598H/sec</h1>
            </Card.ImgOverlay>
          </Card>
          <Card>
            <Card.Img src="https://ak2.picdn.net/shutterstock/videos/1024941782/thumb/1.jpg" alt="Card image" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <Card.Text>XMR/USD</Card.Text>
              <h1>598H/sec</h1>
            </Card.ImgOverlay>
          </Card>
        </CardDeck>
        <Row className="h-50 mt-4">
          <Col md="8 pt-4 pb-5">
            <Card className="h-100">
              <Card.Header>
                <h1>Daily MC Earned</h1>
              </Card.Header>
              <LineChart />
            </Card>
          </Col>
          <Col md="4 pt-4 pb-5">
            <Card className="h-100">
              <Card.Header>
                <h1>Partner Activity</h1>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AnalyticsComponent;
