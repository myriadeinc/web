import React, { Component } from 'react';
import { Col, Row, Tab, Nav, Image } from 'react-bootstrap';

import PageStyle from '../styles/pages/Dashboard.less';

import Analytics from '../components/dashboard/Analytics.jsx';
import Counter from '../components/dashboard/Counter.jsx';
import Gameroom from '../components/dashboard/Gameroom.jsx';
import Partners from '../components/dashboard/Partners.jsx';
import History from '../components/dashboard/History.jsx';
import Settings from '../components/dashboard/Settings.jsx';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Tab.Container className="vw-100" defaultActiveKey="analyticsPage">
          <Row noGutters>
            <Col sm={2} className="d-flex flex-column vh-100">
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
                    <Nav.Link eventKey="analyticsPage">Analytics</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="counterPage">Counter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="gamePage">Game Room</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="partnerPage">Partners</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="historyPage">History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="settingsPage">Settings</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="mt-auto">
                  <p>Contact Support</p>
                  <div className="d-flex flex-row justify-content-between">
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={10} className="vh-100">
              <Tab.Content className="h-100">
                <Tab.Pane eventKey="analyticsPage" className="h-100">
                  <Analytics className="h-100" />
                </Tab.Pane>
                <Tab.Pane eventKey="counterPage" className="h-100">
                  <Counter className="h-100" />
                </Tab.Pane>
                <Tab.Pane eventKey="gamePage" className="h-100">
                  <Gameroom className="h-100" />
                </Tab.Pane>
                <Tab.Pane eventKey="partnerPage" className="h-100">
                  <Partners className="h-100" />
                </Tab.Pane>
                <Tab.Pane eventKey="historyPage" className="h-100">
                  <History className="h-100" />
                </Tab.Pane>
                <Tab.Pane eventKey="settingsPage" className="h-100">
                  <Settings className="h-100" />
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
