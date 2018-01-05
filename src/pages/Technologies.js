import React, { Component } from "react";
import GridData from '../components/GridData';

const styles ={
  root: {
    paddingTop: 80,
    paddingBottom: 70,
    backgroundColor: '#BBDEFB'
  }
}

class Technologies extends Component {
  render() {
    return (
      <div style={styles.root} id='technologies'>
        <GridData />
      </div>
    );
  }
}

export default Technologies;
