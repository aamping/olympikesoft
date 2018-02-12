import React, { Component } from "react";
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const styles = {
  root: {
    flexGrow: 1,
    paddingTop: 130,
    paddingBottom: 130
  },
  grid: {
    marginTop: 30,
    marginBottom: 50
  },
  description: {
    marginLeft: 15,
    marginBottom: 20
  },
  img: {
    height: 300,
    width: 500
  },
  facebook: {
    background: 'url(social-icon-fb.png) no-repeat',
    width: '42px',
    height: '42px',
    display: 'block',
    marginLeft: 20,
    marginRight: 10
  },
  twitter: {
    background: 'url(social-icon-tw.png) no-repeat',
    width: '42px',
    height: '42px',
    display: 'block',
    marginRight: 10
  },
  google: {
    background: 'url(social-icon-google.png) no-repeat',
    width: '42px',
    height: '42px',
    display: 'block',
    marginRight: 10
  },
  youtube: {
    background: 'url(social-icon-youtube.png) no-repeat',
    width: '42px',
    height: '42px',
    display: 'block',
    marginRight: 10
  }
}

function Contact(props) {
  return (
    <div style={{ backgroundColor: props.color}} id='contact'>
      <Grid container
        style={styles.root}
        justify={'center'}
        spacing={0}
      >
        <Typography type="headline" component="h3"> Got Questions?</Typography>
        <Grid container
          spacing={0}
          style={styles.grid}
          justify={'center'}
        >
        <img alt={''} style={styles.img} src={'/map.jpg'} />
          <Grid item>
            <Typography style={styles.description}>
              <p><strong>Centro de Empresas e Inovacccedil;&atilde;o da Madeira - Sala 2 <br /> Madeira Tecnopolo, 1&ordm; Andar <br /> 9020-105 Funchal - Madeira</strong></p>
              <p>Feel free to send us an email, phone us or visit our headquarters.</p>
              <p><img src="http://www.dobsware.com/images/location1.png" alt="email" /> <strong><a href="mailto:email@gmail.com?Subject=Hello%20again">mail@gmail.com</a></strong></p>
              <p><img src="http://www.dobsware.com/images/phone.png" alt="mobile" /> <strong>(+351) 32432432</strong></p>
              <p><img src="http://www.dobsware.com/images/phone2.png" alt="mobile" /> <strong>(+351) 32434343</strong></p>
            </Typography>
            <Grid container direction={'row'} >
              <a href="https://www.facebook.com/"><span style={styles.facebook}></span></a>
              <a href="https://twitter.com/"><span style={styles.twitter}></span></a>
              <a href="https://google.com"><span style={styles.google}></span></a>
              <a href="https://www.youtube.com/"><span style={styles.youtube}></span></a>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
