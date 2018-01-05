import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignText: 'center'
  },
  colorPrimary: {
    backgroundColor: '#0D47A1'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function FooterBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar classes={{ colorPrimary: props.classes.colorPrimary}} position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} component="h3">
            Olympikesoft
          </Typography>
          <Button color="contrast" component={Link} to='/'><Typography color="inherit" component="p">Up</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);
