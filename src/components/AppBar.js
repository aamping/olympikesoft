import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1,
  },
  colorPrimary: {
    backgroundColor: '#0D47A1'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    autofocus: true
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar classes={{ colorPrimary: props.classes.colorPrimary}} position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex} component="h3">
            Olympikesoft
          </Typography>
          <Link to='home' spy={true} offset={-100} smooth={true} duration={500}><Button color="contrast"><Typography color="inherit" component="p">Home</Typography></Button></Link>
          <Link to='services' spy={true} offset={-80} smooth={true} duration={500}><Button color="contrast"><Typography color="inherit" component="p">Services</Typography></Button></Link>
          <Link to='projects' spy={true} offset={-80} smooth={true} duration={500}><Button color="contrast"><Typography color="inherit" component="p">Projects</Typography></Button></Link>
          <Link to='technologies' spy={true} offset={-80} smooth={true} duration={500}><Button color="contrast"><Typography color="inherit" component="p">Technologies</Typography></Button></Link>
          <Link to='contact' spy={true} offset={-80} smooth={true} duration={500}><Button color="contrast"><Typography color="inherit" component="p">Contact</Typography></Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
