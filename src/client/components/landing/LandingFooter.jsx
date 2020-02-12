import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../utils/routes.js';

import Style from '../../styles/components/landing/footer.less';

class LandingFooter extends Component {
  render() {
    return (
      <div className={Style.footer}>
        <Row className="justify-content-center pt-5 mb-2">
          <a href="mailto:support@myriade.io" target="_blank" className={Style.link}>
            <i className="fas fa-envelope fa-2x m-2"></i>
          </a>
          <a href="https://discord.gg/J9Pn7Dk" target="_blank" className={Style.link}>
            <i className="fab fa-discord fa-2x m-2"></i>
          </a>
          <a href="https://www.reddit.com/r/MyriadeMining/" target="_blank" className={Style.link}>
            <i className="fab fa-reddit fa-2x m-2"></i>
          </a>
        </Row>
        <Row className="justify-content-center m-2">
          <Link className={'m-1 ' + Style.link} to={ROUTES.PRIVACY}>Privacy Policy</Link>
          <Link className={'m-1 ' + Style.link} to={ROUTES.COOKIES}>Cookies Policy</Link>
          <Link className={'m-1 ' + Style.link} to={ROUTES.TERMS}>Terms of Service</Link>
        </Row>
        <Row className="justify-content-md-center mt-2 pb-3">
          <p>Copyright © 2020, Myriade Inc.</p>
        </Row>
      </div>
    );
  }
}

export default LandingFooter;