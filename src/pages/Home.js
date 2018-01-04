import React from 'react';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import homeDescription from '../data/homeDescription.json';

const styles = {
  root: {
    marginTop: 50
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
    <Grid container
      style={styles.root}
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
  );
}


export default Home;
