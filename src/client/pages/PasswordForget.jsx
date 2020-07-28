import React, { Component } from 'react'

import { Container, Row } from 'react-bootstrap'
import {
    Card,
    CardBody,
    CardFooter,
    Form,
    FormInput,
    FormGroup,
    Alert,
} from 'shards-react'
import { PrimaryButton } from '../components/common/Buttons.jsx'

import axios from 'axios'
import config from '../utils/config.js'
import { Redirect, Link } from 'react-router-dom'

import PageStyle from '../styles/pages/Login.less'
import * as ROUTES from '../utils/routes.js'

var qs = require('qs')

class PasswordForget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email_sent: false,
            error: null,
            reset_step: false,
            token: null,
            email: null,
            complete: false,
        }
    }

    componentWillMount() {
        // Grab token if it is a redirect
        const token_string = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        }).token
        const email_string = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        }).email
        this.setState({ email: email_string, token: token_string })
        let valid_char = /^[A-Z]+$/

        if (token_string && token_string.match(valid_char) && email_string) {
            this.setState({
                reset_step: true,
                token: token_string,
            })
        } else if (token_string) {
            this.setState({
                error: 'Invalid password reset URL',
            })
        }
    }

    sendEmail = (e) => {
        e.preventDefault()
        const email = e.target.elements.email.value
        axios
            .post(`${config.identity_service_url}/v1/email/reset`, {
                email,
            })
            .then((resp) => {
                this.setState({ email_sent: true })
                console.dir(resp.data)
            })
            .catch((err) => {
                this.setState({
                    error:
                        'Failed to send email confirmation, please double check your email address',
                })
            })
    }

    resetPassword = (e) => {
        e.preventDefault()
        const email = this.state.email
        const token = this.state.token
        const password = e.target.elements.newPassword.value
        const confirmPassword = e.target.elements.confirmPassword.value
        if (password !== confirmPassword) {
            this.setState({ error: 'Passwords do not match' })
        } else {
            axios
                .post(`${config.identity_service_url}/v1/account/reset`, {
                    email,
                    token,
                    password,
                })
                .then((resp) => {
                    if (resp.status == 200) {
                        this.setState({
                            complete: true,
                        })
                    } else {
                        this.setState({
                            error:
                                'Failed to reset your password, please check your inputs and try again',
                        })
                    }
                })
                .catch((err) => {
                    this.setState({
                        error:
                            'Failed to reset your password, please check your inputs and try again',
                    })
                })
        }
    }

    dismissError = () => {
        this.setState({ error: null })
    }

    render() {
        if (this.props.authenticated) {
            return <Redirect to={ROUTES.DASHBOARD} />
        } else if (this.state.complete) {
            return <Redirect to={ROUTES.LOGIN} />
        } else {
            return (
                <Container>
                    {this.state.error && (
                        <Alert theme="danger" dismissible={this.dismissError}>
                            {this.state.error}
                        </Alert>
                    )}
                    <Row className={' justify-content-center'}>
                        <Card className={PageStyle.LoginCard}>
                            {this.state.reset_step ? (
                                <CardBody>
                                    <h3>Reset Password</h3>
                                    <p>Enter and comfirm your new password.</p>
                                    <Form onSubmit={this.resetPassword}>
                                        <FormGroup>
                                            <label>New Password</label>
                                            <FormInput
                                                type="password"
                                                name="newPassword"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <label>Confirm Password</label>
                                            <FormInput
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                            />
                                        </FormGroup>
                                        <PrimaryButton pill type="submit">
                                            Submit &rarr;
                                        </PrimaryButton>
                                    </Form>
                                </CardBody>
                            ) : (
                                <CardBody>
                                    <h3>Forgot Password</h3>
                                    {this.state.email_sent ? (
                                        <p>
                                            Reset email sent! Please check your
                                            inbox.
                                        </p>
                                    ) : (
                                        <div>
                                            <p>
                                                Enter your email to recieve to
                                                reset your password.
                                            </p>
                                            <Form onSubmit={this.sendEmail}>
                                                <FormGroup>
                                                    <label htmlFor="#email">
                                                        Email
                                                    </label>
                                                    <FormInput
                                                        name="email"
                                                        placeholder="john@example.com"
                                                        autoComplete="email"
                                                    />
                                                </FormGroup>
                                                <PrimaryButton
                                                    pill
                                                    type="submit"
                                                >
                                                    Submit &rarr;
                                                </PrimaryButton>
                                            </Form>
                                        </div>
                                    )}
                                </CardBody>
                            )}
                            <CardFooter>
                                Don't have a Myriade account? Sign up{' '}
                                <Link to={ROUTES.SIGN_UP}> here</Link>{' '}
                            </CardFooter>
                        </Card>
                    </Row>
                </Container>
            )
        }
    }
}

export default PasswordForget
