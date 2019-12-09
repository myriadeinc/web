import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';

class ErrorBoundaryLayer extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static handleFetchResponse(res) {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res;
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Row>
                        <h1>Oops... Something went wrong!</h1>

                        <p>This page does not exist or some other error has occured on our end. ¯\_(ツ)_/¯ </p>
                        <p>We are terribly sorry for the inconvenience, please try again later, if this issue persists, feel free to e-mail support at dev@myriade.io to report this.</p>
                        <p><Link to='/'>Go back to homepage</Link></p>
                    </Row>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundaryLayer;