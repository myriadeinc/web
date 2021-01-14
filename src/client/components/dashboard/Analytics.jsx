import React, { Component } from 'react'
import { Container, CardDeck, Card } from 'react-bootstrap'
import Chart from './LineChart.jsx'

import { MinerConsumer } from '../../pages/Dashboard.jsx'

import Style from '../../styles/components/dashboard/Analytics.less'

import _ from 'lodash'

class AnalyticsComponent extends Component {
    render() {
        let width = window.innerWidth

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
                                    <Card.ImgOverlay
                                        className={Style.CardOverlay + ' p-3'}
                                    >
                                        <div>
                                            <h1
                                                className={
                                                    Style.dynamicSubtitle
                                                }
                                            >
                                                Average Hashrate{' '}
                                            </h1>
                                            <h1 className={Style.dynamicTitle}>
                                                N/A
                                                {/*miner.average_hashrate H/sec*/}
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
                                    <Card.ImgOverlay
                                        className={Style.CardOverlay + ' p-3'}
                                    >
                                        <div>
                                            <h1
                                                className={
                                                    Style.dynamicSubtitle
                                                }
                                            >
                                                Total MC Earned
                                            </h1>
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
                                    <Card.ImgOverlay
                                        className={Style.CardOverlay + ' p-3'}
                                    >
                                        <div>
                                            <h1
                                                className={
                                                    Style.dynamicSubtitle
                                                }
                                            >
                                                Pool Hashrate
                                            </h1>
                                            <h1 className={Style.dynamicTitle}>
                                                N/A
                                            </h1>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </CardDeck>
                        ) : (
                            <Card className="mt-5">
                                <Card.Body>
                                    <Card.Text>
                                        Your average hashrate:{' '}
                                        {miner.average_hashrate}
                                    </Card.Text>
                                    <Card.Text>Pool hashrate: N/A</Card.Text>
                                    <Card.Text>
                                        Mining credits balance{' '}
                                        {miner.myriade_credits_balance}
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
        )
        return output
    }
}

export default AnalyticsComponent
