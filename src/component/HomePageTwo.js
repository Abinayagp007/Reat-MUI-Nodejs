import React from 'react';
import { Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';

function HomePageTwo() {
  // State for header menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Home Page Background Image */}
      <div
        style={{
          backgroundImage: 'url("https://w0.peakpx.com/wallpaper/524/202/HD-wallpaper-graphy-india-temple-sun-asian-architecture-architecture-wheels-konark-sun-temple-background-indian-architecture.jpg")', // Replace with your home page background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Container>
          {/* Header */}
          <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/12/11/22/42/peacock-feathers-3013486_1280.jpg")', width: '100%' }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Website
              </Typography>
              {/* ... Rest of the code remains the same ... */}
            </Toolbar>
          </AppBar>
          {/* Content */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ color: 'white', marginTop: '100px' }}>
                Welcome to My Website
              </Typography>
              <Typography variant="body1" sx={{ color: 'white' }}>
                This is a simple example of a home page with a background image and a classy header.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default HomePageTwo;
