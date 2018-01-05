import React from 'react';
import MediaCard from '../components/MediaCard';
// import servicesData from '../data/servicesData.json';
import projects from '../data/projects.json';

const styles = {
  root: {
    paddingTop: 120,
    borderSpacing: 50,
    paddingBottom: 100,
    backgroundColor: '#BBDEFB'
  }
}

function Services(props) {
  return (
    <div style={styles.root} id='services'>
      <MediaCard data={projects}/>
    </div>
  );
}


export default Services;
