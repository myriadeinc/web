import React, { Component } from 'react';
import { Nav, Card, Container, Image } from "react-bootstrap";

import PageStyle from '../../styles/components/Sidenav.less';

class Sidenav extends Component {
  navigate(dest) {
    //console.log(dest)
    this.props.onSetPage(dest)
  }

  render() {
    return (
      <div className="d-flex flex-column p-1 h-100">
        <Card bg="secondary" text="white" >
          <Card.Body className="text-center p-2">
            <Image src="https://cdn.dribbble.com/users/1859048/screenshots/4248411/shot-24.png" fluid roundedCircle />
            <Card.Title>Shoush</Card.Title>
            <Card.Text>Shoush# 6779</Card.Text>
            <h3 className={PageStyle.myriadeCredits}>6,548,701</h3>
            <h3 className={PageStyle.moneroCredits}>2.590843</h3>
          </Card.Body>
        </Card>
        <Card bg="secondary" text="white" className="mt-1 mb-1 flex-grow-1">
          <Nav variant="pills" className="flex-column" defaultActiveKey="game">
            <Nav.Item>
              <Nav.Link eventKey="game">
                Game Room
              </Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="counter">
              <Nav.Link>
                Counter
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={this.navigate.bind(this, "partners")}>
              <Nav.Link>
                Partners
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={this.navigate.bind(this, "analytics")}>
              <Nav.Link>
                Analytics
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={this.navigate.bind(this, "history")}>
              <Nav.Link>
                History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={this.navigate.bind(this, "settings")}>
              <Nav.Link>
                Settings
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Card.Footer className="mt-auto">
            <p>Contact Support</p>
            <div className="d-flex flex-row justify-content-between">

            </div>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Sidenav;
