import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import homeDescription from '../data/homeDescription.json';
import { indigo } from 'material-ui/colors';

const styles = {
  root: {
    paddingTop: 120,
    paddingBottom: 70
  },
  img: {
    height: 200,
    width: 200
  },
  description: {
    marginTop: 15,
    width: '40%'
  }
}

function Home(props) {
  return (
    <div style={{...styles.root, backgroundColor: props.color}} id='home'>
      <Grid container
        spacing={0}
        alignItems={'center'}
        direction={'column'}
        justify={'center'}
      >
        <img alt={''} style={styles.img} src={homeDescription.img} />
        <Typography type="headline" component="h3">
          {homeDescription.title}
        </Typography>
        <Typography style={styles.description} component="p">
          {homeDescription.description}
        </Typography>
      </Grid>
    </div>
  );
}


export default Home;
