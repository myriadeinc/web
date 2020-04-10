import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormControl, ButtonToolbar, ButtonGroup, Row, Col, Table, ListGroup, Card, CardColumns, Badge } from 'react-bootstrap';
import { Container } from 'shards-react';

import Style from '../../../styles/components/dashboard/Gameroom.less';
import { MinerConsumer } from '../../../pages/Dashboard.jsx';
import { gqlRaffles } from '../../../utils/graphql.js'

import * as tempData from './api.json';

import { gql } from 'apollo-boost';
import { formatMoney } from 'accounting-js'


//TODO: Connect with endpoint
const EXPIRYTHRESHOLD = 1000 * 60 * 60 * 24 * 30; // The theshold at which any raffle x miliseconds in the future is considered to not have an expiry
const raffle = tempData.raffles;
const puchasedTickets = tempData.miner.raffles;

class Raffle extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.countdown = this.countdown.bind(this);
    this.state = {
      modalShow: false,
      setModalShow: false,
      drawOption: 0,
      tickets: 1,
      countdownString: [],
      raffle: null,
      raffleCloses: [],
      error: null
    };
  }

  componentDidMount() {
    gqlRaffles.query({
      query: gql`
        {
          myriade_alpha_raffles {
            exchange_rate
            expiry_date
            prize
            status
            base_price
          }
        }
      `
    }).then(({ data }) => {
      let raffleData = data.myriade_alpha_raffles;
      console.log(raffleData);
      const dateUnix = raffleData.map((data) => {
        let d = new Date(data.expiry_date);
        if ((d - (new Date)) < EXPIRYTHRESHOLD) {
          return d.getTime();
        }
        return -1;
      });
      this.setState({
        raffle: raffleData,
        raffleCloses: dateUnix
      })
    }).catch(err => {
      console.log(err)
      this.setState({
        error: 'Unable to fetch your data, please check your connection, your login and try again later'
      });
    })

    this.countdownTimer = setInterval(
      () => this.countdown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimer);
  }

  handleClose = () => this.setState({ modalShow: false });
  handleShow = () => this.setState({ modalShow: true });

  selectOption(i) {
    this.setState({ drawOption: i });
  }
  updateTicketNum(e) {
    this.setState({ tickets: e.target.value })
  }

  goBack() {
    this.props.history.goBack();
  }

  countdown() {
    let cds = {};
    this.state.raffleCloses.map((value, index) => {
      if (value === -1) {
        cds[index] = "-";
      } else {
        let countDownDate = value;
        // Get today's date and time
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        cds[index] = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        // If the count down is over, write some text 
        if (distance < 0) {
          cds[index] = "EXPIRED";
        }
      }
    });
    this.setState({ countdownString: cds });
    //console.log(cds);
    //console.log(this.state.countdownString);
  }

  render() {
    let purchaseButtons, drawingCards;
    if (this.state.raffle) {
      purchaseButtons = this.state.raffle.map((value, index) =>
        <ButtonGroup className="m-2" key={index}>
          <Button variant="outline-primary" size="lg" onClick={() => this.selectOption(index)}>
            ${value.prize * value.exchange_rate} USD
          </Button>
        </ButtonGroup>
      );

      drawingCards = this.state.raffle.map((value, index) => {
        let badge;
        if (value.status === 1) {
          badge = <Badge variant="warning">Funding</Badge>;
        } else if (value.status === 1) {
          badge = <Badge variant="success">Funded!</Badge>;
        } else {
          if (value.status === 0 || this.state.countdownString[index] === "EXPIRED") {
            badge = <Badge variant="secondary">Expired</Badge>;
          }
        }

        return (
          <Card key={index}>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{formatMoney(value.prize * value.exchange_rate)}USD</Card.Title>
                </Col>
                <Col md="auto">
                  <Card.Title>{badge}</Card.Title>
                </Col>
              </Row>
              <Card.Subtitle className="mb-2 text-muted"><i className="fab fa-monero" /> {value.prize}XMR</Card.Subtitle>
              <Card.Text>
                Ticket price: {value.base_price}MC
          </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Closes in: {this.state.countdownString[index]}</small>
            </Card.Footer>
          </Card >
        );
      });

    } else {
      purchaseButtons = <h5>Loading purchase options...</h5>
      drawingCards = <h5>Loading drawing info...</h5>
    }

    let ticketList = puchasedTickets.tickets.map((value, index) => {
      let p = new Date(value.purchased * 1000);
      let purchaseDate = p.getUTCFullYear() + "/" + (p.getUTCMonth() + 1) + "/" + p.getUTCDate() + " " + p.getUTCHours() + ":" + p.getUTCMinutes() + ":" + p.getUTCSeconds();
      let e = new Date(value.expiry * 1000);
      let expiryDate = e.getUTCFullYear() + "/" + (e.getUTCMonth() + 1) + "/" + e.getUTCDate() + " " + e.getUTCHours() + ":" + e.getUTCMinutes() + ":" + e.getUTCSeconds();
      let status = value.status;

      return (
        <tr key={index}>
          <td>{"$" + value.usd}</td>
          <td>{purchaseDate}</td>
          <td>{status}</td>
          <td>{expiryDate}</td>
        </tr>
      );
    });

    return (
      <MinerConsumer>
        {(miner) => (
          <div>
            <Row>
              <Col>
                <h3 className={Style.orange}>Weekly Raffle Drawings</h3>
              </Col>
              <Col md="auto">
                <Button onClick={this.goBack}>Back to Gameroom</Button>
              </Col>
            </Row>
            <p>Participate in weekly draws to take a part in winning the group block award. Spend Mining Credits to buy tickets for XMR pot prizes.</p>

            <Container className={Style.Scrollbox + " mb-4"}>
              <h4>Current Drawings</h4>
              <CardColumns>
                {drawingCards}
              </CardColumns>

              <h4>Your tickets</h4>
              {puchasedTickets.tickets.length ?
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Prize Amount (USD)</th>
                      <th>Purchase Time (UTC)</th>
                      <th>Status</th>
                      <th>Raffle Draw Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ticketList}
                  </tbody>
                </Table>
                :
                <p>You don't have any tickets :/</p>
              }
              <ListGroup horizontal>
                <ListGroup.Item variant="success">Raffle wins: {formatMoney(puchasedTickets.wins.usd)}USD</ListGroup.Item>
                <ListGroup.Item variant="warning">MC spent: {puchasedTickets.spent.mc}MC</ListGroup.Item>
              </ListGroup>
            </Container>

            <Row>
              <Button size="lg" onClick={this.handleShow}>Buy Tickets!</Button>
            </Row>
            <Modal centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Game Drawings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Choose your drawing amount. Please play responsibly.</p>
                <ButtonToolbar className="mb-2">
                  {purchaseButtons}
                </ButtonToolbar>
                {this.state.raffles ?
                  <div>
                    <h4>
                      <small class="text-muted">Drawing Amount:</small>
                      {formatMoney(this.state.raffle[this.state.drawOption].prize * this.state.raffle[this.state.drawOption].exchange_rate)}USD
                      <small class="text-muted">({this.state.raffle[this.state.drawOption].prize}XMR)</small>
                    </h4>
                    <h4><small class="text-muted">Ticket Price:</small> {this.state.raffle[this.state.drawOption].price}MC</h4>
                    <h4><small class="text-muted">Minutes Remaining:</small></h4>
                    <Row className="justify-content-md-center mb-2">
                      <Col md="6">
                        <h4><small class="text-muted">Tickets:</small></h4>
                      </Col>
                      <Col md="6">
                        <InputGroup clasName="w-25">
                          <FormControl defaultValue={this.state.tickets} type="number" min="1" max="10" onChange={this.updateTicketNum.bind(this)} />
                        </InputGroup>
                      </Col>
                    </Row>
                    <h3>
                      <small class="text-muted">Total Price: </small>
                      {this.state.raffle[this.state.drawOption].price * this.state.tickets}MC
                    </h3>
                  </div>
                  : <h4>No purchase options available :/</h4>
                }


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Cancel
            </Button>
                <Button variant="primary" onClick={this.handleClose}>
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

export default Raffle;