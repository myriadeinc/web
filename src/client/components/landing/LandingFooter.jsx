import React, { Component } from 'react';
import { Row, Col, Container, Badge } from 'react-bootstrap';

import Style from '../../styles/components/landing/footer.less';

class LandingFooter extends Component {
  render() {
    return (
      <div className={Style.footer}>
        <Row className="justify-content-md-center pt-5 mb-2">
          <a href="support@myriade.io" target="_blank">
            <Badge pill variant="dark" className="m-1">
              <i class="fas fa-envelope"></i>
            </Badge>
          </a>
          <a href="https://discord.gg/hQum2Cj m-2" target="_blank">
            <Badge pill variant="dark" className="m-1">
              <i class="fab fa-discord"></i>
            </Badge>
          </a>
          <a href="https://www.reddit.com/r/MyriadeMining/" target="_blank">
            <Badge pill variant="dark" className="m-1">
              <i class="fab fa-reddit"></i>
            </Badge>
          </a>
        </Row>
        <Row className="justify-content-md-center m-2">
          <a className="m-1" target="_blank">Privacy Policy</a>
          <a className="m-1" target="_blank">Cookies Policy</a>
          <a className="m-1" target="_blank">Terms of Service</a>
        </Row>
        <Row className="justify-content-md-center mt-2 pb-3">
          <p>Copyright © 2019, Myriade Inc.</p>
        </Row>
      </div>
    );
  }
}

export default LandingFooter;