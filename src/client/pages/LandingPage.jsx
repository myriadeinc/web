import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <iframe
        src="../../../public/LandingPage/LandingPageNew.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
        title="Landing Page"
      ></iframe>
    );
  }
}

export default LandingPage;
