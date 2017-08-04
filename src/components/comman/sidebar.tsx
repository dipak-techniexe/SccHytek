import * as React from 'react';

export interface SidebarProps {
}

class Sidebar extends React.Component<SidebarProps, any> {
  render() {
    return (
      <aside className="sidebar col-xs-12 col-md-4">
        <h3>Videos</h3>
        <div className="story">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
            </div>
            <p>HYTEK Steel Frame Solutions have many advantages over timber frames for building and construction: they are lightweight, easy to handle on-site and accurate – they won’t twist or bow. Watch HYTEK steel frames in production.</p>
            <a href="//www.youtube.com/embed/ePbKGoIGAXY" target="_blank">Play Video <i className="fa fa-play"></i></a>
        </div>
        <h3>Builder Testimonial</h3>
        <div className="story">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
            </div>
            <p>HYTEK Steel Frame Solutions have many advantages over timber frames for building and construction: they are lightweight, easy to handle on-site and accurate – they won’t twist or bow. Watch HYTEK steel frames in production.</p>
            <a href="//www.youtube.com/embed/ePbKGoIGAXY" target="_blank">Play Video <i className="fa fa-play"></i></a>
        </div>
        <h3>Customer Testimonial</h3>
        <div className="story">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>
            </div>
            <p>HYTEK Steel Frame Solutions have many advantages over timber frames for building and construction: they are lightweight, easy to handle on-site and accurate – they won’t twist or bow. Watch HYTEK steel frames in production.</p>
            <a href="//www.youtube.com/embed/ePbKGoIGAXY" target="_blank">Play Video <i className="fa fa-play"></i></a>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
