




import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@mui/material';
import TempleVideoPlayer from './TempleVideoPlayer';
import OwnVideoPlayer from './OwnVideoPlayer';
import { Link } from 'react-router-dom';
import Home from './Home';
import MyAppBar from './MyAppBar';

// import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundImage: 'url(https://c1.wallpaperflare.com/preview/428/50/356/green-grass-nature-landscape.jpg)',
    backgroundSize: 'cover',
  },
  title: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
       <div
        style={{
          // backgroundImage: 'url("https://w0.peakpx.com/wallpaper/524/202/HD-wallpaper-graphy-india-temple-sun-asian-architecture-architecture-wheels-konark-sun-temple-background-indian-architecture.jpg")', // Replace with your home page background image URL
          // backgroundImage: 'url(" https://i.etsystatic.com/33710523/r/il/9c1976/3946179341/il_300x300.3946179341_cug8.jpg")', // Replace with your home page background image URL

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // minHeight: '80vh',
        }}
      >
        <MyAppBar/>
      {/* <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Link to="/Login">
        <Button color="inherit">Login</Button>
      </Link> */}
          {/* <Button color="inherit">Login</Button> */}

          {/* <IconButton color="inherit" edge="end" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
        {/* </Toolbar> */}
      {/* </AppBar> */}
      <Grid container spacing={3}  sx={{marginTop:"0px",}}> 
        <Grid item xs={12}>
          {/* <TempleVideoPlayer /> */}
          <OwnVideoPlayer/>
          
        </Grid>
      </Grid>
      <Home/>
    </div>
   
    </div>);
};

export default HomePage;



// import React from 'react';
// import { Container, Grid, AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';

// function HomePage() {
//   // State for header menu
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       {/* Background Image */}
//       <div
//         style={{
//           // backgroundImage: 'url("https://c1.wallpaperflare.com/preview/428/50/356/green-grass-nature-landscape.jpg")', // Replace with your background image URL
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           minHeight: '100vh',
//           position: 'relative',
//         }}
//       >
//         <Container sx={{ paddingLeft: 0, paddingRight: 0 }}>
//           {/* Header */}
//           <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//             <Toolbar>
//               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                 My Website
//               </Typography>
//               <div>
//                 <Button
//                   aria-controls="simple-menu"
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                   color="inherit"
//                 >
//                   Dropdown
//                 </Button>
//                 <Menu
//                   id="simple-menu"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem onClick={handleClose}>Option 1</MenuItem>
//                   <MenuItem onClick={handleClose}>Option 2</MenuItem>
//                 </Menu>
//               </div>
//               <div>
//                 <Button
//                   aria-controls="multi-menu"
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                   color="inherit"
//                 >
//                   Multi-dropdown
//                 </Button>
//                 <Menu
//                   id="multi-menu"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem onClick={handleClose}>Option A</MenuItem>
//                   <MenuItem onClick={handleClose}>Option B</MenuItem>
//                   <MenuItem onClick={handleClose}>Option C</MenuItem>
//                 </Menu>
//               </div>
//             </Toolbar>
//           </AppBar>
//           {/* Content */}
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <Typography variant="h4" sx={{ color: 'white', marginTop: '100px' }}>
//                 Welcome to My Website
//               </Typography>
//               <Typography variant="body1" sx={{ color: 'white' }}>
//                 This is a simple example of a home page with a background image and a classy header.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default HomePage;