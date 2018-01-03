import React, { Component } from "react";
import AutoSlider from '../components/AutoSlider';

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="contentProject">
        <h2>Projects</h2>
          <AutoSlider />
      </div>
    );
  }
}

export default Projects;
