import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormControl, ButtonToolbar, ButtonGroup, Row, Col, Table } from 'react-bootstrap';
import { Container } from 'shards-react';

import Style from '../../../styles/components/dashboard/Gameroom.less';
import { MinerConsumer } from '../../../pages/Dashboard.jsx';

import * as tempData from './api.json';

class Raffle extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.state = {
      modalShow: false,
      setModalShow: false,
      drawOption: 0,
      tickets: 1
    };
    this.drawingOptions = [
      {
        usd: 1,
        xmr: 0.008,
        price: "-",
        border: "light"
      },
      {
        usd: 5,
        xmr: 0.040,
        price: 4000
      },
      {
        usd: 10,
        xmr: 0.080,
        price: 8000
      },
      {
        usd: 20,
        xmr: 0.160,
        price: 12000
      },
      {
        usd: 50,
        xmr: 0.400,
        price: 18000
      },
      {
        usd: 100,
        xmr: 0.800,
        price: 22000
      },
      {
        usd: 262.5,
        xmr: 2.100,
        price: "-"
      },
    ];
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

  render() {
    let drawingCards = this.drawingOptions.map((value, index) =>
      <ButtonGroup className="m-2" key={index}>
        <Button variant="outline-primary" size="lg" onClick={() => this.selectOption(index)}>
          ${value.usd} USD
      </Button>
      </ButtonGroup>
    );

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

            <Container className={Style.Scrollbox}>
              <h4>Your tickets</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Container>

            <Button onClick={this.handleShow}>Buy Tickets!</Button>
            <Modal centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Game Drawings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Choose your drawing amount. Please play responsibly.</p>
                <ButtonToolbar className="mb-2">
                  {drawingCards}
                </ButtonToolbar>
                <h4>
                  <small class="text-muted">Drawing Amount:</small> ${this.drawingOptions[this.state.drawOption].usd}USD <small class="text-muted">({this.drawingOptions[this.state.drawOption].xmr}XMR)</small>
                </h4>
                <h4><small class="text-muted">Ticket Price:</small> {this.drawingOptions[this.state.drawOption].price}MC</h4>
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
                <h3><small class="text-muted">Total Price: </small>{this.drawingOptions[this.state.drawOption].price * this.state.tickets}MC</h3>

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