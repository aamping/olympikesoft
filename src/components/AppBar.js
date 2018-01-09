import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, {  ListItem, ListItemText  } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { blue } from 'material-ui/colors';
import Hidden from 'material-ui/Hidden';

const styles = {
  flex: {
    flex: 1,
  },
  toolBar: {
    marginRight: 210,
    marginLeft: 170
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    autofocus: true
  },
  active: {
    color: 'black'
  },
  list: {
   width: 250,
   display: 'flex',
   flex: 1
  },
  root: {
    backgroundColor: blue[500]
  },
  titleLarge: {
    flex: 1,
    marginRight: 20
  }
};

class ButtonAppBar extends Component {

  state = {
    navLeft: false
  }

  buttonList(classes) {
    return (
      <div className={classes.list} >
        <List>
          <ListItemText style={{marginLeft: 100}} primary="Menu" />
          <Divider />
          <ListItem button>
            <Link activeClass="active" to='home' spy={true} offset={0} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Home</Typography></Button></Link>
          </ListItem>
          <ListItem button>
            <Link activeClass="active" to='services' spy={true} offset={0} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Services</Typography></Button></Link>
          </ListItem>
          <ListItem button>
            <Link activeClass="active" to='projects' spy={true} offset={0} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Projects</Typography></Button></Link>
          </ListItem>
          <ListItem button>
            <Link activeClass="active" to='technologies' spy={true} offset={60} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Technologies</Typography></Button></Link>
          </ListItem>
          <ListItem button>
            <Link activeClass="active" to='contact' spy={true} offset={80} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Contact</Typography></Button></Link>
          </ListItem>
        </List>
      </div>
    );
  }

  handleOpenDrawer() {
    this.setState({ navLeft: true });
  }

  handleCloseDrawer() {
    this.setState({ navLeft: false });
  }

  mobileScreens = (classes) => {
    return (
      <div>
        <Toolbar>
          <IconButton onClick={this.handleOpenDrawer.bind(this)} className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex} component="h3">
            Olympikesoft
          </Typography>
          {this.buttonList}
        </Toolbar>
        <Drawer classes={{ paper: classes.root }} open={this.state.navLeft} onClose={this.handleCloseDrawer.bind(this)}>
          <Divider />
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleCloseDrawer.bind(this)}
            onKeyDown={this.handleCloseDrawer.bind(this)}
          >
            {this.buttonList(classes)}
          </div>
          <Divider />
        </Drawer>
      </div>

    );
  }

  largeScreens = (classes) => {
    return (
      <Toolbar className={classes.toolBar}>
        <Typography type="title" color="inherit" className={classes.titleLarge} component="h3">
          Olympikesoft
        </Typography>
        <Link activeClass="active" to='home' spy={true} offset={-100} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Home</Typography></Button></Link>
        <Link activeClass="active" to='services' spy={true} offset={-80} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Services</Typography></Button></Link>
        <Link activeClass="active" to='projects' spy={true} offset={-80} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Projects</Typography></Button></Link>
        <Link activeClass="active" to='technologies' spy={true} offset={-80} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Technologies</Typography></Button></Link>
        <Link activeClass="active" to='contact' spy={true} offset={-80} smooth={true} duration={500}><Button color="inherit"><Typography color="inherit" component="p">Contact</Typography></Button></Link>
      </Toolbar>
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: this.props.color }} position="fixed">
          <Hidden smDown>
            {this.largeScreens(classes)}
          </Hidden>
          <Hidden mdUp>
            {this.mobileScreens(classes)}
          </Hidden>
        </AppBar>
      </div>
    );
  }
}



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
