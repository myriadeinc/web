import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormControl, ButtonToolbar, ButtonGroup, Row, Col, Table, ListGroup, Card, CardColumns, Badge } from 'react-bootstrap';
import { Container } from 'shards-react';

import Style from '../../../styles/components/dashboard/Gameroom.less';
import { MinerConsumer } from '../../../pages/Dashboard.jsx';

import * as tempData from './api.json';

//TODO: Connect with endpoint
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
      countdownString: []
    };
  }

  componentDidMount() {
    this.contdownTimer = setInterval(
      () => this.countdown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.contdownTimer);
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
    raffle.map((value, index) => {
      if (value.close === -1) {
        cds[index] = "-";
      } else {
        let countDownDate = new Date(value.close * 1000).getTime();
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
    console.log(this.state.countdownString);
  }

  render() {
    let purchaseButtons = raffle.map((value, index) =>
      <ButtonGroup className="m-2" key={index}>
        <Button variant="outline-primary" size="lg" onClick={() => this.selectOption(index)}>
          ${value.usd} USD
      </Button>
      </ButtonGroup>
    );

    let drawingCards = raffle.map((value, index) => {
      let badge;
      if (value.close === -1) {
        badge = <Badge variant="warning">Funding</Badge>;
      } else {
        if (this.state.countdownString[index] === "EXPIRED") {
          badge = <Badge variant="secondary">Expired</Badge>;
        } else {
          badge = <Badge variant="success">Funded!</Badge>;
        }
      }

      return (
        <Card key={index}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title>${value.usd}USD</Card.Title>
              </Col>
              <Col md="auto">
                <Card.Title>{badge}</Card.Title>
              </Col>
            </Row>
            <Card.Subtitle className="mb-2 text-muted"><i className="fab fa-monero" /> {value.xmr}XMR</Card.Subtitle>
            <Card.Text>
              Ticket price: {value.price}MC
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Closes in: {this.state.countdownString[index]}</small>
          </Card.Footer>
        </Card >
      );
    });

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
                <ListGroup.Item variant="success">Raffle wins: ${puchasedTickets.wins.usd}USD</ListGroup.Item>
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
                <h4>
                  <small class="text-muted">Drawing Amount:</small> ${raffle[this.state.drawOption].usd}USD <small class="text-muted">({raffle[this.state.drawOption].xmr}XMR)</small>
                </h4>
                <h4><small class="text-muted">Ticket Price:</small> {raffle[this.state.drawOption].price}MC</h4>
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
                <h3><small class="text-muted">Total Price: </small>{raffle[this.state.drawOption].price * this.state.tickets}MC</h3>

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