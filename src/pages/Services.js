import React from 'react';
import MediaCard from '../components/MediaCard';
// import servicesData from '../data/servicesData.json';
import projects from '../data/projects.json';
import { indigo } from 'material-ui/colors';

const styles = {
  root: {
    padding: 20,
    paddingTop: 120,
    paddingBottom: 100,
    backgroundColor: indigo[100],
  }
}

function Services(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='services'>
      <MediaCard data={projects}/>
    </div>
  );
}


export default Services;
