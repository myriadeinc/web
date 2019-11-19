import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import PageStyle from '../styles/pages/Dashboard.less';

import Mining from '../pages/Mining.jsx';
import Sidenav from '../components/Sidenav.jsx';

class DashboardPage extends Component {
  render() {
    return (
      <Container fluid className={PageStyle.container} >
        <Row noGutters className="w-100">
          <Col sm="2">
            <Sidenav/>
          </Col>
          <Col sm="10" className={PageStyle.Mining}>
            <Mining/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default DashboardPage;
