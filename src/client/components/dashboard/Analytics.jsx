import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import LineChart from './LineChart.jsx';

import {
  Card,
  CardImg,
  CardDeck,
  CardImgOverlay,
  CardHeader,
  CardBody
} from 'shards-react';

import { MinerConsumer } from '../../pages/Dashboard.jsx';

import gqlClient from '../../utils/graphql.js';

import ComponentStyle from '../../styles/components/dashboard/Analytics.less'

import _ from 'lodash';

class AnalyticsComponent extends Component {

  render() {
    return (
      <MinerConsumer>
        {(miner) => (
          <Container className={ComponentStyle.MetricsStyle}>
            <Row className={ComponentStyle.Row}>
              <Col>
                <Card small={true}>
                  <CardImg className="card-img-top card-img-bottom" src="https://ak7.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg" alt="Card image" />
                  <CardImgOverlay>
                    <h4>Your average hashrate </h4>
                    <h3>{miner.average_hashrate}</h3>
                  </CardImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card small={true}>
                  <CardImg className="card-img-top card-img-bottom" src="https://cdn.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-4.jpg" alt="Card image" />
                  <CardImgOverlay>
                    <h4>Pool hashrate </h4>
                    <h3>N/A</h3>
                  </CardImgOverlay>

                </Card>
              </Col>
              <Col>
                <Card small={true}>
                  <CardImg className="card-img-top card-img-bottom" src="https://ak7.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg" alt="Card image" />
                  <CardImgOverlay>
                    <h4>Mining credits balance </h4>
                    <h3>{miner.myriade_credits_balance}</h3>
                  </CardImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row className={ComponentStyle.Row}>
              <Col>
                <Card className={ComponentStyle.HashrateChart}>
                  <CardHeader>
                    <h3>Historical Metrics</h3>
                    <p>An overview of hashrates, shares and mining credits</p>
                  </CardHeader>
                  <CardBody>
                    <LineChart data={{
                      hashrates: miner.historical_hashrates,
                      credits: miner.myriade_credits,
                      shares: miner.shares
                    }} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </MinerConsumer>

    )
  }
}

export default AnalyticsComponent;
