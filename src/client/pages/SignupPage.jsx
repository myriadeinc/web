import React, { Component } from 'react';

import { Card,  CardBody, Button, Form, FormInput, FormGroup, Alert } from 'shards-react';
import { Col, Container } from 'react-bootstrap';
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
    }
  }

  sendEmailConfirmation(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    axios.post(`${config.identity_service_url}/v1/email/`, {
      email
    })
    .then(() => {
      return this.setState({email_confirmed: true});
    })
    .catch(err => {
      return this.setState({error: "Failed to send email confirmation, please double check your email address"});
    })
  }

  createAccount(e) {
    e.preventDefault();
    const email_token = e.target.elements.email_token.value;
    const name = e.target.elements.name.value;
    const wallet = e.target.elements.wallet.value;
    const password = e.target.elements.password.value;
    const password_confirm = e.target.elements.password_confirm.value;

    if (password !== password_confirm) {
      return this.setState({error: "Password does not match"})
    }

    return axios.post(`${config.identity_service_url}/v1/account/create/`, {
      email_token,
      name,
      password,
      wallet_address: wallet,
    })
    .then(({data}) => {
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

  dismissError(){
    this.setState({error: null});
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
        Successfully sent e-mail confirmation, make sure to check your inbox including spam folder.
      </Alert>
    )
  }

  nextStep() {
    return this.setState({next_step : true});
  }

  render() {
    if (this.state.complete){
      return (
        <Redirect to={ROUTES.LOGIN} />
      )
    }
    else {

      return (
        <Container className={PageStyle.LoginPageBackground}>
          <Card className={PageStyle.EmailCard}>
  
            {this.state.error !== null && this.displayError()}
            {
              !this.state.next_step ? 
              <CardBody>
                  {this.state.email_confirmed && this.displaySuccess()}
                  <h2>Step 1: Confirm your e-mail address</h2>
                  <Form onSubmit={this.sendEmailConfirmation} >
                    <FormGroup>
                      {!this.state.email_confirmed ? 
                        <>
                          <FormInput name="email" placeholder="john@example.com" />
                          <br/>
                          <PrimaryButton pill type="submit" disabled={this.state.email_confirmed}>
                            Confirm 
                          </PrimaryButton>
                          
                          <SecondaryButton pill onClick={this.nextStep}>
                            Already confirmed email? Go next &rarr;
                          </SecondaryButton>
                        </>
                        :
                        <SecondaryButton pill onClick={this.nextStep}>
                          Next
                        </SecondaryButton>
                      }
  
                    </FormGroup>
                  </Form>
              </CardBody> 
              :    
              <CardBody>
                  <h2>Step 2: Create an account on Myriade</h2>
                  <Form onSubmit={this.createAccount}>
                    <FormGroup>
                      <label htmlFor="#name">Name</label>
                      <FormInput name="name" placeholder="John Doe" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="#wallet">Monero Wallet Address</label>
                      <FormInput name="wallet" placeholder="Paste in your wallet address here" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="#token">Email Confirmation Token (Check your emails)</label>
                      <FormInput name="email_token" placeholder="ABCDEFGHIJ" />
                    </FormGroup>
                    <FormGroup>
                      <label htmlFor="#password">Password</label>
                      <FormInput type="password" name="password" />
                      <label htmlFor="#password_confirm">Confirm Password</label>
                      <FormInput type="password" name="password_confirm" />
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