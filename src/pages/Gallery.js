import React, { Component } from "react";
import Swipeable from '../components/Swipeable';
import swipeableData from '../data/swipeableData.json';

const styles = {
  root: {
    paddingTop: 100,
    paddingBottom: 100
  }
}

function Gallery(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='gallery'>
        <Swipeable color={props.color} data={swipeableData}/>
    </div>
  );
}

export default Gallery;
