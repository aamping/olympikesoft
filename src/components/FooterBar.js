import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { indigo } from 'material-ui/colors';

const styles = {
  root: {
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1
  },
  toolbar: {
  },
  button: {
  }
};

function FooterBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: props.color, height: 60 }}  position="static">
        <Toolbar className={classes.toolbar}>
          <Typography type="title" color="inherit" className={classes.title} component="h3">
            Olympikesoft
          </Typography>
          <Button color="contrast" className={classes.button} component={Link} to='/'><Typography color="inherit" component="p">Up</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);
