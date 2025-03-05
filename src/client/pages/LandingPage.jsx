import React, { Component, createRef } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
  }
  
  componentDidMount() {
    // Dynamically add CSS links to document head
    const cssLinks = [
      "/assets/vendor/aos/aos.css",
      "/assets/vendor/bootstrap/css/bootstrap.min.css",
      "/assets/vendor/bootstrap-icons/bootstrap-icons.css",
      "/assets/vendor/boxicons/css/boxicons.min.css",
      "/assets/vendor/glightbox/css/glightbox.min.css",
      "/assets/vendor/remixicon/remixicon.css",
      "/assets/vendor/swiper/swiper-bundle.min.css",
      "/assets/css/style.css"
    ];
    cssLinks.forEach(href => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    });
    
    const container = this.containerRef.current;
    const scriptTags = container.querySelectorAll("script");
    scriptTags.forEach(oldScript => {
      const newScript = document.createElement("script");
      if (oldScript.src) {
        newScript.src = oldScript.src;
        newScript.async = false;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
    });
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        dangerouslySetInnerHTML={{
          __html: `
          <!DOCTYPE html>
          <html lang="en">

          <head>
            <meta charset="utf-8">
            <meta content="width=device-width, initial-scale=1.0" name="viewport">

            <title>Myriade</title>
            <meta content="" name="description">
            <meta content="" name="keywords">
            <meta name="viewport" content= "width=device-width, initial-scale=1.0">

            <!-- Favicons -->
            <link href="assets/img/favicon.png" rel="icon">
            <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

            <!-- Google Fonts -->
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Varela+Round&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

            <!-- Vendor CSS Files -->
            <link href="assets/vendor/aos/aos.css" rel="stylesheet">
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
            <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

            <!-- Template Main CSS File -->
            <link href="assets/css/style.css" rel="stylesheet">

            <script src="assets/js/three.r119.min.js"></script>
            <script src="assets/js/vanta.waves.min.js"></script>

          </head>

          <body>

            <style>
              #hero {
                position: relative !important;
                z-index: 1 !important;
              }

              #hero canvas {
                position: absolute !important;
                top: 0; left: 0; right: 0; bottom: 0;
                width: 100% !important;
                height: 100% !important;
                z-index: -1 !important;
              }

              #hero .container, #main, section, .container {
                position: relative !important;
                z-index: 2 !important;
              }

            </style>

            <!-- ======= Header ======= -->
            <header id="header" class="fixed-top">
              <div class="container-fluid d-flex align-items-center">

                <a href="index.html" class="logo me-auto"><img src="assets/img/Myriade-logo.svg" alt="" class="pull-left"></a>

                <nav id="navbar" class="navbar">
                  <ul>
                    <li><a class="login scrollto" href="#about">Login</a></li>
                    <li><a class="signup scrollto" href="#about">Get Started</a></li>
                  </ul>
                  <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->

              </div>
            </header><!-- End Header -->

            <!-- ======= Hero Section ======= -->
            <section id="hero" class="container-fluid">
              <div class="container mt-3">
                <div class="flex absolute top-00 left-0 bottom-0 right-0 "></div>
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

                <div class="btn-toolbar justify-content-center " data-aos="zoom-in">
                  <button id="download-desktop-app" class="btn btn-download-desktop-app" type="submit" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg> Download Desktop App
                  </button>
                </div>
                <div class="btn-toolbar justify-content-center" data-aos="zoom-in">
                  <button class="btn btn-advanced-mining  justify-content-center mx-auto " type="button" onclick="window.location.href='https://github.com/xmrig/xmrig'">Advanced Mining (XMRIG)</button>
                </div>

                <div style="margin-bottom:500px"></div>
              </div>
            </section><!-- End Hero -->

            <div class="row col-9 d-flex justify-content-center mx-auto ">
              <div class="hero-img ">
                <img src="assets/img/app.png" class="img-fluid mx-auto justify-content-center d-flex img-responsive">
              </div>  
            </div>

            <main id="main">
              <!-- Section content -->
              <!-- ... (Remaining content sections here) -->
            </main><!-- End #main -->

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
            </footer><!-- End Footer -->

            <div id="preloader"></div>
            <!-- Vendor JS Files -->
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>

            <!-- Template Main JS File -->
            <script src="assets/js/main.js"></script>

            <!-- Chatra widget code -->
            <script>
              window.ChatraSetup = {
                  colors: {
                      buttonText: '#f0f0f0', /* chat button text color */
                      buttonBg: '#f68600', /* chat button background color */
                  },
              }
              ;(function (d, w, c) {
                  w.ChatraID = 'kzQzfDagyXR78mcF3'
                  var s = d.createElement('script')
                  w[c] =
                      w[c] ||
                      function () {
                          ;(w[c].q = w[c].q || []).push(arguments)
                      }
                  s.async = true
                  s.src = 'https://call.chatra.io/chatra.js'
                  if (d.head) d.head.appendChild(s)
              })(document, window, 'Chatra')
            </script>
            <script>
            VANTA.WAVES({
            el: "#hero",
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x31355,
            shininess: 15.00,
            waveHeight: 23.00,
            waveSpeed: 0.2,
            zoom: 1.10
            })
            </script>
          </body>
          </html>
          `,
        }}
      />
    );
  }
}

export default LandingPage;
