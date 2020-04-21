import React, { Component } from 'react';
import { Row, Col, ResponsiveEmbed, Modal } from 'react-bootstrap';

import { Alert, Nav, NavItem, NavLink, Container } from 'shards-react';
import { Badge, Button } from "shards-react";
import ComponentStyle from '../../styles/components/dashboard/Mine.less';

import { AuthConsumer } from '../../layers/AuthLayer.jsx';

import { PrimaryButton } from '../common/Buttons.jsx';

import xmrConfigData from '../../utils/xmr_config.js';

class Mine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 'l',
      modalShow: false
    }
    this.handleTabSwitch = this.handleTabSwitch.bind(this);
    this.handleDownloadConfig = this.handleDownloadConfig.bind(this);
  }

  handleClose = () => this.setState({ modalShow: false });
  handleShow = () => this.setState({ modalShow: true });

  handleDownloadConfig(miner) {

    const fileName = "config.json";

    let config_data = xmrConfigData;

    config_data.pools[0].user = miner.address;
    config_data.pools[0].pass = miner.id;
    config_data.pools[0].url = "staging.myriade.io:12345";

    const json = JSON.stringify(config_data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  windowsInstruction() {
    return (
      <Container>
        <Row>
          <Col>
            <h5>1. Requirements</h5>
          </Col>
          <Col md="auto">
            <Button onClick={this.handleShow}>Video Tutorial</Button>
            <Modal centered size="lg" show={this.state.modalShow} onHide={this.handleClose}>
              <Modal.Body>
                <ResponsiveEmbed aspectRatio="16by9">
                  <iframe src="https://www.youtube.com/embed/c2UduXLCf5Q" frameBorder="0" allowFullScreen></iframe>
                </ResponsiveEmbed>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <p>You will need the following</p>
        <ul>
          <li>
            A computer (desktop or laptop) - minimum 2GHz+ processor and 2GB of RAM.
          </li>
          <li>
            XMRig miner desktop client (Download in the step below)
          </li>
        </ul>
        <h5>2. Download and installing XMRig</h5>
        <p>You can download the official XMRig <a target="_blank" href="https://github.com/xmrig/xmrig/releases"> here</a>.
        Once on that page select xmrig-5.5.0-gcc-win64.zip for 64-bit and xmrig-5.5.0-gcc-win32.zip for 32-bit, or alternatively, select any other release and versions.</p>
        <h5>3. Extract the downloaded zip file</h5>
        <p>Et voila! You have an executable XMRig client downloaded. The file to run is called <strong>xmrig.exe</strong>. Now you can proceed to the next step to download your configuration file.</p>
      </Container>
    )
  }

  linuxInstruction() {
    return (
      <Container>
        <h5>1. Requirements</h5>
        <p>You will need the following</p>
        <ul>
          <li>
            A computer (desktop or laptop) - minimum 2GHz+ processor and 2GB of RAM
          </li>
          <li>
            A 64 bits UNIX-based operating system
          </li>
          <li>
            XMRig miner desktop client (Download in the step below)
          </li>
        </ul>
        <h5>2. Download and installing XMRig</h5>
        <p>You can download the official XMRig <a target="_blank" href="https://github.com/xmrig/xmrig/releases"> here</a>.
        Once on that page select xmrig-5.5.0-xenial-x64.tar.gz, or alternatively, select any other release and versions.</p>
        <h5>3. Extract the downloaded tar file</h5>
        <p>Et voila! You have an executable XMRig client downloaded. The file to run is called <strong>xmrig</strong>. Now you can proceed to the next step to download your configuration file.</p>
      </Container>
    )
  }

  renderInstructions() {
    return 'w' === this.state.type ? this.windowsInstruction() : this.linuxInstruction();
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
          <h3>Getting started with mining [XMRig]</h3>
          <p>Stay tuned for our updates, we are currently working on desktop client app that will provide an easier mining experience for you.</p>
        </Row>
        <Alert theme="warning"> <strong>Important! </strong> Our pool is currently not open to the public. Learn more about our beta program and Testnet mining program by
          shooting us an email at info@myriade.io
        </Alert>
        <div className={ComponentStyle.Scrollbox}>
          <Row>
            <Col md={1}>
              <Badge pill theme="primary">
                Step 1
              </Badge>
            </Col>
            <Col md={11}>
              <strong>Setup XMRig for your operating system</strong>
            </Col>
            <hr />
          </Row>
          <Row>
            <Col md={12}>

              <Nav tabs>
                <NavItem>
                  <NavLink onClick={(e) => { this.handleTabSwitch('l') }} className={this.state.type === 'l' ? 'active' : ''} className={ComponentStyle.tab}>
                    Linux / OSX
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => { this.handleTabSwitch('w') }} className={this.state.type === 'w' ? 'active' : ''} className={ComponentStyle.tab}>
                    Windows
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <div style={{ padding: '20px' }}>
              {this.renderInstructions()}
            </div>
          </Row>
          <Row>
            <Col md={1}>
              <Badge pill theme="primary">
                Step 2
              </Badge>
            </Col>
            <Col md={11}>
              <strong>Download your XMRig configuration file below</strong>
            </Col>
            <hr />
            <div style={{ padding: '20px' }}>

              <Col md={12}>
                After downloading this file, make sure to put it in the configuration folder where you installed your XMR rig. Then you should be able to start
                mining with us. <br />


                <strong>Important:</strong> Please note that this configuration file is made for you only, it will identify you as a miner on our services, please do not share this
                  configuration file with other miners. Whoever is in possession of this configuration file can impersonate you during mining.

              </Col>
              <Col md={{ offset: 4, span: 4 }}>

                <AuthConsumer>
                  {({ miner }) => (
                    <PrimaryButton pill style={{ margin: '10px' }} onClick={(e) => { this.handleDownloadConfig(miner) }}>Download Configuration</PrimaryButton>
                  )}
                </AuthConsumer>

              </Col>
              <Col md={12}>
                Once downloaded, you should replace this file with the <strong>config.json</strong> file in your XMRig download from step 1.
              </Col>
            </div>
          </Row>
          <Row>
            <Col md={1}>
              <Badge pill theme="primary">
                Step 3
              </Badge>
            </Col>
            <Col md={11}>
              <strong>Start mining on XMRig with your downloaded configuration file</strong>
            </Col>
            <div style={{ padding: '20px' }}>
              <Col md={12}>
                <p>

                  You are now ready to start mining on Myriade with your configuration file from step 2 and with the XMRig from step 1. To do so simply click on the executable program either called `xmrig.exe` or `xmrig` depending on your operation system.
                  Happy mining and please write us your feedback or questions to info@myriade.io

                </p>
              </Col>
            </div>
          </Row>
        </div>

      </Container>
    )
  }
}

export default Mine;