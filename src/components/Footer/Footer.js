import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="row">
              <div className="col-full">

                  <div className="footer-logo">
                      <a className="footer-site-logo" href="#0"><img src="images/logotransparent.png" alt="Homepage"/></a>
                  </div>

                  <ul className="footer-social text-center">
                      <li><a href="#0">
                          <i className="im im-facebook" aria-hidden="true"></i>
                          <span>Facebook</span>
                      </a></li>
                      <li><a href="#0">
                          <i className="im im-twitter" aria-hidden="true"></i>
                          <span>Twitter</span>
                      </a></li>
                      <li><a href="#0">
                          <i className="im im-instagram" aria-hidden="true"></i>
                          <span>Instagram</span>
                      </a></li>
                  </ul>

              </div>
          </div>

          <div className="row footer-bottom">

              <div className="col-twelve">
                  <div className="copyright">
                      <span>© Copyright Hola 2017</span>
                      <span>Design by <a href="https://www.styleshout.com/">styleshout</a></span>
                  </div>

                  <div className="go-top">
                  <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true"></i></a>
                  </div>
              </div>

          </div>

      </footer>

    );
  }
}

export default Footer;