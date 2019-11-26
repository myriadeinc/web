import React, { Component } from 'react';

import Header from '../components/landing/Navbar.jsx';
import LandingBody from '../components/landing/LandingBody.jsx';
import SignUp from '../components/landing/SignUp.jsx'
import PoolStats from '../components/PoolStats.jsx';
import FindOutMore from '../components/landing/FindOutMore.jsx';

class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: "main"
    };
  }

  login() {
    this.props.onLogin()
  }

  showPage = (page) => {
    console.log("parent " + page)
    if (this.state.currentPage != page) {
      this.setState({
        currentPage: page
      })
    }
  }

  render() {
    let content
    switch (this.state.currentPage) {
      case "signup":
        content = <SignUp onLogin={this.login} />
        break
      case "main":
        content = <LandingBody />
        break
    }
    console.log(this.state.currentPage)

    return (
      <>
        <Header onSetPage={this.showPage} />
        {content}
        {/*
        <PoolStats />
        <FindOutMore />*/}
      </>
    );
  }
}

export default LandingPage;
