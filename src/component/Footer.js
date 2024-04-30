import React from 'react';
import { Container, Grid, Input, Button, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0',position:"static",marginTop:"20rem" }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body1" component="p" style={{ color: 'white' }}>
              <strong>Sign up for our newsletter</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Input type="text" placeholder="Email address" fullWidth variant="outlined" style={{ color: 'white', borderColor: 'white' }} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="outlined" style={{ color: 'white', borderColor: 'white' }}>
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <Link href="https://mdbootstrap.com/" color="inherit" underline="always">
            MDBootstrap.com
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
