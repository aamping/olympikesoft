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
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} component="h3">
            Olympikesoft
          </Typography>
          <Button color="contrast" component={Link} to='/'><Typography color="inherit" component="p">Home</Typography></Button>
          <Button color="contrast" component={Link} to='/services'><Typography color="inherit" component="p">Services</Typography></Button>
          <Button color="contrast" component={Link} to='/projects'><Typography color="inherit" component="p">Projects</Typography></Button>
          <Button color="contrast" component={Link} to='/technologies'><Typography color="inherit" component="p">Technologies</Typography></Button>
          <Button color="contrast" component={Link} to='/contact'><Typography color="inherit" component="p">Contact</Typography></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
