import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import ScrollToTop from './components/ScrollToTop';
import AppBar from './components/AppBar';
import FooterBar from './components/FooterBar'
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <Router>
          <ScrollToTop>
            <div>
              <AppBar />
              <Route exact path='/' component={() => <div><Home /><Services /><Projects /><Technologies /><Contact /></div>}/>
              <Route path='/services' component={Services}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/technologies' component={Technologies}/>
              <Route path='/contact' component={Contact}/>
              <FooterBar />
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
