import React, { Component, createContext } from 'react';
import decode from 'jwt-decode';
import axios from 'axios';

import config from '../utils/config.js';

const authContext = createContext();

class AuthLayer extends Component {
  
  constructor(props) {
    super(props);
    this.updateAuth = this.updateAuth.bind(this);
    this.login = this.login.bind(this);
    this.state = {
        miner: null,
        authenticated: false,
        logout: this.logout,
        login: this.login,
        jwtToken: null
    }
    
  }

  login(email, password) {
    return axios.post(`${config.myriade_login_url}/v1/account/login`, 
      {
        email, 
        password
      })
      .then(({data}) => {
        return this.updateAuth(data.accessToken);
      })
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
    const decodedToken = decode(accessToken);
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

  render(){
    return (
      <authContext.Provider value={this.state}>
          {this.props.children}
      </authContext.Provider>
  );
  }
}

export const AuthConsumer = authContext.Consumer;
export default AuthLayer;