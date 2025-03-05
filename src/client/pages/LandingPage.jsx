import React, { Component, createRef } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
  }

  componentDidMount() {
    const loadScript = (url) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${url}`));
        document.body.appendChild(script);
      });

    loadScript('https://code.jquery.com/jquery-3.6.0.min.js')
      .then(() => loadScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'))
      .then(() => loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js'))
      .then(() => {
        if (window.VANTA && window.THREE) {
          window.VANTA.WAVES({
            el: '#hero',
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x31355f,
            shininess: 15,
            waveHeight: 23,
            waveSpeed: 0.2,
            zoom: 1.1,
          });
        }
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.display = 'none';
        }
      })
      .catch(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.style.display = 'none';
        }
      });
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        dangerouslySetInnerHTML={{
          __html: `
<link rel="stylesheet" href="/assets/vendor/aos/aos.css">
<link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css">
<link rel="stylesheet" href="/assets/vendor/boxicons/css/boxicons.min.css">
<link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css">
<link rel="stylesheet" href="/assets/vendor/remixicon/remixicon.css">
<link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css">
<link rel="stylesheet" href="/assets/css/style.css">

<style>
  /* Ensure header is always on top */
  #header {
    position: relative !important;
    z-index: 9999 !important;
  }

  /* Make the hero section a positioned container */
  #hero {
    position: relative !important;
    min-height: 100vh;
    z-index: 1 !important;
  }

  /* The Vanta canvas behind text */
  #hero canvas {
    position: absolute !important;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100% !important;
    height: 100% !important;
    z-index: 0 !important;
  }

  /* Ensure hero text and main content are above the canvas */
  #hero .container, #main, section, .container {
    position: relative !important;
    z-index: 2 !important;
  }

  /* Highest z-index for the popup overlay */
  #popup-overlay {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    z-index: 999999 !important;
  }
</style>

<header id="header" class="fixed-top">
  <div class="container-fluid d-flex align-items-center">
    <a href="index.html" class="logo me-auto">
      <img src="/assets/img/Myriade-logo.svg" alt="" class="pull-left">
    </a>
    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="login scrollto" href="#login">Login</a></li>
        <li><a class="signup scrollto" href="#signup">Get Started</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  </div>
</header>

<section id="hero" class="container-fluid">
  <div class="container mt-3">
    <div class="row">
      <div class="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto" data-aos="fade-up" data-aos-delay="300">
        <h1>Make your PC work for you...</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-9 d-inline-flex flex-column justify-content-center pt-0 order-1 mx-auto" data-aos="fade-up" data-aos-delay="300">
        <h2>...while you’re at work, school, or asleep and collect your mined rewards when you get back. Mining crypto on Myriade is safe and easy. Once you download our app, you can start earning crypto and gift cards right away.</h2>
      </div>
    </div>
    <div class="btn-toolbar justify-content-center" data-aos="zoom-in">
      <button id="download-desktop-app" class="btn btn-download-desktop-app" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download Desktop App
      </button>
    </div>
    <div class="btn-toolbar justify-content-center" data-aos="zoom-in">
      <button class="btn btn-advanced-mining justify-content-center mx-auto" type="button" onclick="window.location.href='https://github.com/xmrig/xmrig'">
        Advanced Mining (XMRIG)
      </button>
    </div>
    <div style="margin-bottom:500px"></div>
  </div>
</section>

<div class="row col-9 d-flex justify-content-center mx-auto">
  <div class="hero-img">
    <img src="/assets/img/app.png" class="img-fluid mx-auto justify-content-center d-flex img-responsive">
  </div>
</div>

