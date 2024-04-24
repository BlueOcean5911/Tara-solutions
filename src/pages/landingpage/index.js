import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const fadeoutTimeout = setTimeout(() => {
      setShowPreloader(false);
    }, 500);

    return () => clearTimeout(fadeoutTimeout);
  }, []);

  return (
    <div>
      <div className="preloader" style={{ opacity: showPreloader ? 1 : 0, display: showPreloader ? 'block' : 'none' }}>
        <div className="loader">
          <div className="spinner">
            <div className="spinner-container">
              <div className="spinner-rotator">
                <div className="spinner-left">
                  <div className="spinner-circle"></div>
                </div>
                <div className="spinner-right">
                  <div className="spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="/">
                    <img src="assets/images/logo/logo.png" alt="Logo" width="150px" height="80px" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"> </span>
                    <span className="toggler-icon"> </span>
                    <span className="toggler-icon"> </span>
                  </button>

                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="page-scroll active" href="#home">
                          <FormattedMessage id="home" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#features">
                          <FormattedMessage id="features" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          <FormattedMessage id="about" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#footer">
                          <FormattedMessage id="contactUs" />
                        </a>
                      </li>
                      {/*  */}
                    </ul>
                  </div>
                </nav>
                {/* <!-- navbar --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- navbar area --> */}

        <div
          id="home"
          className="header-hero bg_cover"
          style={{
            backgroundImage: "url('assets/images/header/banner-bg.svg')"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="header-hero-content text-center">
                  <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">
                    <FormattedMessage id="homeTitle" />
                  </h3>
                  <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                    <FormattedMessage id="homeSubtitle" />
                  </h2>
                  <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                    <FormattedMessage id="homeDescription" />
                  </p>
                  <a href="/dashboard" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                    <FormattedMessage id="getStarted" />
                  </a>
                </div>
                {/* <!-- header hero content --> */}
              </div>
            </div>
            {/* <!-- row --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                  <img src="assets/images/header/header-hero.png" alt="hero" />
                </div>
                {/* <!-- header hero image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
          <div id="particles-1" className="particles"></div>
        </div>
        {/* <!-- header hero --> */}
      </header>

      <section id="features" className="services-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-40">
                <div className="line m-auto"></div>
                <h3 className="title">
                  <FormattedMessage id="featuresTitle1" />
                  <span>
                    <FormattedMessage id="featuresTitle2" />
                  </span>
                </h3>
              </div>
              {/* <!-- section title --> */}
            </div>
          </div>
          {/* <!-- row --> */}
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <div className="services-icon">
                  <img className="shape" src="assets/images/services/services-shape.svg" alt="shape" />
                  <img className="shape-1" src="assets/images/services/services-shape-1.svg" alt="shape" />
                  <i className="lni lni-baloon"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">
                      <FormattedMessage id="featuresSubtitle1" />
                    </a>
                  </h4>
                  <p className="text">
                    <FormattedMessage id="featuresSubdescription1" />
                  </p>
                </div>
              </div>
              {/* <!-- single services --> */}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="services-icon">
                  <img className="shape" src="assets/images/services/services-shape.svg" alt="shape" />
                  <img className="shape-1" src="assets/images/services/services-shape-2.svg" alt="shape" />
                  <i className="lni lni-cog"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">
                      <FormattedMessage id="featuresSubtitle2" />
                    </a>
                  </h4>
                  <p className="text">
                    <FormattedMessage id="featuresSubdescription2" />
                  </p>
                </div>
              </div>
              {/* <!-- single services --> */}
            </div>
            <div className="col-lg-4 col-md-7 col-sm-8">
              <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                <div className="services-icon">
                  <img className="shape" src="assets/images/services/services-shape.svg" alt="shape" />
                  <img className="shape-1" src="assets/images/services/services-shape-3.svg" alt="shape" />
                  <i className="lni lni-bolt-alt"> </i>
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <a href="javascript:void(0)">
                      <FormattedMessage id="featuresSubtitle3" />
                    </a>
                  </h4>
                  <p className="text">
                    <FormattedMessage id="featuresSubdescription3" />
                  </p>
                </div>
              </div>
              {/* <!-- single services --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      <section id="about">
        {/* <!--====== ABOUT PART START ======--> */}
        <div className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">
                      <span>
                        <FormattedMessage id="aboutTitle1" />
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    <FormattedMessage id="aboutDescription1" />
                  </p>
                </div>
                {/* <!-- about content --> */}
              </div>
              <div className="col-lg-6">
                <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/about/about1.svg" alt="about" />
                </div>
                {/* <!-- about image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
          <div className="about-shape-1">
            <img src="assets/images/about/about-shape-1.svg" alt="shape" />
          </div>
        </div>
        {/* <!--====== ABOUT PART ENDS ======--> */}

        {/* <!--====== ABOUT PART START ======--> */}
        <div className="about-area pt-70">
          <div className="about-shape-2">
            <img src="assets/images/about/about-shape-2.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-last">
                <div className="about-content ms-lg-auto mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">
                      <FormattedMessage id="aboutTitle2" />
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    <FormattedMessage id="aboutDescription2" />
                  </p>
                </div>
                {/* <!-- about content --> */}
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/about/about2.svg" alt="about" />
                </div>
                {/* <!-- about image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!--====== ABOUT PART ENDS ======--> */}

        {/* <!--====== ABOUT PART START ======--> */}
        <div className="about-area pt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title">
                      <span>
                        <FormattedMessage id="aboutTitle3" />
                      </span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    <FormattedMessage id="aboutDescription3" />
                  </p>
                </div>
                {/* <!-- about content --> */}
              </div>
              <div className="col-lg-6">
                <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                  <img src="assets/images/about/about3.svg" alt="about" />
                </div>
                {/* <!-- about image --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
          <div className="about-shape-1">
            <img src="assets/images/about/about-shape-1.svg" alt="shape" />
          </div>
        </div>
        {/* <!--====== ABOUT PART ENDS ======--> */}
      </section>

      {/* <!--====== FOOTER PART START ======--> */}
      <footer id="footer" className="footer-area pt-120">
        <div className="container">
          <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-content mt-45">
                  <h2 className="subscribe-title">
                    <FormattedMessage id="contactUsTitle1" />
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- subscribe area --> */}
          <div className="footer-widget pb-100">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <a className="logo" href="javascript:void(0)">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </a>
                  <p className="text">
                    <FormattedMessage id="contactUsDescription1" />
                  </p>
                  <ul className="social">
                    <li>
                      <a href="https://wa.me/message/IGSA6YHQPVHDB1">
                        <i className="lni lni-whatsapp"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/tarasolutions-cr/">
                        <i className="lni lni-linkedin-original"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61552120787685&mibextid=LQQJ4d">
                        <i className="lni lni-facebook-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/tara_solutions?igshid=OGQ5ZDc2ODk2ZA==">
                        <i className="lni lni-instagram-filled"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- footer about --> */}
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12">
                <div className="footer-link d-flex mt-50 justify-content-sm-between">
                  <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                    <div className="footer-title">
                      <h4 className="title">
                        <FormattedMessage id="contactUsLocationTitle" />
                      </h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a>
                          <FormattedMessage id="contactUsLocation1" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FormattedMessage id="contactUsLocation2" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer wrapper --> */}
                  <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                    <div className="footer-title">
                      <h4 className="title">
                        <FormattedMessage id="contactUsAbout" />
                      </h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a href="https://tarasolutions-cr.com/eng/acerca-de/">
                          <FormattedMessage id="contactUsLink1" />
                        </a>
                      </li>
                      <li>
                        <a href="https://tarasolutions-cr.com/eng/unete-a-nosotros-2/">
                          <FormattedMessage id="contactUsLink2" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer wrapper --> */}
                </div>
                {/* <!-- footer link --> */}
              </div>
              <div className="col-lg-3 col-md-5 col-sm-12">
                <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                  <div className="footer-title">
                    <h4 className="title">
                      {' '}
                      <FormattedMessage id="contactUs" />
                    </h4>
                  </div>
                  <ul className="contact">
                    <li>
                      <FormattedMessage id="contactUsTelephone" />
                    </li>
                    <li>
                      <FormattedMessage id="contactUsMail" />
                    </li>
                    <li>
                      <FormattedMessage id="contactUsWebsite" />
                    </li>
                  </ul>
                </div>
                {/* <!-- footer contact --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- footer widget --> */}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright d-sm-flex justify-content-between">
                  <div className="copyright-content">
                    <p className="text"></p>
                  </div>
                  {/* <!-- copyright content --> */}
                </div>
                {/* <!-- copyright --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- footer copyright --> */}
        </div>
        {/* <!-- container --> */}
        <div id="particles-2"></div>
      </footer>
    </div>
  );
};

export default LandingPage;
