import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width="2000" data-natural-height="1000" data-position-y="center">

          <div className="overlay"></div>
          <div className="shadow-overlay"></div>

          <div className="home-content">

              <div className="row home-content__main">

                  {/* <h3>Hi There</h3> */}

                  <h1>
                      Tran Nguyen Quoc Vu
                  </h1>
                  <h3>
                        A Software Engineer
                  </h3>

                  <div className="home-content__buttons">
                      <a href="#works" className="smoothscroll btn btn--stroke">
                          Latest Projects
                      </a>
                      <a href="#about" className="smoothscroll btn btn--stroke">
                          More About Me
                      </a>
                  </div>

                  <div className="home-content__scroll">
                      <a href="#about" className="scroll-link smoothscroll">
                          <span>Scroll Down</span>
                      </a>
                  </div>

              </div>

          </div>

          <ul className="home-social">
              <li>
                  <a href="#"><i className="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
              </li>
              <li>
                  <a href="#"><i className="im im-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
              </li>
              <li>
                  <a href="#"><i className="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
              </li>
              <li>
                  <a href="#"><i className="im im-behance" aria-hidden="true"></i><span>Behance</span></a>
              </li>
              <li>
                  <a href="#"><i className="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
              </li>
          </ul>


        </section>
    );
  }
};


export default Home;