<main id="main">
  <section id="why-us" class="why-us">
    <div class="container-fluid" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
          <div class="content">
            <h3>Getting started with Myriade is quick and easy. <strong>Just follow these steps.</strong></h3>
            <p>
              We have tried our best to make sure that crypto mining through Myriade is as simple as possible. We have taken great care to minimize clicks and make mining beginner friendly.
            </p>
          </div>
          <div class="accordion-list">
            <ul>
              <li>
                <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1">
                  <span>01</span> Download the miner and create a secure account.
                  <i class="bx bx-chevron-down icon-show"></i>
                  <i class="bx bx-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                  <p>
                    Once your account is created, you’ll be able to log in on multiple devices and start mining to one account. The app is a simple program but it can still be confusing to new people. Send us a message or ask our community on Discord if you run into trouble. We're all on the same team here and we all want you to succeed.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed">
                  <span>02</span> Personalize your Myriade account.
                  <i class="bx bx-chevron-down icon-show"></i>
                  <i class="bx bx-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Before you start mining you have to initialize some key settings. One of which being your preferred mining split. Myriade allows you to be rewarded for your mining in a variety of ways. Before you start, it is important to choose how you wish to be rewarded. This mining allocation is personal to you and should reflect what you want to get out of your time with Myriade. We also have some other personalization options that are less serious but are available to you for fun.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed">
                  <span>03</span> Start Mining
                  <i class="bx bx-chevron-down icon-show"></i>
                  <i class="bx bx-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Once you've chosen your preferred mining split, you are now ready to start mining. The magic of crypto mining is that it is a completely passive process. You could be at school, work, or even sleeping and you will be earning on Myriade. It's a bit like magic. Just make sure you have followed some of the guidelines on the app to make sure the program keeps running when you want it to. Sometimes Windows will enter sleep mode when it doesn't detect mouse movement so you wouldn't want a whole day of mining to go to waste just because you forgot to change your settings around.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" class="collapsed">
                  <span>04</span> Use your Mining Credits
                  <i class="bx bx-chevron-down icon-show"></i>
                  <i class="bx bx-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-4" class="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Now that you've been mining for awhile, you have probably accumulated a fair amount of Mining Credits. You can use your MC to purchase tickets in the game room for gift cards or crypto rewards.
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" class="collapsed">
                  <span>05</span> Withdraw
                  <i class="bx bx-chevron-down icon-show"></i>
                  <i class="bx bx-chevron-up icon-close"></i>
                </a>
                <div id="accordion-list-5" class="collapse" data-bs-parent=".accordion-list">
                  <p>
                    Not your keys, not your crypto. Now that you have mined or won your crypto/gift cards, it is time to withdraw them. All you need to do is head over to the withdraw page and submit a request. The withdrawal process takes up to 24 hours but usually less. We make it as easy as possible for you to get your crypto into your own personal wallet.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img" style="background-image: url('/assets/img/mining-image.png');" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
      </div>
    </div>
  </section>

  <section id="team" class="team section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Testimonials</h2>
        <p>See what long-time Myriade miners are saying about us.</p>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
            <div class="pic col-lg-1">
              <img src="/assets/img/testimonials/Snowman.png" class="img-fluid" alt="">
            </div>
            <div class="member-info">
              <h4>Herosnowman #1658</h4>
              <span>Miner since Sept. 4 2021</span>
              <p>"Myriade has something for everyone. Small miners have a chance to earn more than they usually would by participating in the raffles and big miners can enjoy the low fees."</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
          <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
            <div class="pic col-lg-1">
              <img src="/assets/img/testimonials/Dog.png" class="img-fluid" alt="">
            </div>
            <div class="member-info">
              <h4>Tri #928</h4>
              <span>Miner since May 6 2021</span>
              <t>"Myriade has been a wonderful gateway mining solution for me. Originally I started with my existing computer and after seeing for myself how well it worked for me, someone with far less computer power, I was hooked! Mining isn't just for the big guys now and we can all support the network!"</t>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
            <div class="pic col-lg-1">
              <img src="/assets/img/testimonials/Frog.png" class="img-fluid" alt="">
            </div>
            <div class="member-info">
              <h4>Pulsd #1730</h4>
              <span>Miner Since Sept. 22 2021</span>
              <q>As someone who isn't great with computers, the desktop app is perfect, I can also mine for gift cards which is great for me to get my friends to start mining too. Myriade seems like it's made for beginners.</q>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-4">
          <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
            <div class="pic col-lg-1">
              <img src="/assets/img/testimonials/Bear.png" class="img-fluid" alt="">
            </div>
            <div class="member-info">
              <h4>Dachaz #982</h4>
              <span>Miner Since May 14 2021</span>
              <p>"Myriade makes it easy to explore what cryptomining is all about for gamers -- because even gamers need to sleep! It's got low fees, a fun raffle feature, and much more."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Pool Stats</h2>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-tachometer"></i></div>
            <p>5.015 MH/s</p>
            <h4>Pool Hashrate</h4>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-file"></i></div>
            <p>5,694</p>
            <h4>Total Myriade Miners</h4>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-money"></i></div>
            <p2>10% FRTNE, 0% PPS</p2>
            <h4>Payout Fees</h4>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="bx bx-layer"></i></div>
            <p>0.001 XMR</p>
            <h4>Minimum Withdrawal</h4>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="cta" class="cta">
    <div class="container" data-aos="zoom-in">
      <div class="row">
        <div class="col-lg-9 text-center text-lg-start">
          <h3>Try out our Demo Account!</h3>
          <p>Want to try it out before downloading the app? Try out our demo account and mess around a bit to get a feel for Myriade Mining.</p>
        </div>
        <div class="col-lg-3 cta-btn-container text-center">
          <a class="cta-btn align-middle" href="#">Try Demo</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>About Us</h2>
      </div>
      <div class="row content">
        <div class="col-lg-6">
          <p>
            Myriade is a cryptoasset service company founded in 2019 in Montreal by two university students who were frustrated by the lack of profitability and payout options available in crypto mining. The Myriade mission is "To ensure the development and adoption of better financial technologies." Myriade was the first Mining-Pool to offer "Fortune Mining"; where everyday people can potentially earn as much as the big mining farms.
          </p>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <p>
            The newest released service is the Open Source desktop app which allows for easy and simple mining. There are plans to offer many more services in the future that would make earning, holding, and spending your crypto as easy as possible.
          </p>
          <ul>
            <li><i class="ri-check-double-line"></i> A trusted mining pool with a dedicated group of long-time miners</li>
            <li><i class="ri-check-double-line"></i> Pool operators who actually use the pool every day</li>
            <li><i class="ri-check-double-line"></i> Live support</li>
            <li><i class="ri-check-double-line"></i> Open Source Code</li>
            <a href="https://github.com/myriadeinc" class="btn-learn-more" target="_blank" rel="noopener noreferrer">View our GitHub</a>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="faq section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>Have your Myriade or Monero Mining questions answered here.</p>
      </div>
      <div class="faq-list">
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">What is Myriade? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
              <p>
                Myriade is a crypto asset service company that is for the moment focusing on crypto mining, specifically: Monero (XMR). Though look out, we plan on offering other services in the near future.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="200">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">So... You’re a mining pool... we have plenty of those already.<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
              <p>
                What sets us apart from traditional mining pools is our novel payout methods. Rather than using classic systems, we’re using something completely different. Something we call: Fortune Mining where you can earn gift cards, crypto, or both!
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">How does Fortune Mining work? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
              <p>
                When you sign in and mine on the Myriade mining pool, your account will be credited in Mining Credits (MC), which are proportionally distributed based off your hashing power (similar to current mining pools). To be clear. MCs are NOT a crypto asset in any way, shape, or form. It does not have a set value, it is not mineable. You will be mining on the Monero network, and there will be no scenario where you would be able to pull MC out to an exchange or use it anywhere other than the Myriade ecosystem. Instead, think of MC like tokens at an arcade or credit card rebate points that are exclusively redeemable here.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Why Fortune Mining? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
              <p>
                The goal of Myriade’s Fortune Mining system is to create value from personal gaming computers that aren’t being used during downtime. Myriade allows gamers and people with spare hashing power laying around to put their old and unused devices to use, by creating a potentially profitable means of earning Monero.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Can I convert MC into XMR or XMR into MC <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
              <p>
                No, there is no conversion for XMR and MC at this time.
              </p>
            </div>
          </li>
          <li data-aos="fade-up" data-aos-delay="500">
            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-6" class="collapsed">Will Mining Crypto Damage my PC?<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
            <div id="faq-list-6" class="collapse" data-bs-parent=".faq-list">
              <p>
                No. As long as your PC has proper air flow, then it will be able to mine just fine. If you have ever left your PC accidentally idling on the main menu of a video game for a day without it melting, then it will more than handle mining.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>

