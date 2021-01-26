import React, { Component, useState } from 'react'
import {
    Container,
    Jumbotron,
    Form,
    Button,
    Row,
    Col,
    Spinner,
} from 'react-bootstrap'
import { MinerConsumer } from '../../pages/Dashboard.jsx'

//TODO: Create a customm email endpoint instead
import emailjs from 'emailjs-com'

class Withdraw extends Component {
    constructor(props) {
        super(props)
        this.withdraw = this.withdraw.bind(this)
        this.goBack = this.goBack.bind(this)
        this.withdrawForm = this.withdrawForm.bind(this)

        this.state = {
            useCurrent: false,
            formValid: false,
            confirmScreen: false,
            withdrawing: false,
            amount: 0,
            wallet: '',
            accountWallet: false,
            defaultAddress:
                '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A',
        }
    }

    withdraw(e) {
        e.preventDefault()
        this.setState({ withdrawing: true })
        let templateParams = {
            minerName: this.state.minerName,
            minerEmail: this.state.minerEmail,
            amount: this.state.amount,
            wallet: this.state.wallet,
        }
        emailjs
            .send(
                'myriade',
                'myriade_checkout',
                templateParams,
                'user_mW0DdzT5qaDfThP4Nyd3E'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    goBack() {
        this.setState({ confirmScreen: false })
    }

    withdrawForm(miner) {
        const [validated, setValidated] = useState(false)

        const handleSubmit = (event) => {
            event.preventDefault()

            const form = event.currentTarget
            if (form.checkValidity() === false) {
                event.stopPropagation()
            } else {
                this.setState({ confirmScreen: true })
                this.setState({ minerName: miner.miner.name })
                this.setState({ minerEmail: miner.miner.email })
                this.setState({ amount: miner.miner.monero_balance })
            }

            setValidated(true)
        }

        const changeHandler = (event) => {
            this.setState({ [event.target.name]: event.target.value })
        }

        const checkBoxHandler = (event) => {
            this.setState({ [event.target.name]: event.target.checked })
        }

        return (
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>XMR Amount</Form.Label>
                    <Row>
                        <Col>
                            <strong>{miner.miner.monero_balance} XMR</strong>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Monero Wallet Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="wallet"
                        placeholder="e.g. 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A"
                        required
                        value={
                            this.state.accountWallet
                                ? miner.miner.monero_wallet
                                : this.state.wallet
                        }
                        onChange={changeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid wallet address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Use the wallet address I signed up with"
                        name="accountWallet"
                        disabled={miner.miner.monero_wallet == null}
                        onChange={checkBoxHandler}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Withdraw
                </Button>
            </Form>
        )
    }

    render() {
        return (
            <Container className="pt-4">
                <h3>Withdraw your XMR</h3>
                <p>
                    There is no minimum XMR balance for withdrawals. Please note
                    that our withdrawal process is manual for now.
                </p>
                <Jumbotron fluid className="mt-5">
                    <Container>
                        {this.state.withdrawing ? (
                            <div>
                                <p>
                                    Our team is busy processing your request!
                                    Please note that this feature is currently
                                    done by manual review.
                                </p>
                                <Spinner animation="grow" variant="primary" />
                            </div>
                        ) : this.state.confirmScreen ? (
                            <Form onSubmit={this.withdraw}>
                                <p>
                                    I am about to request to withdraw{' '}
                                    {this.state.amount} XMR from my account. I
                                    know that this is a manual process and it
                                    may take a few hours for my request to be
                                    processed.
                                </p>
                                <Row>
                                    <Col>
                                        <Button
                                            variant="primary"
                                            onClick={this.goBack}
                                        >
                                            Cancel
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary" type="submit">
                                            Confirm
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        ) : (
                            <MinerConsumer>
                                {(miner) => <this.withdrawForm miner={miner} />}
                            </MinerConsumer>
                        )}
                    </Container>
                </Jumbotron>
            </Container>
        )
    }
}

export default Withdraw
