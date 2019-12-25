import React, { Component } from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { Alert } from 'shards-react';

import axios from 'axios';


class GameroomComponent extends Component {
    render() {
        return (
            <Container>
                <h1>Game Room</h1>
                <Alert theme='danger'>
                    Our game room is currently under construction, we will notify you as soon as it is completed.
                </Alert>
            </Container>

        )
    }
}

export default GameroomComponent;
