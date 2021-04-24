import React, { Component } from 'react';
import { Container, CardDeck, Card } from 'react-bootstrap';
import Chart from './LineChart.jsx';

import { MinerConsumer } from '../../pages/Dashboard.jsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Style from '../../styles/components/dashboard/Analytics.less';

import _ from 'lodash';

import axios from 'axios';
import config from '../../utils/config.js';
import { Slider } from '@material-ui/core';

const PPSSlider = withStyles({
  root: {
    height: 4,
  },
  thumb: {
    height: 18,
    width: 18,
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

class AnalyticsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolRate: 0,
      ppsRatio: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.postRatio = this.postRatio.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${config.miner_metrics_url}/v1/public/poolInfo`)
      .then((res) => this.setState({ poolRate: res.data.hashrate }));

    axios
      .get(`${config.miner_metrics_url}/v1/stats/ppsratio`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then((res) => this.setState({ ppsRatio: res.data.ppsRatio }));
  }

  handleChange(event, newValue) {
    this.setState({
      ppsRatio: newValue,
    });
  }

  postRatio(event, newValue) {
    axios
      .post(
        `${config.miner_metrics_url}/v1/stats/ppsratio`,
        {
          ppsRatio: newValue,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )
      .then((res) => this.setState({ ppsRatio: res.data.ppsRatio }));
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
                    <div style={{ width: '100%' }}>
                      <h1 className={Style.dynamicSubtitle}>
                        Mining Allocation
                      </h1>
                      <h6
                        className={Style.dynamicSubtitle}
                        style={{ display: 'inline' }}
                      >
                        MC - {100 - this.state.ppsRatio}%
                      </h6>
                      <h6
                        className={Style.dynamicSubtitle}
                        style={{ float: 'right', display: 'inline' }}
                      >
                        {this.state.ppsRatio}% - XMR
                      </h6>
                      <PPSSlider
                        defaultValue={0}
                        step={10}
                        marks
                        value={this.state.ppsRatio}
                        min={0}
                        max={100}
                        onChange={this.handleChange}
                        onChangeCommitted={this.postRatio}
                      />
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
