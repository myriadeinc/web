import React, { Component } from 'react';
import { Container, CardDeck, Card } from "react-bootstrap";
import LineChart from './LineChart.jsx';

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
            <CardDeck>
              <Card>
                <Card.Img src="https://ak7.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg" alt="Card image" />
                <Card.ImgOverlay className="p-3">
                  <h1 className={ComponentStyle.dynamicTitle}>Your average hashrate </h1>
                  <h1 className={ComponentStyle.dynamicSubtitle}>{miner.average_hashrate}</h1>
                </Card.ImgOverlay>
              </Card>
              <Card small={true}>
                <Card.Img src="https://cdn.slidemodel.com/wp-content/uploads/7382-01-duotone-gradients-powerpoint-templates-16x9-4.jpg" alt="Card image" />
                <Card.ImgOverlay className="p-3">
                  <h1 className={ComponentStyle.dynamicTitle}>Pool hashrate </h1>
                  <h1 className={ComponentStyle.dynamicSubtitle}>N/A</h1>
                </Card.ImgOverlay>
              </Card>
              <Card small={true}>
                <Card.Img src="https://ak7.picdn.net/shutterstock/videos/1019866207/thumb/1.jpg" alt="Card image" />
                <Card.ImgOverlay className="p-3">
                  <h1 className={ComponentStyle.dynamicTitle}>Mining credits balance </h1>
                  <h1 className={ComponentStyle.dynamicSubtitle}>{miner.myriade_credits_balance}</h1>
                </Card.ImgOverlay>
              </Card>
            </CardDeck>

            <Card className={ComponentStyle.HashrateChart}>
              <Card.Header>
                <h3>Historical Metrics</h3>
                <p>An overview of hashrates, shares and mining credits</p>
              </Card.Header>
              <Card.Body>
                <LineChart data={{
                  hashrates: miner.historical_hashrates,
                  credits: miner.myriade_credits,
                  shares: miner.shares
                }} />
              </Card.Body>
            </Card>
          </Container>
        )}
      </MinerConsumer>

    )
  }
}

export default AnalyticsComponent;
