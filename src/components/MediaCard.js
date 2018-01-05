import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes, data } = props;
  return (
    <Grid container
      style={styles.root}
      alignItems={'center'}
      spacing={40}
      direction={'row'}
      justify={'center'}
    >
    {data.map(value => (
      <Grid item key={value}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={value.image}
            title={value.title}
          />
          <CardContent>
            <Typography type="headline" component="h2">
              {value.headline}
            </Typography>
            <Typography component="p">
              {value.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense href={value.website} color="primary">
              Share
            </Button>
            <Button dense href={value.moreinfo} color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
