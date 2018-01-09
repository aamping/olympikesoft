import React, { Component } from "react";
import Swipeable from '../components/Swipeable';

const styles = {
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#E3F2FD'
  }
}

function Projects(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='projects'>
        <Swipeable color={props.color}/>
    </div>
  );
}

export default Projects;
