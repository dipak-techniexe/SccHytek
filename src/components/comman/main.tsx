import * as React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about-us'
import SteelFraming from '../steel-framing'
import Benefits from '../benefits'
import Faqs from '../faqs'
import Gallery from '../gallery'
import Contact from '../contact'
import Testimonials from '../testimonials'
import Community from '../community'

export interface MainProps {
}

class Main extends React.Component<any, any> {
  render() {
    return (
      <main className="container-fluid" >
        <div className="row">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/steel-framing" component={SteelFraming} />
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/faqs" component={Faqs} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/community" component={Community} />
        </div>
      </main>
    );
  }
}

export default Main;
