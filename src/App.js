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
import { blue } from 'material-ui/colors';


const styles = {
  div: {
    margin: 0,
    padding: 0
  }
}

class Collect extends Component {
  render() {
    return(
      <div style={styles.div}>
        <Home color={'#29B6F6'}/>
        <Services color={'#26C6DA'}/>
        <Projects color={'#29B6F6'}/>
        <Technologies color={'#26C6DA'}/>
        <Contact color={'#29B6F6'}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={styles.div}>
        <Reboot />
        <Router>
          <ScrollToTop>
            <div>
              <AppBar color={'#212121'}/>
              <Route exact path='/' component={Collect}/>
              <Route path='/services' component={Services}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/technologies' component={Technologies}/>
              <Route path='/contact' component={Contact}/>
              <FooterBar color={'#212121'}/>
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;
