import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../utils/config.js';
import moment from 'moment';

import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Table,
  Card,
  ProgressBar,
  Tabs,
  Tab,
  CardDeck,
} from 'react-bootstrap';
import { Container, Alert } from 'shards-react';

import Style from '../../../styles/components/dashboard/Gameroom.less';
import { MinerConsumer } from '../../../pages/Dashboard.jsx';
import { formatMoney } from 'accounting-js';

//TODO: Connect with endpoint
const EXPIRYTHRESHOLD = 1000 * 60 * 60 * 24 * 30; // The theshold at which any raffle x miliseconds in the future is considered to not have an expiry
// const raffle = tempData.raffles
// const purchasedTickets = tempData.miner.raffles

class GiftCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      setModalShow: false,
      drawOption: 0,
      tickets: 1,
      purchasedTickets: [],
      countdownString: [],
      raffle: null,
      error: null,
      USD: 121.36,
      success: null,
    };

    this.validateRaffle = this.validateRaffle.bind(this);
    this.updateTicketNum = this.updateTicketNum.bind(this);
  }

  displaySuccess() {
    return (
      <Alert
        theme="success"
        dismissible={() => this.setState({ success: null })}
      >
        {this.state.success}
      </Alert>
    );
  }

  componentDidMount() {
    axios
      .get(`${config.miner_metrics_url}/v1/eventContent/active`)
      .then((response) => {
        this.setState({ raffle: response.data });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        return this.setState({
          error:
            'Unable to fetch your data, please check your connection, your login and try again later',
        });
      });

    axios
      .get(`${config.miner_metrics_url}/v1/credits/allEvents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      .then((response) => {
        this.setState({
          purchasedTickets: this.getHistory(response.data),
        });
      })
      .catch((error) => {
        console.error('There was an error!', error);
        return this.setState({
          error:
            'Unable to fetch your data, please check your connection, your login and try again later',
        });
      });

    axios
      .get(`https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD`)
      .then((response) => {
        this.setState(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });

    this.countdownTimer = setInterval(() => this.countdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
  }

  getHistory(purchasedTickets) {
    const historyMap = {};
    const history = [];

    purchasedTickets.forEach((entry) => {
      let cur = historyMap[entry.contentId];
      if (cur) {
        cur.tickets += entry.tickets;
        cur.purchased = Math.max(cur.purchased, entry.purchased);
        if (entry.status == 2) {
          cur.status = 2;
        }
      } else {
        cur = Object.assign({}, entry);
      }

      historyMap[entry.contentId] = cur;
    });

    for (const entry in historyMap) {
      history.push(historyMap[entry]);
    }

    return history;
  }

  appendPurchase(raffle) {
    const purchase = {
      id: 1,
      title: raffle.public.title,
      tickets: this.state.tickets,
      amount: raffle.public.prizeAmount,
      lockType: 10,
      eventTime: raffle.public.expiry,
      contentId: raffle.id,
      status: 1,
      purchased: new Date().getTime() / 1000,
      winner: '-',
    };

    const purchasedTickets = this.state.purchasedTickets.slice();
    purchasedTickets.push(purchase);
    this.setState({ purchasedTickets: this.getHistory(purchasedTickets) });
  }

  handleClose = (purchase, miner) => {
    this.setState({ modalShow: false });
    let component = this;

    if (purchase) {
      const raffle = this.state.raffle[this.state.drawOption];

      const options = {
        method: 'post',
        url: `${config.miner_metrics_url}/v1/credits/buy`,
        data: {
          amount: Number(this.state.tickets) * raffle.public.entryPrice,
          contentId: raffle.id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      };

      axios(options)
        .then((response) => {
          if (response.status == 200) {
            miner.myriade_credits_balance -= options.data.amount;
            miner.refresh();
            this.appendPurchase(raffle);
            component.setState({
              success: 'Ticket purchase successful!',
            });
          } else {
            return component.setState({
              error:
                'Unable to purchase the ticket, please check your connection, and try again later',
            });
          }
        })
        .catch(function (error) {
          console.error('There was an error!', error);
          return this.setState({
            error:
              'Unable to purchase the ticket, please check your connection, and try again later',
          });
        });
    }
  };

  handleShow = (i) =>
    this.setState({
      modalShow: true,
      drawOption: i,
    });

  updateTicketNum(val) {
    const tickets = val < 1 ? 0 : Math.floor(val);

    this.setState({ tickets });
  }

  countdown = () => {
    let cds = {};
    this.state.raffle.map((value, index) => {
      if (value.public.expiry === -1) {
        cds[index] = '-';
      } else {
        let countDownDate = value.public.expiry;
        // Get today's date and time
        let now = Math.floor(new Date().getTime() / 1000);
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (60 * 60 * 24));
        let hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        let minutes = Math.floor((distance % (60 * 60)) / 60);
        let seconds = Math.floor(distance % 60);

        cds[index] =
          days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
        // If the count down is over, write some text
        if (distance < 0) {
          cds[index] = 'EXPIRED';
        }
      }
    });

    this.setState({ countdownString: cds });
  };

  validateRaffle = (raffle) => {
    return (
      raffle.public &&
      raffle.public.title &&
      raffle.public.description &&
      raffle.public.entryPrice &&
      raffle.public.prizeAmount &&
      (raffle.public.expiry || raffle.public.totalTickets)
    );
  };

  render() {
    let drawingCards;
    if (this.state.raffle) {
      drawingCards = this.state.raffle.map((value, index) => {
        const type = value.public.type;

        const valid =
          this.validateRaffle(value) &&
          this.state.countdownString[index] != 'EXPIRED' &&
          type;

        const prizeAmount = value.public.prizeAmount;
        let png = 'public\\images\\blue.svg';

        if (type) {
          if (prizeAmount == 5) {
            png =
              'https://res.cloudinary.com/dtocmcjrg/image/upload/v1635478116/red_k3jxok.png';
          }

          if (prizeAmount == 10) {
            png =
              'https://res.cloudinary.com/dtocmcjrg/image/upload/v1635478116/teal_mbjzzi.png';
          }

          if (prizeAmount == 20) {
            png =
              'https://res.cloudinary.com/dtocmcjrg/image/upload/v1635478116/orange_yjk2ox.png';
          }

          if (prizeAmount == 50) {
            png =
              'https://res.cloudinary.com/dtocmcjrg/image/upload/v1635478116/green_xue8kg.png';
          }

          if (prizeAmount == 100) {
            png =
              'https://res.cloudinary.com/dtocmcjrg/image/upload/v1635478116/purple_kq4ha4.png';
          }
        }

        return (
          valid && (
            <Card
              className={Style.hoverCard}
              onClick={() => this.handleShow(index)}
              key={index}
            >
              {type && <Card.Img variant="top" src={png} />}
              <Card.Body className="pb-0">
                {!type && (
                  <>
                    <Row>
                      <Col>
                        <Card.Title>
                          {formatMoney(
                            value.public.prizeAmount * this.state.USD
                          )}
                          USD
                        </Card.Title>
                      </Col>
                      <Col md="auto">
                        <Card.Title></Card.Title>
                      </Col>
                    </Row>
                    <Card.Subtitle className="mb-2 text-muted">
                      <i className="fab fa-monero" /> {value.public.prizeAmount}
                      XMR
                    </Card.Subtitle>
                  </>
                )}
                <Card.Text className={Style.orange + ' mb-0'}>
                  {value.public.title}
                </Card.Text>
                <Card.Text>Ticket price: {value.public.entryPrice}MC</Card.Text>
              </Card.Body>
              <Card.Footer style={{ textAlign: 'center' }}>
                {value.public.totalTickets ? (
                  <>
                    <ProgressBar
                      min={0}
                      max={value.public.totalTickets}
                      now={value.public.numTickets}
                    />{' '}
                    {`${value.public.numTickets} of ${value.public.totalTickets} purchased`}
                  </>
                ) : (
                  <>
                    <ProgressBar
                      animated
                      min={0}
                      max={100}
                      now={100}
                      label={`${value.public.numTickets} tickets purchased`}
                    />
                    <small className="text-muted">
                      Closes in: {this.state.countdownString[index]}
                    </small>
                  </>
                )}
              </Card.Footer>
            </Card>
          )
        );
      });
    } else {
      drawingCards = <h5>Loading drawing info...</h5>;
    }

    let ticketListUpcoming = [];
    let ticketListExpired = [];

    this.state.purchasedTickets.forEach((value, index) => {
      let purchaseDate = moment(value.purchased * 1000).format('lll');
      let status = value.status;

      console.log(value);

      let entry = (
        <tr
          key={index}
          style={status == 2 ? { backgroundColor: '#85d088' } : {}}
        >
          <td>{value.title}</td>
          <td>{value.tickets}</td>
          <td>{value.amount + ' USD'}</td>
          <td>{purchaseDate}</td>
          <td>{value.winner}</td>
        </tr>
      );

      if (value.title.includes('Steam')) {
        if (status == 1) {
          ticketListUpcoming.push(entry);
        } else {
          ticketListExpired.push(entry);
        }
      }
    });

    return (
      <MinerConsumer>
        {(miner) => (
          <div>
            {this.state.success && this.displaySuccess()}
            <Row>
              <Col>
                <h3 className={Style.orange}>Gift Card Giveaways</h3>
              </Col>
            </Row>
            <Container className="mb-4">
              <h4>Current Drawings</h4>
              <CardDeck>{drawingCards}</CardDeck>
              <br />
              <h4>History</h4>
              <Tabs defaultActiveKey="upcoming">
                <Tab eventKey="upcoming" title="Upcoming">
                  {ticketListUpcoming.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Drawing Title</th>
                          <th>Number of Tickets</th>
                          <th>Prize Amount (USD)</th>
                          <th>Last Purchased</th>
                          <th>Past Winner</th>
                        </tr>
                      </thead>
                      <tbody>{ticketListUpcoming.reverse()}</tbody>
                    </Table>
                  ) : (
                    <p>You don't have any tickets :/</p>
                  )}
                </Tab>
                <Tab eventKey="expired" title="Expired">
                  {ticketListExpired.length ? (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Drawing Title</th>
                          <th>Number of Tickets</th>
                          <th>Prize Amount (USD)</th>
                          <th>Last Purchased</th>
                          <th>Past Winner</th>
                        </tr>
                      </thead>
                      <tbody>{ticketListExpired.reverse()}</tbody>
                    </Table>
                  ) : (
                    <p> You don't have any tickets :/</p>
                  )}
                </Tab>
              </Tabs>
            </Container>

            <Modal
              centered
              show={this.state.modalShow}
              onHide={() => this.handleClose(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Ticket Purchase</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.raffle ? (
                  <div>
                    <h5>
                      <small className="text-muted">Drawing Amount: </small>
                      {formatMoney(
                        this.state.raffle[this.state.drawOption].public
                          .prizeAmount
                      )}
                      USD <small className="text-muted">Steam Gift Card</small>
                    </h5>
                    <h5>
                      <small className="text-muted">Ticket Price: </small>{' '}
                      {
                        this.state.raffle[this.state.drawOption].public
                          .entryPrice
                      }
                      MC
                    </h5>
                    <Row className="justify-content-md-center mb-2">
                      <Col md="4">
                        <h5>
                          <small className="text-muted">Tickets: </small>
                        </h5>
                      </Col>
                      <Col md="8">
                        <Button
                          size="sm"
                          className={Style.ticketButton}
                          onClick={() =>
                            this.updateTicketNum(
                              miner.myriade_credits_balance /
                                this.state.raffle[this.state.drawOption].public
                                  .entryPrice
                            )
                          }
                        >
                          Max
                        </Button>
                        <Button
                          size="sm"
                          className={Style.ticketButton}
                          onClick={() =>
                            this.updateTicketNum(
                              (0.75 * miner.myriade_credits_balance) /
                                this.state.raffle[this.state.drawOption].public
                                  .entryPrice
                            )
                          }
                        >
                          75%
                        </Button>
                        <Button
                          size="sm"
                          className={Style.ticketButton}
                          onClick={() =>
                            this.updateTicketNum(
                              (0.5 * miner.myriade_credits_balance) /
                                this.state.raffle[this.state.drawOption].public
                                  .entryPrice
                            )
                          }
                        >
                          50%
                        </Button>
                        <Button
                          size="sm"
                          className={Style.ticketButton}
                          onClick={() =>
                            this.updateTicketNum(
                              (0.25 * miner.myriade_credits_balance) /
                                this.state.raffle[this.state.drawOption].public
                                  .entryPrice
                            )
                          }
                        >
                          25%
                        </Button>
                      </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-2">
                      <Col md="12">
                        <InputGroup>
                          <FormControl
                            defaultValue={this.state.tickets}
                            value={this.state.tickets}
                            type="number"
                            min="0"
                            onChange={(e) =>
                              this.updateTicketNum(e.target.value)
                            }
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <h4>
                      <small className="text-muted">Total Price: </small>
                      {this.state.raffle[this.state.drawOption].public
                        .entryPrice * this.state.tickets}
                      MC
                    </h4>
                  </div>
                ) : (
                  <h5>No purchase options available :/</h5>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => this.handleClose(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    this.handleClose(true, miner);
                  }}
                  disabled={
                    this.state.countdownString[this.state.drawOption] ===
                    'EXPIRED'
                  }
                >
                  Confirm Purchase
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </MinerConsumer>
    );
  }
}

export default GiftCards;
