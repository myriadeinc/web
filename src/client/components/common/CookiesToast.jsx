import React, { Component } from 'react';
import { Toast, Button, Row, Col } from 'react-bootstrap';

import Style from '../../styles/components/common/Common.less';

class CookiesToast extends Component {
    constructor(props) {
        super(props);
        this.dismiss = this.dismiss.bind(this);
        this.disableCookies = this.disableCookies.bind(this);
        this.enableCookies = this.enableCookies.bind(this);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        let showPrompt = !localStorage.hasOwnProperty("allowCookies");
        setTimeout(function () {
            this.setState({ show: showPrompt });
        }.bind(this), 5000);
    }

    dismiss() {
        this.setState({ show: false })
    }

    disableCookies() {
        localStorage.setItem('allowCookies', false);
        this.dismiss();
        Console.log("disable");
    }

    enableCookies() {
        localStorage.setItem('allowCookies', true);
        this.dismiss();
        Console.log("enable");
    }

    render() {
        return (
            <Toast show={this.state.show} onClose={this.dismiss} className={Style.FixedToast}>
                <Toast.Header className={Style.ColorHeader}>
                    <i className="fas fa-cookie-bite" />
                    <strong className="mr-auto">This website uses cookeis.</strong>
                    <small>They're tasty!</small>
                </Toast.Header>
                <Toast.Body>
                    Our web app requires cookies to work properly. We use cookies to remember dashboard actions, and personalize the mining analytics we display.
                    <Row className="mt-2">
                        <Col sm="auto">
                            <Button variant="secondary" size="sm" onClick={this.disableCookies}>
                                Reject
                            </Button>
                        </Col>
                        <Col />
                        <Col sm="auto">
                            <Button variant="primary" size="sm" onClick={this.enableCookies}>
                                Accept
                            </Button>
                        </Col>
                    </Row>
                </Toast.Body>
            </Toast>
        );
    }
}

export default CookiesToast;