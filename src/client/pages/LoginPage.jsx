import React, { Component } from 'react';

import { Col, Container } from 'react-bootstrap';
import { Card, CardHeader, CardBody, CardFooter, Button, Form, FormInput, FormGroup, Alert } from 'shards-react';

import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import PageStyle from '../styles/pages/Login.less';
import * as ROUTES from '../utils/routes.js';

class LoginPage extends Component {

  constructor(props){
    super(props);
    this.state ={
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
    this.setState({logging_in: true});
    return this.props.login(email, password)
    .catch(err => {
      this.setState({loggin_in: false, error: true})
    })
  }

  dismissError(){
    this.setState({error: false});
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
    if (this.props.authenticated){
      return (<Redirect to={ROUTES.DASHBOARD} />)
    }
    else{
      return (
        <Container className={PageStyle.LoginPageBackground}>
          {this.state.error && this.displayError()}
          <Col md={{offset: 3, size: 6}} lg={{offset: 3, size:6}}>
            <Card className={PageStyle.LoginCard}>
              <CardHeader> Myriade Client </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput name="email" placeholder="john@example.com" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#password">Password</label>
                    <FormInput type="password" name="password" placeholder="Password" />
                  </FormGroup>
                  <Button outline pill theme="primary" type="submit">login &rarr;</Button>
                </Form>
              </CardBody>
              <CardFooter>Don't have a Myriade account? click <Link to={ROUTES.SIGN_UP}> here</Link> </CardFooter>
            </Card>
          </Col>    
        </Container>
        
      );
    }

  }
}

export default LoginPage;