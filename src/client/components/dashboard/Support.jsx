import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Card, CardBody, CardDeck, CardTitle } from 'shards-react';
import Style from "../../styles/components/dashboard/Support.less";

class Withdraw extends Component {
    render() {
        return (
            <Container className="pt-4 h-100">
                <h3>Support</h3>
                <p>We're here to help! Got any questions, comments, or concerns? Contact us through any of these channels and we'll do our best to make it work out.</p>
                <div className="pt-5">
                    <CardDeck>
                        <a href="https://discord.gg/J9Pn7Dk" target="_blank" className={Style.link}>
                            <Card className={Style.hoverCard}>
                                <CardBody className="text-center">
                                    <i className="fab fa-discord fa-2x m-2"></i>
                                    <CardTitle>Discord</CardTitle>
                                    With over 52 members and growing!
                            </CardBody>
                            </Card>
                        </a>
                        <a href="mailto:support@myriade.io" target="_blank" className={Style.link}>
                            <Card className={Style.hoverCard}>
                                <CardBody className="text-center">
                                    <i className="fas fa-envelope fa-2x m-2"></i>
                                    <CardTitle>Email</CardTitle>
                                    Reach us directly via email.
                            </CardBody>
                            </Card>
                        </a>
                        <a href="https://www.reddit.com/r/MyriadeMining/" target="_blank" className={Style.link}>
                            <Card className={Style.hoverCard}>
                                <CardBody className="text-center">
                                    <i className="fab fa-reddit fa-2x m-2"></i>
                                    <CardTitle>Reddit</CardTitle>
                                    Check out our reddit community!
                            </CardBody>
                            </Card>
                        </a>
                    </CardDeck>
                </div>
            </Container>
        );
    }
}
export default Withdraw;