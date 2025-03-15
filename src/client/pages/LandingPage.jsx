import React, { useRef, useEffect, useState } from "react";
import WAVES from "./assets/js/vanta.waves.min";
import * as THREE from "./assets/js/three.r119.min";

import "bootstrap/dist/js/bootstrap.bundle.min.js";


import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/style.css";


import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import AOS from "aos";



import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./assets/vendor/php-email-form/validate.js";
import "./assets/vendor/waypoints/noframework.waypoints.js";

import "./assets/js/main.js";

function LandingPage() {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: heroRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x31355,
          shininess: 15.0,
          waveHeight: 23.0,
          waveSpeed: 0.2,
          zoom: 1.1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Header */}
      <header id="header" className="fixed-top">
        <div className="container-fluid d-flex align-items-center">
          <a href="/" className="logo me-auto">
            <img src="/assets/img/Myriade-logo.svg" alt="" className="pull-left" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="login scrollto" href="#about">
                  Login
                </a>
              </li>
              <li>
                <a className="signup scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="container-fluid" ref={heroRef}>
        <div className="container mt-3">
          <div className="row">
            <div
              className="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1>Make your PC work for you...</h1>
            </div>
          </div>
          <div className="row">
            <div
              className="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h2>
                ...while you’re at work, school, or asleep and collect your mined rewards
                when you get back. Mining crypto on Myriade is safe and easy. Once you
                download our app, you can start earning crypto and gift cards right away.
              </h2>
            </div>
          </div>
          <div className="btn-toolbar justify-content-center" data-aos="zoom-in">
            <button
              id="download-desktop-app"
              className="btn btn-download-desktop-app"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="40"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>{" "}
              Download Desktop App
            </button>
          </div>
          <div className="btn-toolbar justify-content-center" data-aos="zoom-in">
            <button
              className="btn btn-advanced-mining justify-content-center mx-auto"
              type="button"
              onClick={() => window.location.href = "https://github.com/xmrig/xmrig"}
            >
              Advanced Mining (XMRIG)
            </button>
          </div>
          <div style={{ marginBottom: "500px" }}></div>
        </div>
      </section>

      <div className="row col-9 d-flex justify-content-center mx-auto">
        <div className="hero-img">
          <img
            src="/assets/img/app.png"
            className="img-fluid mx-auto justify-content-center d-flex img-responsive"
            alt="App"
          />
        </div>
      </div>

      <main id="main">
        {/* Why Us Section */}
        <section id="why-us" className="why-us">
          <div className="container-fluid" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
                <div className="content">
                  <h3>
                    Getting started with Myriade is quick and easy.{" "}
                    <strong>Just follow these steps.</strong>
                  </h3>
                  <p>
                    We have tried our best to make sure that crypto mining through Myriade
                    is as simple as possible. We have taken great care to minimize clicks
                    and make mining beginner friendly.
                  </p>
                </div>
                <div className="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        className="collapse"
                        data-bs-target="#accordion-list-1"
                      >
                        <span>01</span> Download the miner and create a secure account.
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-1"
                        className="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Once your account is created, you’ll be able to log in on
                          multiple devices and start mining to one account. The app is a
                          simple program but it can still be confusing to new people. Send
                          us a message or ask our community on Discord if you run into
                          trouble. We're all on the same team here and we all want you to
                          succeed.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        className="collapsed"
                      >
                        <span>02</span> Personalize your Myriade account.
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Before you start mining you have to initialize some key settings.
                          One of which being your preferred mining split. Myriade allows
                          you to be rewarded for your mining in a variety of ways. Before
                          you start, it is important to choose how you wish to be rewarded.
                          This mining allocation is personal to you and should reflect what
                          you want to get out of your time with Myriade. We also have some
                          other personalization options that are less serious but are
                          available to you for fun.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        className="collapsed"
                      >
                        <span>03</span> Start Mining
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-3"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Once you've chosen your preferred mining split, you are now ready
                          to start mining. The magic of crypto mining is that it is a
                          completely passive process. You could be at school, work, or even
                          sleeping and you will be earning on Myriade. It's a bit like
                          magic. Just make sure you have followed some of the guidelines on
                          the app to make sure the program keeps running when you want it
                          to. Sometimes Windows will enter sleep mode when it doesn't
                          detect mouse movement so you wouldn't want a whole day of mining
                          to go to waste just because you forgot to change your settings
                          around.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-4"
                        className="collapsed"
                      >
                        <span>04</span> Use your Mining Credits
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-4"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Now that you've been mining for awhile, you have probably
                          accumulated a fair amount of Mining Credits. You can use your MC
                          to purchase tickets in the game room for gift cards or crypto
                          rewards.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-5"
                        className="collapsed"
                      >
                        <span>05</span> Withdraw
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-5"
                        className="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Not your keys, not your crypto. Now that you have mined or won
                          your crypto / gift cards, it is time to withdraw them. All you
                          need to do is head over to the withdraw page and submit a
                          request. The withdrawal process takes up to 24 hours but usually
                          less. We make it as easy as possible for you to get your crypto
                          into your own personal wallet.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                style={{ backgroundImage: 'url("/assets/img/mining-image.png")' }}
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="team" className="team section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>See what long-time Myriade miners are saying about us.</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                  <div className="pic col-lg-1">
                    <img src="/assets/img/testimonials/Snowman.png" className="img-fluid" alt="Snowman" />
                  </div>
                  <div className="member-info">
                    <h4>Herosnowman #1658</h4>
                    <span>Miner since Sept. 4 2021</span>
                    <p>
                      "Myriade has something for everyone. Small miners have a chance to
                      earn more than they usually would by participating in the raffles and
                      big miners can enjoy the low fees."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                  <div className="pic col-lg-1">
                    <img src="/assets/img/testimonials/Dog.png" className="img-fluid" alt="Dog" />
                  </div>
                  <div className="member-info">
                    <h4>Tri #928</h4>
                    <span>Miner since May 6 2021</span>
                    <p>
                      "Myriade has been a wonderful gateway mining solution for me.
                      Originally I started with my existing computer and after seeing for
                      myself how well it worked for me, someone with far less computer
                      power, I was hooked! Mining isn't just for the big guys now and we
                      can all support the network!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                  <div className="pic col-lg-1">
                    <img src="/assets/img/testimonials/Frog.png" className="img-fluid" alt="Frog" />
                  </div>
                  <div className="member-info">
                    <h4>Pulsd #1730</h4>
                    <span>Miner Since Sept. 22 2021</span>
                    <p>
                      "As someone who isn't great with computers, the desktop app is
                      perfect, I can also mine for gift cards which is great for me to get
                      my friends to start mining too. Myriade seems like it's made for
                      beginners."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                  <div className="pic col-lg-1">
                    <img src="/assets/img/testimonials/Bear.png" className="img-fluid" alt="Bear" />
                  </div>
                  <div className="member-info">
                    <h4>Dachaz #982</h4>
                    <span>Miner Since May 14 2021</span>
                    <p>
                      "Myriade makes it easy to explore what cryptomining is all about for
                      gamers -- because even gamers need to sleep! It's got low fees, a fun
                      raffle feature, and much more."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Pool Stats</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <p>5.015 MH/s</p>
                  <h4>Pool Hashrate</h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <p>5,694</p>
                  <h4>Total Myriade Miners</h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-money"></i>
                  </div>
                  <p>10% FRTNE, 0% PPS</p>
                  <h4>Payout Fees</h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer"></i>
                  </div>
                  <p>0.001 XMR</p>
                  <h4>Minimum Withdrawal</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Try out our Demo Account!</h3>
                <p>
                  Want to try it out before downloading the app? Try out our demo account
                  and mess around a bit to get a feel for Myriade Mining.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Myriade is a cryptoasset service company founded in 2019 in Montreal by
                  two university students who were frustrated by the lack of profitability
                  and payout options available in crypto mining. The Myriade mission is "To
                  ensure the development and adoption of better financial technologies."
                  Myriade was the first Mining-Pool to offer "Fortune Mining"; where
                  everyday people can potentially earn as much as the big mining farms.
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  The newest released service is the Open Source desktop app which allows
                  for easy and simple mining. There are plans to offer many more services
                  in the future that would make earning, holding, and spending your crypto
                  as easy as possible.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> A trusted mining pool with a
                    dedicated group of long-time miners
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Pool operators who actually
                    use the pool every day
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Live support
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> Open Source Code
                  </li>
                  <a
                    href="https://github.com/myriadeinc"
                    className="btn-learn-more"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View our GitHub
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>Have your Myriade or Monero Mining questions answered here.</p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    What is Myriade?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                    <p>
                      Myriade is a crypto asset service company that is for the moment
                      focusing on crypto mining, specifically: Monero (XMR). Though look
                      out, we plan on offering other services in the near future.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    So... You’re a mining pool... we have plenty of those already.
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      What sets us apart from traditional mining pools is our novel payout
                      methods. Rather than using classic systems, we’re using something
                      completely different. Something we call: Fortune Mining where you can
                      earn gift cards, crypto, or both!
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    How does Fortune Mining work?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      When you sign in and mine on the Myriade mining pool, your account
                      will be credited in Mining Credits (MC), which are proportionally
                      distributed based off your hashing power (similar to current mining
                      pools). To be clear. MCs are NOT a crypto asset in any way, shape, or
                      form. It does not have a set value, it is not mineable. You will be
                      mining on the Monero network, and there will be no scenario where you
                      would be able to pull MC out to an exchange or use it anywhere other
                      than the Myriade ecosystem. Instead, think of MC like tokens at an
                      arcade or credit card rebate points that are exclusively redeemable
                      here.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Why Fortune Mining?{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      The goal of Myriade’s Fortune Mining system is to create value from
                      personal gaming computers that aren’t being used during downtime.
                      Myriade allows gamers and people with spare hashing power laying
                      around to put their old and unused devices to use, by creating a
                      potentially profitable means of earning Monero.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Can I convert MC into XMR or XMR into MC{" "}
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                    <p>No, there is no conversion for XMR and MC at this time.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-6"
                    className="collapsed"
                  >
                    Will Mining Crypto Damage my PC?
                    <i className="bx bx-chevron-down icon-show"></i>
                    <i className="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div id="faq-list-6" className="collapse" data-bs-parent=".faq-list">
                    <p>
                      No. As long as your PC has proper air flow, then it will be able to
                      mine just fine. If you have ever left your PC accidentally idling on
                      the main menu of a video game for a day without it melting, then it
                      will more than handle mining.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Overlay */}
      <div id="popup-overlay" style={{ display: "none" }} className="popup-overlay">
        <div className="popup-box">
          <p>Installation in Progress...</p>
          <div id="spinner"></div>
        </div>
      </div>

      {/* Footer */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://myriade.io/#/cookies">Cookies Policy</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://myriade.io/#/terms">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="https://myriade.io/#/privacy">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Our Socials</h4>
                <p>
                  Join our online communities and get in touch with other Myriade Miners
                  like you!
                </p>
                <div className="social-links mt-3">
                  <a
                    href="https://twitter.com/myriadeinc"
                    className="twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/myriade-inc"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/myriadeinc"
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://discord.gg/J9Pn7Dk"
                    className="discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-discord"></i>
                  </a>
                  <a
                    href="https://reddit.com/r/MyriadeMining/"
                    className="reddit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-reddit"></i>
                  </a>
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
    </>
  );
}

export default LandingPage;
