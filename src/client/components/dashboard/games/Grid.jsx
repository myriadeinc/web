import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Alert } from 'shards-react';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h3>Grid Game</h3>
                <Alert theme='danger'>
                    Our grid game is currently under construction, we will notify you as soon as it is completed.
                 </Alert>
                <Button onClick={this.goBack}>Back to Gameroom</Button>
            </div>
        );
    }
}

export default Grid;