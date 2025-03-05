import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScriptLoaded: false,
    };
  }

  componentDidMount() {
    const cssLinks = [
      "/assets/vendor/aos/aos.css",
      "/assets/vendor/bootstrap/css/bootstrap.min.css",
      "/assets/vendor/bootstrap-icons/bootstrap-icons.css",
      "/assets/vendor/boxicons/css/boxicons.min.css",
      "/assets/vendor/glightbox/css/glightbox.min.css",
      "/assets/vendor/remixicon/remixicon.css",
      "/assets/vendor/swiper/swiper-bundle.min.css",
      "/assets/css/style.css",
    ];

    cssLinks.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
    script.async = true;
    script.onload = () => this.setState({ isScriptLoaded: true });
    document.body.appendChild(script);
  }

  render() {
    if (!this.state.isScriptLoaded) {
      return null;
    }

    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container-fluid d-flex align-items-center">
            <a href="index.html" className="logo me-auto">
              <img src="assets/img/Myriade-logo.svg" alt="" className="pull-left" />
            </a>
            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="login scrollto" href="#about">Login</a></li>
                <li><a className="signup scrollto" href="#about">Get Started</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>

        <section id="hero" className="container-fluid">
          <div className="container mt-3">
            <div className="row">
              <div className="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto" data-aos="fade-up" data-aos-delay="300">
                <h1>Make your PC work for you...</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto" data-aos="fade-up" data-aos-delay="300">
                <h2>...while you’re at work, school, or asleep and collect your mined rewards when you get back. Mining crypto on Myriade is safe and easy. Once you download our app, you can start earning crypto and gift cards right away.</h2>
              </div>
            </div>
            <div className="btn-toolbar justify-content-center" data-aos="zoom-in">
              <button id="download-desktop-app" className="btn btn-download-desktop-app" type="submit">Download Desktop App</button>
            </div>
            <div className="btn-toolbar justify-content-center" data-aos="zoom-in">
              <button className="btn btn-advanced-mining justify-content-center mx-auto" type="button" onClick={() => window.location.href = 'https://github.com/xmrig/xmrig'}>Advanced Mining (XMRIG)</button>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="why-us" className="why-us">
            <div className="container-fluid" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
                  <div className="content">
                    <h3>Getting started with Myriade is quick and easy. <strong>Just follow these steps.</strong></h3>
                    <p>We have tried our best to make sure that crypto mining through Myriade is as simple as possible. We have taken great care to minimize clicks and make mining beginner friendly.</p>
                  </div>
                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Download the miner and create a secure account.<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                          <p>Once your account is created, you’ll be able to log in on multiple devices and start mining to one account. The app is a simple program but it can still be confusing to new people. Send us a message or ask our community on Discord if you run into trouble. We're all on the same team here and we all want you to succeed.</p>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Personalize your Myriade account. <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                          <p>Before you start mining you have to initialize some key settings. One of which being your preferred mining split. Myriade allows you to be rewarded for your mining in a variety of ways. Before you start, it is important to choose how you wish to be rewarded. This mining allocation is personal to you and should reflect what you want to get out of your time with Myriade. We also have some other personalization options that are less serious but are available to you for fun.</p>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Start Mining <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                          <p>Once you've chosen your preferred mining split, you are now ready to start mining. The magic of crypto mining is that it is a completely passive process. You could be at school, work, or even sleeping and you will be earning on Myriade. It's a bit like magic. Just make sure you have followed some of the guidelines on the app to make sure the program keeps running when you want it to. Sometimes Windows will enter sleep mode when it doesn't detect mouse movement so you wouldn't want a whole day of mining to go to waste just because you forgot to change your settings around.</p>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> Use your Mining Credits <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                          <p>Now that you've been mining for awhile, you have probably accumulated a fair amount of Mining Credits. You can use your MC to purchase tickets in the game room for gift cards or crypto rewards.</p>
                        </div>
                      </li>
                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed"><span>05</span> Withdraw <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                          <p>Not your keys, not your crypto. Now that you have mined or won your crypto / gift cards, it is time to withdraw them. All you need to do is head over to the withdraw page and submit a request. The withdrawal process takes up to 24 hours but usually less. We make it as easy as possible for you to get your crypto into your own personal wallet.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/mining-image.png")' }} data-aos="zoom-in" data-aos-delay="150"></div>
              </div>
            </div>
          </section>

          <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>See what long-time Myriade miners are saying about us.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="pic col-lg-1"><img src="assets/img/testimonials/Snowman.png" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>Herosnowman #1658</h4>
                      <span>Miner since Sept. 4 2021</span>
                      <p>"Myriade has something for everyone. Small miners have a chance to earn more than they usually would by participating in the raffles and big miners can enjoy the low fees."</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pic col-lg-1"><img src="assets/img/testimonials/Dog.png" className="img-fluid" alt="" /></div>
                    <div className="member-info">
                      <h4>Tri #928</h4>
                      <span>Miner since May 6 2021</span>
                      <p>"Myriade has been a wonderful gateway mining solution for me. Originally I started with my existing computer and after seeing for myself how well it worked for me, someone with far less computer power, I was hooked! Mining isn't just for the big guys now and we can all support the network!"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="https://myriade.io/#/cookies">Cookies Policy</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="https://myriade.io/#/terms">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="https://myriade.io/#/privacy">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-links">
                  <h4>Our Socials</h4>
                  <p>Join our online communities and get in touch with other Myriade Miners like you!</p>
                  <div className="social-links mt-3">
                    <a href="https://twitter.com/myriadeinc" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                    <a href="https://linkedin.com/company/myriade-inc" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/myriadeinc" className="github" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
                    <a href="https://discord.gg/J9Pn7Dk" className="discord" target="_blank" rel="noopener noreferrer"><i className="bx bxl-discord"></i></a>
                    <a href="https://reddit.com/r/MyriadeMining/" className="reddit" target="_blank" rel="noopener noreferrer"><i className="bx bxl-reddit"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              &copy; Copyright <strong><span>Myriade Inc.</span></strong> 2019-2024
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default LandingPage;
