import React, { Component } from 'react';
import Slider from 'react-slick';
import MediaCard from './MediaCard';
import arrayData from '../data/projects.json';

class AutoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      overflow: 'hidden'
    };
    return (
      <div>
        <Slider {...settings}>
          <div><MediaCard data={arrayData[0]} /></div>
          <div><MediaCard data={arrayData[0]} /></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}

export default AutoSlider;
