import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import Chart from './LineChart.jsx';

import { MinerConsumer } from '../../pages/Dashboard.jsx';

import Style from '../../styles/components/dashboard/Analytics.less';

import _ from 'lodash';

import axios from 'axios';
import config from '../../utils/config.js';

class AnalyticsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolRate: 0,
    };
  }

  componentDidMount() {
    axios
      .get(`${config.miner_metrics_url}/v1/public/poolInfo`)
      .then((res) => this.setState({ poolRate: res.data.hashrate }));
  }

  render() {
    let width = window.innerWidth;

    let output = (
      <MinerConsumer>
        {(miner) => (
          <Container className={Style.MetricsStyle}>
            {width > 800 ? (
              <CardDeck className="mt-5">
                <Card>
                  <Card.Img
                    className={Style.CardBg}
                    src="https://i.ibb.co/h21M3Dr/Triangle-Pattern-1.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay className={Style.CardOverlay + ' p-3'}>
                    <div>
                      <h1 className={Style.dynamicSubtitle}>
                        Average Hashrate (24h){' '}
                      </h1>
                      <h1 className={Style.dynamicTitle}>
                        {`${miner.average_hashrate} H/sec`}
                      </h1>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <Card small="true">
                  <Card.Img
                    className={Style.CardBg}
                    src="https://i.ibb.co/Tr40bKY/green.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay className={Style.CardOverlay + ' p-3'}>
                    <div>
                      <h1 className={Style.dynamicSubtitle}>MC Balance</h1>
                      <h1 className={Style.dynamicTitle}>
                        {miner.myriade_credits_balance}
                      </h1>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <Card small="true">
                  <Card.Img
                    className={Style.CardBg}
                    src="https://i.ibb.co/0BGXJ9H/Triangle-Pattern-1.png"
                    alt="Card image"
                  />
                  <Card.ImgOverlay className={Style.CardOverlay + ' p-3'}>
                    <div>
                      <h1 className={Style.dynamicSubtitle}>Pool Hashrate</h1>
                      <h1 className={Style.dynamicTitle}>
                        {`${this.state.poolRate} H/sec`}
                      </h1>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </CardDeck>
            ) : (
              <Card className="mt-5">
                <Card.Body>
                  <Card.Text>
                    Your average hashrate: {miner.average_hashrate}
                  </Card.Text>
                  <Card.Text>Pool hashrate: {this.state.poolRate}</Card.Text>
                  <Card.Text>
                    Mining credits balance {miner.myriade_credits_balance}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            <Card className={Style.HashrateChart + ' mt-5 mb-5'}>
              <Card.Header>
                <h3>Historical Metrics</h3>
                <p>See how your hashrate changes over time.</p>
              </Card.Header>
              <Card.Body>
                <Chart />
              </Card.Body>
            </Card>
          </Container>
        )}
      </MinerConsumer>
    );
    return output;
  }
}

export default AnalyticsComponent;
