import React, { Component } from "react";
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const styles = {
  root: {
    marginTop: 50,
    marginBottom: 50
  },
  description: {
    marginTop: 15,
    width: '40%'
  }
}

class Contact extends Component {
  render() {
    return (
      <Grid container
        style={styles.root}
        alignItems={'center'}
        direction={'column'}
        justify={'center'}
      >
        <Typography type="headline" component="h3"> Got Questions?</Typography>
        <Typography style={styles.description} component="p">Contact us at these details:
        </Typography>
        <Typography style={styles.description} component="p">
    1 mi
    BOULDER RUNNING COMPANY - BOULDER
    2775 PEARL STREET #103 BOULDER, CO 80302 303/786-9255
    3 mi
    FLATIRONS RUNNING INC.
    629 S BROADWAY BOULDER, CO 80305 303-554-7837
        </Typography>
      </Grid>
    );
  }
}

export default Contact;
