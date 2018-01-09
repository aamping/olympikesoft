import React, { Component } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import slideData from '../data/slideData.json';

function Carousel(props) {
  return (
    <div style={{ position: 'static', width: '100%', height: 500 }}>
      <AutoRotatingCarousel
        label='Get started'
        open={true}
        style={{ position: 'static', backgroundColor: props.color }}
      >
        {slideData.map(slide => (
        <Slide
          media={<img alt={''} src={slide.media} />}
          mediaBackgroundStyle={{backgroundColor: slide.mediaColor}}
          contentStyle={{backgroundColor: slide.backContentColor}}
          title={slide.title}
          subtitle={slide.subtitle}
          textStyle={{ color: slide.textColor }}
        />
        ))}
      </AutoRotatingCarousel>
      </div>
  );
}

export default Carousel;
