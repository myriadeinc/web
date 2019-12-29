import React, { Component } from 'react';

import { Col, Row, Container } from 'react-bootstrap';
import { Card, CardHeader, CardBody, CardFooter, Button, Form, FormInput, FormGroup, Alert } from 'shards-react';

import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import { PrimaryButton } from '../components/common/Buttons.jsx';

import PageStyle from '../styles/pages/Login.less';
import * as ROUTES from '../utils/routes.js';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggin_in: false,
      error: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.setState({ logging_in: true });
    return this.props.login(email, password)
      .catch(err => {
        this.setState({ loggin_in: false, error: true })
      })
  }

  dismissError() {
    this.setState({ error: false });
  }

  displayError() {
    return (
      <Alert theme="warning" dismissible={this.dismissError}>
        Login failed. Try again
      </Alert>
    )
  }

  displayLoading() {
    return (
      <Loader
        type="Mutating Dots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
  }

  render() {
    if (this.props.authenticated) {
      return (<Redirect to={ROUTES.DASHBOARD} />)
    }
    else {
      return (
        <Container>
          {this.state.error && this.displayError()}
          <Row className={' justify-content-center'}>
            <Card className={PageStyle.LoginCard}>
              <CardBody>
                <h3>Dashboard Login</h3>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput name="email" placeholder="john@example.com" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" name="password" placeholder="Password" />
                  </FormGroup>
                  <PrimaryButton pill type="submit">login &rarr;</PrimaryButton>
                </Form>
              </CardBody>
              <CardFooter>Don't have a Myriade account? click <Link to={ROUTES.SIGN_UP}> here</Link> </CardFooter>
            </Card>
          </Row>
        </Container>

      );
    }
  }
}

export default LoginPage;