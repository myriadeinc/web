import React, { Component } from 'react';
import { Card, CardColumns, Button, Modal } from 'react-bootstrap';

function GameCardModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Make a Bet</h4>
                <p>
                    Choose one of the dollar values of drawings.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GameCard() {
    const [modalShow, setModalShow] = React.useState(false);

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
