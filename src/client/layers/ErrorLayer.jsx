import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
                <div>
                    <h1>Congratulations.</h1>
                    <h2>You broke it.</h2>
                    <p>This page does not exist or some other horrible error has occured.</p>
                    <p>Try <Link to='/'>this link</Link> to go back to the homepage.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundaryLayer;