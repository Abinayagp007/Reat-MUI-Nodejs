import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  appBar: {
    '&:hover': {
      backgroundColor: '#795548',
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    '&:hover': {
      // color: 'your-hover-color',
      backgroundColor: '#ffb74d !important',
    },
  },
}));

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" sx={{ width: '100%', margin: 'auto' }} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Kuladeivam Website
        </Typography>
        <Link activeClassName="active" to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
                   
                 
        <Button color="inherit" className={classes.button}>
          Home
        </Button>
        </Link>
        <Button color="inherit" className={classes.button}>
          About
        </Button>
        <Button color="inherit" className={classes.button}>
          Services
        </Button>
        <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button color="inherit" className={classes.button}>
            Login
          </Button>
        </Link>
        <IconButton color="inherit" edge="end" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
