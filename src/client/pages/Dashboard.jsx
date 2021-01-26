import React, { Component, createContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card, CardBody, CardFooter, ListGroup, Alert } from 'shards-react'
import { HashRouter as Router, Link, Switch } from 'react-router-dom'

import { DynamicBlackLink } from '../components/common/Link.jsx'
import { SecondaryButton } from '../components/common/Buttons.jsx'

import { gql } from 'apollo-boost'
import { gqlMiner } from '../utils/graphql.js'
import config from '../utils/config.js'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

import { ProtectedRoute, AuthConsumer } from '../layers/AuthLayer.jsx'

import PageStyle from '../styles/pages/Dashboard.less'

import Analytics from '../components/dashboard/Analytics.jsx'
import Mine from '../components/dashboard/Mine.jsx'
import Gameroom from '../components/dashboard/Gameroom.jsx'
import Withdraw from '../components/dashboard/Withrdraw.jsx'
import Support from '../components/dashboard/Support.jsx'
import Gravatar from 'react-gravatar'

const minerContext = createContext()

class DashboardPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minerId: null,
            error: null,
            miner: {
                id: null,
                email: null,
                name: null,
                myriade_credits: [],
                myriade_credits_balance: null,
                shares: [],
                historical_hashrates: [],
                average_hashrate: '0',
                monero_balance: '0',
                monero_wallet: null,
                withdrawing: false,
                refresh: this.forceUpdate,
            },
            USD: 0.0,
        }
        this.dismissError = this.dismissError.bind(this)
        this.state.miner.refresh = this.state.miner.refresh.bind(this)
    }

    dismissError() {
        this.setState({ error: null })
    }

    displayError() {
        return (
            <Alert theme="danger" dismissible={this.dismissError}>
                {this.state.error}
            </Alert>
        )
    }

    componentDidMount() {
        let tokenInfo = jwt_decode(localStorage.getItem('access_token'))
        var newMinerObj = { ...this.state.miner }
        newMinerObj.id = tokenInfo.sub
        newMinerObj.email = tokenInfo.account.email
        newMinerObj.name = tokenInfo.account.name

        axios
            .get(`${config.identity_service_url}/v1/account/self`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                },
            })
            .then((response) => {
                console.log(response)
                newMinerObj.monero_balance =
                    response.data.balance / Math.pow(10, 12)
                this.forceUpdate()
            })
            .catch((error) => {
                console.error('There was an error!', error)
                return this.setState({
                    error:
                        'Unable to fetch your data, please check your connection, your login and try again later',
                })
            })

        axios
            .get(`${config.miner_metrics_url}/v1/stats/credit`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                },
            })
            .then((response) => {
                newMinerObj.myriade_credits_balance = response.data.credits
                this.forceUpdate()
            })
            .catch((error) => {
                console.error('There was an error!', error)
                return this.setState({
                    error:
                        'Unable to fetch your data, please check your connection, your login and try again later',
                })
            })

        axios
            .get(`${config.miner_metrics_url}/v1/stats/hashrates`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                },
            })
            .then((response) => {
                newMinerObj.historical_hashrates = response.data.map(
                    (entry) => {
                        return {
                            time: new Date(entry.time).getTime(),
                            rate: entry.rate,
                        }
                    }
                )
                this.forceUpdate()
            })
            .catch((error) => {
                console.error('There was an error!', error)
                return this.setState({
                    error:
                        'Unable to fetch your data, please check your connection, your login and try again later',
                })
            })

        axios
            .get(
                `https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD`
            )
            .then((response) => {
                this.setState(response.data)
            })
            .catch((error) => {
                console.error('There was an error!', error)
            })

        this.setState({ miner: newMinerObj })
    }

    render() {
        return (
            <AuthConsumer>
                {({ authenticated, logout }) => (
                    <minerContext.Provider value={this.state.miner}>
                        <Row>
                            <Col lg={3}>
                                <Card className={PageStyle.sidebar}>
                                    <CardBody>
                                        <Gravatar
                                            className={PageStyle.gravatar}
                                            size={200}
                                            email={this.state.miner.email}
                                        />
                                        <br />
                                        <h3>{this.state.miner.name}</h3>
                                        <p>{this.state.miner.email}</p>
                                        <p>
                                            <strong>
                                                Mining Credits:{' '}
                                                {
                                                    this.state.miner
                                                        .myriade_credits_balance
                                                }
                                            </strong>
                                        </p>
                                        <p>
                                            <i className="fab fa-monero" />{' '}
                                            Monero Balance:{' '}
                                            {`${
                                                this.state.miner.monero_balance
                                            } ($${(
                                                this.state.USD *
                                                this.state.miner.monero_balance
                                            ).toFixed(2)} USD)`}
                                        </p>
                                        <hr />
                                        <ListGroup>
                                            <DynamicBlackLink
                                                to={`${this.props.match.path}/`}
                                            >
                                                Mining Metrics
                                            </DynamicBlackLink>
                                            <DynamicBlackLink
                                                to={`${this.props.match.path}/mining`}
                                            >
                                                {' '}
                                                Start Mining{' '}
                                            </DynamicBlackLink>
                                            <DynamicBlackLink
                                                to={`${this.props.match.path}/gameroom`}
                                            >
                                                {' '}
                                                Game Room{' '}
                                            </DynamicBlackLink>
                                            <DynamicBlackLink
                                                to={`${this.props.match.path}/withdraw`}
                                            >
                                                {' '}
                                                Withdraw{' '}
                                            </DynamicBlackLink>
                                            <DynamicBlackLink
                                                to={`${this.props.match.path}/support`}
                                            >
                                                {' '}
                                                Support{' '}
                                            </DynamicBlackLink>
                                        </ListGroup>
                                    </CardBody>
                                    <CardFooter
                                        className={PageStyle.sidebarFooter}
                                        onClick={logout}
                                    >
                                        <SecondaryButton pill outline>
                                            Logout
                                        </SecondaryButton>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg={9}>
                                {this.state.error && this.displayError()}
                                <Switch>
                                    <ProtectedRoute
                                        exact
                                        path={`${this.props.match.path}/`}
                                        component={Analytics}
                                        authenticated={authenticated}
                                    />
                                    <ProtectedRoute
                                        path={`${this.props.match.url}/mining`}
                                        component={Mine}
                                        authenticated={authenticated}
                                    />
                                    <ProtectedRoute
                                        path={`${this.props.match.url}/gameroom`}
                                        component={Gameroom}
                                        authenticated={authenticated}
                                    />
                                    <ProtectedRoute
                                        path={`${this.props.match.url}/withdraw`}
                                        component={Withdraw}
                                        authenticated={authenticated}
                                    />
                                    <ProtectedRoute
                                        path={`${this.props.match.url}/support`}
                                        component={Support}
                                        authenticated={authenticated}
                                    />
                                </Switch>
                            </Col>
                        </Row>
                    </minerContext.Provider>
                )}
            </AuthConsumer>
        )
    }
}

export const MinerConsumer = minerContext.Consumer

export default DashboardPage
