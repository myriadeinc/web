import React, { Component } from 'react';
import { Col, Row, Tab, Nav, Image } from 'react-bootstrap';

import PageStyle from '../styles/pages/Dashboard.less';

import Analytics from '../components/dashboard/Analytics.jsx';
import Sidenav from '../components/dashboard/Sidenav.jsx';
import Counter from '../components/dashboard/Counter.jsx';


class DashboardPage extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Tab.Container className="w-100 h-100" defaultActiveKey="first">
          <Row noGutters className="h-100">
            <Col sm={2} className="d-flex flex-column h-100">
              <div className="text-center p-2">
                <Image src="https://cdn.dribbble.com/users/1859048/screenshots/4248411/shot-24.png" fluid roundedCircle />
                <h1>Shoush</h1>
                <p>Shoush# 6779</p>
                <h3 className={PageStyle.myriadeCredits}>6,548,701</h3>
                <h3 className={PageStyle.moneroCredits}>2.590843</h3>
              </div>
              <div className="flex-grow-1">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="mt-auto">
                  <p>Contact Support</p>
                  <div className="d-flex flex-row justify-content-between">
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={10} className="h-100">
              <Tab.Content className="h-100">
                <Tab.Pane eventKey="first" className="h-100">
                  <Analytics />
                </Tab.Pane>
                <Tab.Pane eventKey="second" className="h-100">
                  <Counter />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    )
  }
}

export default DashboardPage;
