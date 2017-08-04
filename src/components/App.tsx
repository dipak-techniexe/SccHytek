import * as React from 'react';
import '../sass/custom.scss'
import Header from './comman/header'
import Main from './comman/main'
import Footer from './comman/footer'

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
