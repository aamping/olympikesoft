import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
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
  // const data = {
  //   title: 'Green Reptile',
  //   image: 'https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg',
  //   headline: 'Lizard',
  //   content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  //   website: 'www.google.com',
  //   moreinfo: 'www.google.com'
  // }
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {data.headline}
          </Typography>
          <Typography component="p">
            {data.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense href={data.website} color="primary">
            Share
          </Button>
          <Button dense href={data.moreinfo} color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
