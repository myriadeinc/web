import React, { Component } from 'react';
import { Card, CardColumns } from 'react-bootstrap';

class GameroomComponent extends Component {
    render() {
        return (
            <div className="h-100 w-100 d-flex flex-column p-5">
                <h1>Game Room</h1>
                <CardColumns>
                    <Card>
                        {/*TODO: Change placholder images*/}
                        <Card.Img variant="top" src="https://media.swncdn.com/cms/CW/faith/13189-Lottery1.1200w.tn.jpg" />
                        <Card.Body>
                            <Card.Title>Drawings</Card.Title>
                            <Card.Text>
                                Participate in the daily lottery to win some XMR.
                        </Card.Text>
                        </Card.Body>
                    </Card>
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
