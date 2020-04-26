
import React, { Component, createContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import axios from 'axios';
import * as ROUTES from '../utils/routes.js'

import config from '../utils/config.js';

const authContext = createContext();

class AuthLayer extends Component {

  constructor(props) {
    super(props);
    this.updateAuth = this.updateAuth.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      miner: null,
      authenticated: false,
      logout: this.logout,
      login: this.login,
      jwtToken: null
    }
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty("access_token")) {
      let decodedToken = decode(localStorage.getItem("access_token"));
      let expired = Date.now() > decodedToken.exp;
      this.setState({ authenticated: !expired });
    }
  }

  login(email, password) {
    console.log("here " + config.identity_service_url);
    return axios.post(`${config.identity_service_url}/v1/account/login`,
      {
        email,
        password
      })
      .then(({ data }) => {
        return this.updateAuth(data.accessToken);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.setState({
      authenticated: false,
      accessToken: '',
      miner: null,
    });
  }

  updateAuth(accessToken) {
    localStorage.setItem('access_token', accessToken);
    let decodedToken = decode(accessToken);
    this.setState({
      miner: {
        id: decodedToken.sub,
        address: decodedToken.account.address,
        name: decodedToken.account.name
      },
      jwtToken: accessToken,
      authenticated: true,
    });
  }

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}

export class ProtectedRoute extends Component {
  render() {
    return (
      this.props.authenticated ?
        <Route path={this.props.path} component={this.props.component} /> :
        <Redirect to={ROUTES.LOGIN} />
    )
  }
}

export const AuthConsumer = authContext.Consumer;

export default AuthLayer;