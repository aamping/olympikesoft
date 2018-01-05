import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import servicesData from '../data/servicesData.json';

const styles = {
  root: {
    marginTop: 70,
    borderSpacing: 50,
    marginBottom: 70
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

function Papers(props) {
  const { data } = props;
  return (
    <Grid container style={{ flexGrow: 1}}>
      <Grid item xs={12}>
        <Grid container
          style={styles.root}
          alignItems={'center'}
          direction={'row'}
          justify={'center'}
          spacing={24}
          >
          {data.map(value => (
            <Grid key={value.title} item>
              <Paper style={styles.paper} elevation={10}>
              <Grid container
                alignItems={'center'}
                direction={'column'}
                justify={'center'}
                >
                <Typography type="headline" component="h3">
                  {value.title}
                </Typography>
                <img alt={''} style={styles.img} src={value.img} />
                <Typography component="p">
                  {value.text}
                </Typography>
                <Button dense raised color="primary" href={value.link} style={styles.button}>
                  {value.button}
                </Button>
                </Grid>
              </Paper>

            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Papers
