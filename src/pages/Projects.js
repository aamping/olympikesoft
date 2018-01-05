import React, { Component } from "react";
import Swipeable from '../components/Swipeable';

const styles = {
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#E3F2FD'
  }
}

class Projects extends Component {
  render() {
    return (
      <div style={styles.root} id='projects'>
          <Swipeable />
      </div>
    );
  }
}

export default Projects;
