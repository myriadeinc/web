import React, { Component } from 'react';
import { Card, CardColumns, Button, Modal, Form, Row, Col, ButtonToolbar } from 'react-bootstrap';

function GameCardModal(props) {
    let listings = props.options.map((listing, index) =>
        <Button key={index} variant="secondary" className="m-1">
            <p>{listing.usd}</p>
            <p>{listing.monero}</p>
            <p>{listing.min}</p>
        </Button>
    )

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Make a Bet
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Choose a Drawing</h4>
                <p>
                    Select which drawing you would like to participate in. Each drawing is for a specific US$ amount prize,
                    and costs a set amount of Monero. There is a minimum amount of Myriade Credits required to participate.
                     Know your limits and play within them!
                </p>
                <Row noGutters>
                    <Col xs={12} sm={8}>
                        <ButtonToolbar>
                            {listings}
                        </ButtonToolbar>
                    </Col>
                    <Col xs={12} sm={4}>
                        <p>X USD</p>
                        <p>X Monero</p>
                        <p>X Minutes remaining</p>
                        <p>X MC Staked</p>
                        <Form.Label>Number of Tickets</Form.Label>
                        <Form.Control type="number" value="1" placeholder="Password" />
                        <Button variant="success">Comfirm</Button>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GameCard() {
    const [modalShow, setModalShow] = React.useState(false);
    const listings = [
        {
            usd: 1,
            monero: 0.008,
            min: 0
        },
        {
            usd: 5,
            monero: 0.008,
            min: 4000
        },
        {
            usd: 10,
            monero: 0.080,
            min: 8000
        },
        {
            usd: 20,
            monero: 0.160,
            min: 12000
        },
        {
            usd: 50,
            monero: 0.400,
            min: 18000
        },
        {
            usd: 100,
            monero: 0.800,
            min: 22000
        },
        {
            usd: 1,
            monero: 0.008,
            min: 0
        },
    ]

    return (
        <Card onClick={() => setModalShow(true)}>
            {/*TODO: Change placholder images*/}
            <Card.Img variant="top" src="https://media.swncdn.com/cms/CW/faith/13189-Lottery1.1200w.tn.jpg" />
            <Card.Body>
                <Card.Title>Drawings</Card.Title>
                <Card.Text>
                    Participate in the daily lottery to win some XMR.
                </Card.Text>
            </Card.Body>
            <GameCardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                options={listings}
            />
        </Card>
    );
}

class GameroomComponent extends Component {
    render() {
        return (
            <div className="h-100 w-100 d-flex flex-column p-5">
                <h1>Game Room</h1>
                <CardColumns>
                    <GameCard />
                    <Card>
                        <Card.Img variant="top" src="http://www.datawaregames.com/graphics2/mg02scr.gif" />
                        <Card.Body>
                            <Card.Title>Grid</Card.Title>
                            <Card.Text>
                                Guess one of 25 cells for a chance to pick the prize cell.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}

export default GameroomComponent;
