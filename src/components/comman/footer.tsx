import * as React from 'react';
import { NavLink } from 'react-router-dom'

export interface FooterProps {
}

class Footer extends React.Component<FooterProps, any> {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-xs-12">
              <div className="row">
                <div className="col-sm-5 col-xs-12">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <NavLink to="/" title="home page link">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us" title=" page link">About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/steel-framing" title=" page link">Steel Framing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/benefits" title=" page link">Benefits</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs" title=" page link">Faqs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery" title="gallery page link">Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" title="contact page link">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonials" title="testimonials page link">Testimonials</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-7 col-xs-12">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <a href="tel:01231456789">
                        <i className="fa fa-phone"></i>
                        (012) 314 56789
                      </a>
                    </li>
                    <li>
                        <i className="fa fa-fax"></i>
                        (012) 314 56789
                    </li>
                    <li>
                      <a href="mailto:admin@sccinfrastructure.com">
                        <i className="fa fa-envelope"></i>
                        admin@sccinfrastructure.com
                      </a>
                    </li>
                    <li>
                      <address>
                        <i className="fa fa-map-marker"></i>104, Sumel-­2,<br />
                        Beside Gurudwara Temple<br />
                        S.G.Highway Road,<br />
                        Thaltej, Ahmedabad­-380054<br />
                        Gujarat, INDIA.
                      </address>
                    </li>
                    <li className="social">
                      <a href="facebook.com" target="_blank" className="fa fa-facebook"></a>
                      <a href="linkedin.com" target="_blank" className="fa fa-linkedin"></a>
                      <a href="twitter.com" target="_blank" className="fa fa-twitter"></a>
                      <a href="instagram.com" target="_blank" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-xs-12"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
