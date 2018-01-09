import React, { Component } from "react";
import GridData from '../components/GridData';

const styles ={
  root: {
    paddingTop: 80,
    paddingBottom: 20
  }
}

function Technologies(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='technologies'>
      <GridData color={props.color} />
    </div>
  );
}

export default Technologies;
