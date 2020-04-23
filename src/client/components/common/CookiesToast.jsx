import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';

import Style from '../../styles/components/common/Common.less';

class CookiesToast extends Component {
    constructor(props) {
        super(props);
        this.dismiss = this.dismiss.bind(this);
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
        localStorage.setItem('allowCookies', true);
    }

    render() {
        return (
            <>
                {this.state.show &&
                    <Toast onClose={this.dismiss} className={Style.FixedToast}>
                        <Toast.Header className={Style.ColorHeader}>
                            <i className="fas fa-cookie-bite" />
                            <strong className="mr-auto">This website uses cookies.</strong>
                            <small>They're tasty!</small>
                        </Toast.Header>
                        <Toast.Body>
                            <small>Our web app requires cookies to work properly. We use cookies to remember dashboard actions, and personalize the mining analytics we display. By continuing to use our site, you agree to our <a href="https://myriade.io/#/cookies">use of cookies</a>.</small>
                        </Toast.Body>
                    </Toast>
                }
            </>
        );
    }
}

export default CookiesToast;