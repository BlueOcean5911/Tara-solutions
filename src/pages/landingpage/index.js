import { useEffect, useState } from 'react';
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
      <div className="preloader"  style={{ opacity: showPreloader ? 1 : 0, display: showPreloader ? 'block' : 'none' }}>
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
                  <a className="navbar-brand" href="index.html">
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
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#features">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#facts">
                          Why
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#footer">
                          Contact US
                        </a>
                      </li>
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
                    LMS Analytics
                  </h3>
                  <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                    Analyze studuent performance
                  </h2>
                  <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">
                    You will get good idea from analysis of student performance.
                  </p>
                  <a href="/dashboard" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">
                    Get Started
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
                  Concrete and comprehensive analysis,
                  <span> Comes with everything you need to Analyze!</span>
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
                    <a href="javascript:void(0)">AI</a>
                  </h4>
                  <p className="text">Get predicted performance of student and encourage to get better performance</p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
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
                    <a href="javascript:void(0)">Data Visualization</a>
                  </h4>
                  <p className="text">Anayze all performance and main factor which affect the performance of student</p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
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
                    <a href="javascript:void(0)">Powerful</a>
                  </h4>
                  <p className="text">You can easily predicted value and comprehensive information</p>
                  <a className="more" href="javascript:void(0)">
                    Learn More <i className="lni lni-chevron-right"> </i>
                  </a>
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
                      <span>Artificial Intelligence</span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    AI technology can provide valuable and insightful information to assist you. Whether you need help with student
                    performance, data analysis, or creative tasks, AI is designed to offer comprehensive support and contribute meaningfully
                    to a wide range of endeavors.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
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
                      Comprehensive <span> analysis</span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    Comprehensive analysis involves a deep dive into data and information from multiple angles, providing actionable
                    insights for informed decision-making and continuous improvement. It integrates diverse perspectives to uncover patterns
                    and trends, empowering organizations and individuals with strategic knowledge.amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
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
                      <span>Analyze student performance</span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <p className="text">
                    AI facilitates collaborative learning environments by providing personalized recommendations and adaptive learning
                    experiences, fostering knowledge sharing and skill development among students and educators alike.
                  </p>
                  <a href="javascript:void(0)" className="main-btn">
                    Try it Free
                  </a>
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

      {/* <!--====== VIDEO COUNTER PART START ======--> */}
      <section id="facts" className="video-counter pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last">
              <div className="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                <div className="counter-content">
                  <div className="section-title">
                    <div className="line"></div>
                    <h3 className="title" style={{ marginBottom: '24px' }}>
                      Cool facts <span> about this app</span>
                    </h3>
                  </div>
                  {/* <!-- section title --> */}
                  <ui className="text">
                    Personalized Insights <br />
                    Empowering Educators <br />
                    Data-Driven Approach <br />
                    Student-Centric Focus <br />
                    Continuous Improvement <br />
                  </ui>
                </div>
                {/* <!-- counter content --> */}
                <div className="row no-gutters">
                  <div className="col-4">
                    <div
                      className="
                        single-counter
                        counter-color-1
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <div className="counter-items text-center"></div>
                    </div>
                    {/* <!-- single counter --> */}
                  </div>
                  <div className="col-4">
                    <div
                      className="
                        single-counter
                        counter-color-2
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <div className="counter-items text-center"></div>
                    </div>
                    {/* <!-- single counter --> */}
                  </div>
                  <div className="col-4">
                    <div
                      className="
                        single-counter
                        counter-color-3
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <div className="counter-items text-center"></div>
                    </div>
                    {/* <!-- single counter --> */}
                  </div>
                </div>
                {/* <!-- row --> */}
              </div>
              {/* <!-- counter wrapper --> */}
            </div>
            <div className="col-lg-6">
              <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <img className="dots" src="assets/images/video/dots.svg" alt="dots" />
                <div className="video-wrapper">
                  <div className="video-image">
                    <img src="assets/images/video/video.png" alt="video" />
                  </div>
                  <div className="video-icon">
                    <a href="" className="video-popup glightbox">
                      <i className="lni lni-play"> </i>
                    </a>
                  </div>
                </div>
                {/* <!-- video wrapper --> */}
              </div>
              {/* <!-- video content --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>

      {/* <!--====== FOOTER PART START ======--> */}
      <footer id="footer" className="footer-area pt-120">
        <div className="container">
          <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-lg-6">
                <div className="subscribe-content mt-45">
                  <h2 className="subscribe-title">
                    Subscribe Our Newsletter <span>get reguler updates</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="subscribe-form mt-50">
                  <form action="#">
                    <input type="text" placeholder="Enter eamil" />
                    <button className="main-btn">Subscribe</button>
                  </form>
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
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam.
                  </p>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram-filled"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-linkedin-original"> </i>
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
                      <h4 className="title">Quick Link</h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a href="javascript:void(0)">Road Map</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Refund Policy</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Terms of Service</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Pricing</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- footer wrapper --> */}
                  <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                    <div className="footer-title">
                      <h4 className="title">Resources</h4>
                    </div>
                    <ul className="link">
                      <li>
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Page</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Portfolio</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Blog</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Contact</a>
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
                    <h4 className="title">Contact Us</h4>
                  </div>
                  <ul className="contact">
                    <li>+99999999</li>
                    <li>info@gmail.com</li>
                    <li>www.yourweb.com</li>
                    <li>
                      New York City , United <br />
                      States Of America 750.
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
