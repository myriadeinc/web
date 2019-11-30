import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { Alert, Nav, NavItem, NavLink, Container } from 'shards-react';

import ComponentStyle from '../../styles/components/Mine.less';

class Mine extends Component {

  constructor(props){
    super(props);
    this.state = {
      type: 'l'
    }
    this.handleTabSwitch = this.handleTabSwitch.bind(this);
  }

  windowsInstruction() {
    return (
      <Container>
        <h4>Windows setup</h4>
        <Alert theme="danger"> Mining on our pool is currently not open to the public. Learn more about our beta program and Testnet mining program by
          shooting us an email at info@myriade.io
        </Alert>
      </Container>
    )
  }

  linuxInstruction() {
    return (
      <Container>
        <h4>Linux and OSX setup</h4>
        <Alert theme="danger"> Mining on our pool is currently not open to the public. Learn more about our beta program and Testnet mining program by
          shooting us an email at info@myriade.io
        </Alert>
      </Container>
    )
  }

  renderInstructions() {
    return 'w' === this.state.type? this.windowsInstruction() : this.linuxInstruction();
  }


  handleTabSwitch(type) {
    this.setState({
      type
    })
  }

  render() {
    return (
      <Container className={ComponentStyle.Container}>
        <Row>
          <h1></h1>
        </Row>
        <br/>
        <Row>
          <Col md={12}> 
            <Nav tabs>
              <NavItem>
                <NavLink onClick={(e) => {this.handleTabSwitch('l')}} className={this.state.type === 'l' ? 'active': ''} >
                  Linux / MacOs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={(e) => {this.handleTabSwitch('w')}}  className={this.state.type === 'w' ? 'active': ''}>
                Windows
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
        
            {this.renderInstructions()}
        
        </Row>
      </Container>
    )
  }
}

export default Mine;