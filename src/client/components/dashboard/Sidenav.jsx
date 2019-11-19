import React, { Component } from 'react';
import { Nav, Card, Container} from "react-bootstrap";

import PageStyle from '../styles/components/Sidenav.less';

class Sidenav extends Component {
    render() {
        return (
          <Container className="flex-column p-1">
            <Card bg="secondary" text="white" >
              <h5>Shoush</h5>
              <p>Shoush# 6779</p>
              <h6>6,548,701</h6>
              <h6>2.590843</h6>
            </Card>
            <Card bg="secondary" text="white" className="mt-1 mb-1">
              <Nav className="flex-column" variant="pills">
                <Nav.Item>
                  <Nav.Link>
                    Mining
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Game Room
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Counter
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Partners
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Analytics
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    History
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    Settings
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Card.Footer>Footer</Card.Footer>
            </Card>
          </Container>
        )
    }
}

export default Sidenav;
