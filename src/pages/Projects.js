import React, { Component } from "react";
import Carousel from '../components/Carousel';

const styles = {
  root: {
    paddingTop: 100,
    paddingBottom: 100
  }
}

function Projects(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='projects'>
        <Carousel color={props.color}/>
    </div>
  );
}

export default Projects;
