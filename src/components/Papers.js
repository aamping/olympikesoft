import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = {
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
    <Grid container
      alignItems={'center'}
      spacing={20}
      direction={'row'}
      justify={'center'}
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
  )
}

export default Papers
