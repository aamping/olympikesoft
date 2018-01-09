import React from 'react';
import Papers from '../components/Papers';
import papersData from '../data/papersData.json';

const styles = {
  root: {
    padding: 20,
    paddingTop: 120,
    paddingBottom: 100,
  }
}

function Portfolio(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='portfolio'>
      <Papers data={papersData}/>
    </div>
  );
}


export default Portfolio;
