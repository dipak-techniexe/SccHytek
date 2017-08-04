import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'


class Header extends React.Component<any, any> {
  menu = () =>{
    if(window.innerWidth < 768) { 
      const nav = ReactDOM.findDOMNode(this.refs.nav);
      nav.className === "act" ? nav.className="" : nav.className="act"
    }
  }
  render() {
    return (
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-8">
                <NavLink activeClassName="act" exact to="/community" title="community page link">Community</NavLink>
                <NavLink activeClassName="act" exact to="/contact" title="community page link">Contact</NavLink>
              </div>
              <div className="col-sm-6 col-xs-4 text-right">
                <a href="tel:+91-79-2684 0733" title="contact number +91-79-2684 0733"><i className="fa fa-phone"></i><span> +91-79-2684 0733</span></a>
                <a href="facebook.com" target="_blank"><i className="fa fa-facebook"></i></a> 
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <i className="fa fa-bars" onClick={this.menu}></i>
            </div>
            <div className="col-md-9 col-xs-12">
              <nav ref="nav">
                <ul onClick={this.menu}>
                  <li>
                    <NavLink activeClassName="act" exact to="/" title="home page link">Home</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/about-us" title=" page link">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/steel-framing" title=" page link">Steel Framing</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/benefits" title=" page link">Benefits</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/faqs" title=" page link">Faqs</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/gallery" title="gallery page link">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/contact" title="contact page link">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="act" exact to="/testimonials" title="testimonials page link">Testimonials</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>   
        </div>   
      </header>
    );
  }
}

export default Header;
