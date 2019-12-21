import React, { Component } from 'react';

import { Card, CardBody, Badge, Form, FormInput, FormGroup, Alert } from 'shards-react';
import { Row, Container } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import * as ROUTES from '../utils/routes.js';
import axios from 'axios';
import config from '../utils/config.js';

import PageStyle from '../styles/pages/Signup.less';

import { PrimaryButton, SecondaryButton } from '../components/common/Buttons.jsx';

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.sendEmailConfirmation = this.sendEmailConfirmation.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.createAccount = this.createAccount.bind(this);

    this.state = {
      email_confirmed: false,
      next_step: false,
      error: null,
      complete: false,
      token: null,
    }
  }

  componentWillMount() {
    // Grab token if it is a redirect
    const token_string = this.props.location.search;
    if ("" === token_string) {
      console.log('No token provided')
      return this.setState({
        next_step: false
      })
    }
    else {
      let token = token_string.slice(1).split("=")[1]
      let valid_char = /^[A-Z]+$/;
      if (token.match(valid_char)) {
        console.log(token);
        return this.setState({
          next_step: true,
          token
        })
      }
      else {
        return this.setState({
          error: "Invalid email confirmation URL"
        });
      }
    }
  }

  sendEmailConfirmation(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    axios.post(`${config.identity_service_url}/v1/email/`, {
      email
    })
      .then(() => {
        return this.setState({ email_confirmed: true });
      })
      .catch(err => {
        return this.setState({ error: "Failed to send email confirmation, please double check your email address" });
      })
  }

  createAccount(e) {
    e.preventDefault();
    const email_token = this.state.token;
    const name = e.target.elements.name.value;
    const wallet = e.target.elements.wallet.value;
    const password = e.target.elements.password.value;
    const password_confirm = e.target.elements.password_confirm.value;

    if (password !== password_confirm) {
      return this.setState({ error: "Password does not match" })
    }

    return axios.post(`${config.identity_service_url}/v1/account/create/`, {
      email_token,
      name,
      password,
      wallet_address: wallet,
    })
      .then(({ data }) => {
        return this.setState({
          complete: true
        })
      })
      .catch(err => {
        return this.setState({
          error: "Failed to create an account, please check your inputs and try again"
        })
      })
  }

  dismissError() {
    this.setState({ error: null });
  }

  displayError() {
    return (
      <Alert theme="danger" dismissible={this.dismissError}>
        {this.state.error}
      </Alert>
    )
  }

  displaySuccess() {
    return (
      <Alert theme="success" dismissible={this.dismissError}>
        Great! A confirmation e-mail has been sent to you, make sure to check your inbox including spam folder to find it.
        Follow the link inside that e-mail to continue with your account creation!
      </Alert>
    )
  }

  nextStep() {
    return this.setState({ next_step: true });
  }

  render() {
    if (this.state.complete) {
      return (
        <Redirect to={ROUTES.LOGIN} />
      )
    }
    else {

      return (
        <Container className={PageStyle.LoginPageBackground}>
          {this.state.error !== null && this.displayError()}
          <Card className={PageStyle.EmailCard}>
            {
              !this.state.next_step ?
                <CardBody>
                  {this.state.email_confirmed && this.displaySuccess()}
                  <h2>Please confirm your e-mail address</h2>
                  <div className={PageStyle.inline}>
                    <p className={PageStyle.redText}> *</p>
                  </div>
                  <Form onSubmit={this.sendEmailConfirmation} >
                    <FormGroup>
                      <>
                        <FormInput name="email" placeholder="e.g. john@example.com" required />
                        <br />
                        <PrimaryButton pill type="submit" disabled={this.state.email_confirmed}>
                          Confirm
                          </PrimaryButton>
                      </>
                    </FormGroup>
                  </Form>
                </CardBody>
                :
                <CardBody>
                  <h2>Create your Myriade account</h2>
                  <p>Thanks for confirming your email address, now you can create your Myriade account!</p>
                  <Form onSubmit={this.createAccount}>
                    <FormGroup >
                      <label className={PageStyle.inline} htmlFor="#name">
                        Username
                        <p className={PageStyle.redText}> *</p>
                      </label>
                      <FormInput name="name" placeholder="e.g. thankful_for_today" required />
                    </FormGroup>
                    <FormGroup>
                      <Row className="m-0">
                        <label htmlFor="#wallet" >Monero Wallet Address &nbsp;&nbsp;&nbsp;</label>
                        <Badge className={PageStyle.badge} target="_blank" href="https://medium.com/@paul_70212/how-to-get-yourself-a-monero-xmr-wallet-address-2edb75a0a575" pill outline theme="info">What's this?</Badge>
                      </Row>
                      <FormInput name="wallet" placeholder="Paste in your wallet address here" />
                    </FormGroup>
                    <FormGroup>
                      <label className={PageStyle.inline} htmlFor="#password">
                        Password
                        <p className={PageStyle.redText}> *</p>
                      </label>
                      <FormInput type="password" name="password" required />
                      <label className={PageStyle.inline} htmlFor="#password_confirm">
                        Confirm Password
                        <p className={PageStyle.redText}> *</p>
                      </label>
                      <FormInput type="password" name="password_confirm" required />
                    </FormGroup>
                    <SecondaryButton pill type="submit">
                      Create Account
                    </SecondaryButton>
                  </Form>
                </CardBody>
            }
          </Card>
        </Container>
      )
    }
  }
}

export default SignupPage;