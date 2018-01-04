import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import servicesData from '../data/servicesData.json';

const styles = {
  root: {
    marginTop: 50,
    borderSpacing: 50,
    marginBottom: 50
  },
  paper: {
    height: 430,
    width: 330,
    marginRight: 40,
    justify: 'center',
    alignItems: 'center',
    padding: 30
  },
  button: {
    marginTop: 10
  },
  img: {
    height: 150,
    width: 150,
  }
}

function Services(props) {
  return (
    <Grid container style={{ flexGrow: 1}}>
      <Grid item xs={12}>
        <Grid container
          style={styles.root}
          alignItems={'center'}
          direction={'row'}
          justify={'center'}
          spacing={50}
          >
          {servicesData.map(value => (
            <Grid key={value} item>
              <Paper style={styles.paper} elevation={10}>
                <Typography type="headline" component="h3">
                  {value.title}
                </Typography>
                <img alt={''} style={styles.img} src={value.img} />
                <Typography component="p">
                  {value.text}
                </Typography>
                <Button raised color="primary" href={value.link} style={styles.button}>
                  {value.button}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Services;
