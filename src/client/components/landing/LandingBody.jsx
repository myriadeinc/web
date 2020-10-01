import React, { Component } from 'react'

import * as ROUTES from '../../utils/routes.js'

import Style from '../../styles/components/landing/main.less'
import {
    Row,
    Col,
    Container,
    Accordion,
    Card,
    ResponsiveEmbed,
    Jumbotron,
} from 'react-bootstrap'

import RINGS from '../../vendor/vanta.rings.min.js'
import * as THREE from 'three'

import {
    LightButton,
    LightSecondaryButton,
    DarkGradientButton,
} from '../common/Buttons.jsx'
import { WhiteLink, BlueLink } from '../common/Link.jsx'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

import moment from 'moment'

class LandingBody extends Component {
    constructor(props) {
        super(props)
        this.el = null
        this.vantaRef = React.createRef()
        this.state = {
            minerHashrate: 1000,
            hashrate: 1465330752.3138,
            USD: 69.82,
            reward: 1.57,
        }
    }
    componentDidMount() {
        if (this.el) {
            // typeformEmbed.makeWidget(this.el, "https://myriade.typeform.com/to/Y6daMA", {
            //   hideFooter: true,
            //   hideHeaders: true,
            //   opacity: 0
            // });
        }
        this.vantaEffect = RINGS({
            el: this.vantaRef.current,
            THREE: THREE,
            backgroundColor: 0x1122,
        })
        this.getHashrate()
        this.getConversion()
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    getHashrate = () => {
        fetch('https://www.cryptunit.com/api/history/?5')
            .then((resp) => resp.json())
            .then(
                (result) => {
                    this.setState(
                        result[0]['history'][
                            moment().subtract(1, 'day').format('YYYY-MM-DD')
                        ]
                    )
                    this.setState({ hashrate: this.state.hashrate * 1000000 })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    getConversion = () => {
        fetch('https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD')
            .then((res) => res.json())
            .then((result) => {
                this.setState(result),
                    (error) => {
                        console.log(error)
                    }
            })
    }

    hashrateChange = (event) => {
        this.setState({ minerHashrate: event.target.value })
    }

    render() {
        return (
            <div>
                <div ref={this.vantaRef} className="vh-100">
                    <div className={Style.TitleDiv}>
                        <h1 className="text-white">
                            <strong>
                                The World’s First Fortune-Mining Pool.
                            </strong>
                        </h1>
                        <h1 className="text-white">
                            <strong>Made for Monero.</strong>
                        </h1>
                        <Row className="ml-5 pl-3">
                            <WhiteLink to={ROUTES.SIGN_UP}>
                                <LightButton pill size="lg" className="mr-2">
                                    Get Started
                                </LightButton>
                            </WhiteLink>
                            <BlueLink to={ROUTES.DASHBOARD}>
                                <LightSecondaryButton pill size="lg">
                                    Log In
                                </LightSecondaryButton>
                            </BlueLink>
                        </Row>
                    </div>
                </div>

                <Container>
                    <Video />
                </Container>
                <Compare
                    minerHashrate={this.state.minerHashrate}
                    hashrate={this.state.hashrate}
                    usd={this.state.USD}
                    reward={this.state.reward}
                    handleChange={this.hashrateChange}
                />
                <Container>
                    <Timeline />
                    <Faq />
                    {/* <Jumbotron className="mt-5">
            <div ref={(el) => this.el = el} className={Style.mailingForm} />
          </Jumbotron> */}
                </Container>
            </div>
        )
    }
}

const Video = () => (
    <div style={{ paddingTop: 60, paddingBottom: 100 }}>
        <h3 className={Style.Title}>
            What It's All About
            <small>
                <small className="text-muted"> (3:07)</small>
            </small>
        </h3>
        <Jumbotron className="p-3">
            <ResponsiveEmbed aspectRatio="16by9">
                <iframe
                    src="https://www.youtube.com/embed/U0uYO3xVTDU"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </ResponsiveEmbed>
        </Jumbotron>
    </div>
)

const Compare = (props) => {
    let poorProfit = +(
        (props.minerHashrate / props.hashrate) *
        props.reward *
        props.usd *
        21600
    ).toFixed(2)

    let richProfit = +(props.reward * props.usd).toFixed(2)
    let chartData = [
        { name: 'Monero', amt: poorProfit },
        { name: 'Myriade', amt: richProfit },
    ]

    return (
        <div
            style={{
                backgroundColor: '#031D3C',
                paddingTop: 120,
                paddingBottom: 120,
            }}
        >
            <Container>
                <Row>
                    <Col md={6}>
                        <div
                            style={{ color: '#4689D6' }}
                            className={Style.medium + ' pb-3'}
                        >
                            Fortune mine with confidence
                        </div>
                        <h1 style={{ color: 'white' }} className="pb-4">
                            <strong>Maximize</strong> your pool mining profits
                        </h1>
                        <div
                            style={{ color: 'white' }}
                            className={Style.medium + ' pb-3'}
                        >
                            As of {moment().format('MMMM Do')}, your computer
                            can mine around ${poorProfit} USD/month. With
                            Myriade, you could make up to the entire block
                            reward of ${richProfit}
                            USD/month.
                        </div>
                        <div
                            style={{ color: 'white' }}
                            className={Style.medium + ' pb-3 d-flex'}
                        >
                            <div>Your hashrate: </div>
                            <input
                                type="number"
                                value={props.minerHashrate}
                                onChange={props.handleChange}
                                className={Style.transparentInputDark}
                            />
                            <div> H/s</div>
                        </div>
                        <WhiteLink to={ROUTES.SIGN_UP}>
                            <DarkGradientButton pill>
                                Get Started
                            </DarkGradientButton>
                        </WhiteLink>
                    </Col>
                    <Col md={6}>
                        <div
                            style={{
                                width: '100%',
                                height: 400,
                            }}
                        >
                            <ResponsiveContainer>
                                <BarChart
                                    data={chartData}
                                    margin={{
                                        top: 75,
                                        bottom: 5,
                                        right: 20,
                                    }}
                                >
                                    <XAxis
                                        dataKey="name"
                                        tickLine={false}
                                        tick={{
                                            fontFamily: 'poppins',
                                            fill: 'white',
                                        }}
                                        stroke="white"
                                    />
                                    <YAxis
                                        tickLine={false}
                                        tick={false}
                                        stroke="white"
                                    />
                                    <Tooltip
                                        cursor={false}
                                        formatter={(value, name, props) => {
                                            return ['$' + value, 'Profit']
                                        }}
                                    />
                                    <defs>
                                        <linearGradient
                                            id="colorUv"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="100%"
                                            spreadMethod="reflect"
                                        >
                                            <stop
                                                offset="0"
                                                stopColor="#D732C6"
                                            />
                                            <stop
                                                offset="1"
                                                stopColor="#5EBAFC"
                                            />
                                        </linearGradient>
                                    </defs>
                                    <Bar
                                        dataKey="amt"
                                        fill="url(#colorUv)"
                                        barSize={50}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const Timeline = () => (
    <div
        className={Style.timeline}
        style={{ paddingBottom: 60, paddingTop: 120 }}
    >
        <h3 className={Style.Title + ' mb-4'}>How Myriade Works</h3>
        <Row className={Style.timeline__row}>
            <Col sm={6} xl={4} className={Style.timeline__left}>
                <img
                    className={Style.timeline__image}
                    src="https://i.ibb.co/WgcH6cz/Step-1.png"
                />
                <span className={Style.timeline__bullet} />
            </Col>
            <Col sm={6} xl={8} className={Style.timeline__right}>
                <div>
                    <p className={Style.greyText}>Step 1</p>
                    <p className={Style.mediumSemibold}>
                        Create a secure account and download the miner
                    </p>

                    <p>
                        Once your account is created, you’ll be able to log in
                        on multiple devices and start mining to one account. The
                        Miner is a rather complicated program to initialize so
                        we have included video and text tutorials for Windows,
                        Linux, and Mac miners.
                    </p>
                </div>
            </Col>
        </Row>
        <Row className={Style.timeline__row}>
            <Col sm={6} xl={4} className={Style.timeline__left}>
                <img
                    className={Style.timeline__image}
                    src="https://i.ibb.co/qJff9PF/Step-2.png"
                />
                <span className={Style.timeline__bullet} />
            </Col>
            <Col sm={6} xl={8} className={Style.timeline__right}>
                <p className={Style.greyText}>Step 2</p>
                <p className={Style.mediumSemibold}>Start mining</p>
                <p>
                    Users have the option of background or focus mining to earn
                    Mining Credits. Focus mining is the recommended method when
                    mining overnight or while away from the computer. Just set
                    it and forget it.
                </p>
            </Col>
        </Row>
        <Row className={Style.timeline__row}>
            <Col sm={6} xl={4} className={Style.timeline__left}>
                <img
                    className={Style.timeline__image}
                    src="https://i.ibb.co/dgppq2S/Step-3.png"
                />
                <span className={Style.timeline__bullet} />
            </Col>
            <Col sm={6} xl={8} className={Style.timeline__right}>
                <p className={Style.greyText}>Step 3</p>
                <p className={Style.mediumSemibold}>Use your Mining Credits</p>
                <p>
                    Once a fair amount of Mining Credits have been accumulated,
                    you can use them in our game room where you can win far more
                    XMR than you would have otherwise been able to while mining
                    solo or in a pool.
                </p>
            </Col>
        </Row>
        <Row className={Style.timeline__row}>
            <Col sm={6} xl={4} className={Style.timeline__leftLast}>
                <img
                    className={Style.timeline__image}
                    src="https://i.ibb.co/dbr0x1W/Step-4.png"
                />
                <span className={Style.timeline__bullet} />
            </Col>
            <Col sm={6} xl={8} className={Style.timeline__rightLast}>
                <p className={Style.greyText}>Step 4</p>
                <p className={Style.mediumSemibold}>
                    Withdraw your hard earned Monero
                </p>
                <p>
                    Not your keys, not your crypto. We make onboarding easy for
                    beginners, by making your Monero address an optional field
                    on account setup. If you did not provide an address at
                    setup, you can also withdraw at any time to the Monero
                    wallet of your choice using our withdrawals page.
                </p>
            </Col>
        </Row>
    </div>
)

const Faq = () => (
    <div className="pt-5 pb-5">
        <h3 className={Style.Title}>Frequently Asked Questions</h3>
        <Accordion>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className={Style.faqToggle}
                >
                    <Card.Title>What is Myriade?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" className={Style.faqCollapse}>
                    <Card.Body>
                        Myriade is a crypto asset service company that is for
                        the moment focusing on mining, specifically: Monero
                        (XMR). Though look out, we plan on offering other
                        services in the near future.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    className={Style.faqToggle}
                >
                    <Card.Title>
                        So... You’re a mining pool... we have plenty of those
                        already.
                    </Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1" className={Style.faqCollapse}>
                    <Card.Body>
                        What sets us apart from traditional mining pools is our
                        novel payout method. Rather than using classic systems
                        such as PPS and PPLNS, we’re using something completely
                        different. Something we call: Fortune Mining.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="2"
                    className={Style.faqToggle}
                >
                    <Card.Title>How does Fortune Mining work?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2" className={Style.faqCollapse}>
                    <Card.Body>
                        When you sign in and mine on the Myriade mining pools,
                        your account will be credited in Mining Credits (MC),
                        which are proportionally distributed based off your
                        hashing power (similar to current mining pools). To be
                        clear. MCs are NOT a crypto asset in any way, shape, or
                        form. It does not have a set value, it is not mineable.
                        You will be mining on the Monero network, and there will
                        be no scenario where you would be able to pull MC out to
                        an exchange or use it anywhere other than the Myriade
                        ecosystem. Instead, think of MC like tokens at an arcade
                        or credit card rebate points that are exclusively
                        redeemable here.{' '}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="3"
                    className={Style.faqToggle}
                >
                    <Card.Title>Why Fortune Mining?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3" className={Style.faqCollapse}>
                    <Card.Body>
                        The goal of Myriade’s Fortune Mining system is to create
                        value from personal gaming computers that aren’t being
                        used during downtime. Myriade allows gamers and people
                        with spare hashing power laying around to put their old
                        and unused devices to use, by creating a potentially
                        profitable means of earning Monero.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="4"
                    className={Style.faqToggle}
                >
                    <Card.Title>What is MC used for?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4" className={Style.faqCollapse}>
                    <Card.Body>
                        We invite you to create an account, if anything, just to
                        see how the service works. You’ll see that MC can be
                        used in the game room, where you can stake them for the
                        chance to win Monero in a “raffle type game”. For
                        example, for one day’s worth of mining on a CPU that
                        would normally earn you $0.13 USD /day of XMR, you could
                        instead walk out with a full block reward, cash out, and
                        never touch Myriade again.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="5"
                    className={Style.faqToggle}
                >
                    <Card.Title>How does Myriade make money?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5" className={Style.faqCollapse}>
                    <Card.Body>
                        For the moment, we only have one game in our game room
                        so we will focus on that. The drawings happen in 4
                        stages: Creation, Funding, Profit, and Execution. We
                        make our money in the profit stage. The creation stage
                        is where we determine the amount of XMR that will be in
                        play based off the current price of XMR/USD. The price
                        will then be frozen for the remaining life of that
                        drawing, no matter how the market may fluctuate. Then
                        comes the funding stage. This is where people can start
                        purchasing tickets with MC for the drawing. Once the
                        amount of MC in the drawing has reached the point where
                        it is fully funded, then we enter the profit stage. The
                        profit stage lasts 20 minutes and the tickets will cost
                        more MC to purchase. Purchasing a ticket during the
                        profit stage is generally for the people who do not want
                        to wait however long it takes the other drawings to
                        become funded. Finally, execution: this is where a
                        winner is chosen and their Myriade account is credited
                        with XMR.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="6"
                    className={Style.faqToggle}
                >
                    <Card.Title>Are there any special events?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6" className={Style.faqCollapse}>
                    <Card.Body>
                        We plan on having many special events where there will
                        be huge jackpots that will be on a timer and will not
                        require the drawing to be fully funded. Theoretically,
                        you can buy 1 ticket, and if no one else plays against
                        you then you will be the only winner. The way that we do
                        this is by giving everyone a little bit less MC so we
                        can store up big pools of XMR which we will be giving
                        out either in big jackpot prizes, or by giving users
                        small amounts of XMR randomly throughout their time
                        mining just to say thank you for using Myriade.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="7"
                    className={Style.faqToggle}
                >
                    <Card.Title>Who is this for?</Card.Title>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7" className={Style.faqCollapse}>
                    <Card.Body>
                        Myriade is for the people who don’t have a full time
                        mining rig (though those who do are also welcome) it’s
                        for people who truly believe in the project and want to
                        contribute any way they can. Before Myriade, the only
                        way to do that was to either solo mine and have a low
                        chance to win the whole block reward or mine in a pool
                        and earn $4.18 /month of 24/7 mining (Intel I7-7700k,
                        Dec 28 2019). The fact is: we’ve seen so many reddit
                        posts where people ask “can I mine profitably with CPU
                        X,Y,Z?” The responses are usually: no and that if they
                        want Monero, they should just buy it instead. That
                        doesn’t really follow with the Monero ethos of
                        decentralisation. Now, with Myriade, that’s no longer
                        true. So, who is Myriade for? Honestly, we made the
                        service for ourselves since it’s something we would want
                        to use and we think you all would like it too.
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
)

export default LandingBody
