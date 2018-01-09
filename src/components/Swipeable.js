import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
}

const Swipeable = (props) => (
  <AutoPlaySwipeableViews>
    {props.data.map(value => (
    <div style={styles.img} ><img alt={''} src={value.img} /></div>
  ))}
  </AutoPlaySwipeableViews>
);

export default Swipeable;