<div id="popup-overlay" style="display: none;" class="popup-overlay">
  <div class="popup-box">
    <p>Installation in Progress...</p>
    <div id="spinner"></div>
  </div>
</div>

<footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="https://myriade.io/#/cookies">Cookies Policy</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="https://myriade.io/#/terms">Terms of service</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="https://myriade.io/#/privacy">Privacy policy</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 footer-links">
          <h4>Our Socials</h4>
          <p>Join our online communities and get in touch with other Myriade Miners like you!</p>
          <div class="social-links mt-3">
            <a href="https://twitter.com/myriadeinc" class="twitter" target="_blank" rel="noopener noreferrer"><i class="bx bxl-twitter"></i></a>
            <a href="https://linkedin.com/company/myriade-inc" class="linkedin" target="_blank" rel="noopener noreferrer"><i class="bx bxl-linkedin"></i></a>
            <a href="https://github.com/myriadeinc" class="github" target="_blank" rel="noopener noreferrer"><i class="bx bxl-github"></i></a>
            <a href="https://discord.gg/J9Pn7Dk" class="discord" target="_blank" rel="noopener noreferrer"><i class="bx bxl-discord"></i></a>
            <a href="https://reddit.com/r/MyriadeMining/" class="reddit" target="_blank" rel="noopener noreferrer"><i class="bx bxl-reddit"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container footer-bottom clearfix">
    <div class="copyright">
      &copy; Copyright <strong><span>Myriade Inc.</span></strong> 2019-2024
    </div>
  </div>
</footer>

<div id="preloader"></div>
<script src="/assets/vendor/aos/aos.js"></script>
<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
<script src="/assets/vendor/php-email-form/validate.js"></script>
<script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="/assets/vendor/waypoints/noframework.waypoints.js"></script>
<script src="/assets/js/main.js"></script>
          `,
        }}
      />
    );
  }
}

export default LandingPage;
