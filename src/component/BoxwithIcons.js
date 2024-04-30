import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "../App.css"
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

const items = [
  {
    label: 'Temples',
    backgroundColor: 'rgb(132, 166, 23)',
    onClick: () => window.open('../hrcehome/temples_search.php?activity=temple_search', '_self'),
    imageSrc: 'https://www.nativeplanet.com/img/2023/04/srikanteshwarananjanguditemple1-1681728701.jpg', // Set the URL of the image
  },
  {
    label: 'Festivals',
    backgroundColor: 'rgb(171, 124, 68)',
    onClick: () => window.open('../hrcehome/hrce-festival-calendar.php', '_self'),
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgS0IfUWbMenMSbHDmHguXkQBV8tbGP3FdlDHeEARTGdVuLO63U6FIA8sSYcDLGrfHNT0&usqp=CAU', // Set the URL of the image
  },
  {
    label: 'Booking',
    backgroundColor: '#03a9f4',
    onClick: () => window.open('../hrcehome/hrce-festival-calendar.php', '_self'),
    imageSrc: 'https://media.istockphoto.com/id/1400766070/vector/online-booking-with-mobile-phone-setting-a-date-on-digital-calendar.jpg?s=1024x1024&w=is&k=20&c=Sb9HBoYnO95zcB2FRtJ6qG_JxB_FejEFg5BYfThHOVs=', 
  },
  {
    label: 'Donation',
    backgroundColor: '#ff4081',
    onClick: () => window.open('../hrcehome/hrce-festival-calendar.php', '_self'),
    imageSrc: 'https://media.istockphoto.com/id/967255466/pt/vetorial/handshake-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=eOeIZj8cEIcDten5z3MDntUECbLn1yyBFeA3X3CL0iQ=', // Set the URL of the image
  },
  {
    label: 'Collection',
    backgroundColor: '#009688',
    onClick: () => window.open('../hrcehome/hrce-festival-calendar.php', '_self'),
    imageSrc: 'https://c8.alamy.com/comp/2A24EKG/calendar-icon-in-trendy-flat-style-isolated-on-grey-background-calendar-symbol-design-logo-app-ui-vector-illustration-2A24EKG.jpg', // Set the URL of the image
  },
  // Add more items with imageSrc for other boxes
];

const BoxWithIcons = () => {
  return (
    <Flip Left>
    <Grid container spacing={2} sx={{alignItems:"center", justifyContent:"center",margin:"5px"}}>
      {items.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={2} style={{ marginTop: 10 }}sx={{'&:hover': {
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-out',
          },}}>
          <Paper
            className="box-container"
            style={{
              
                // appear:{ opacity: 0, transform: 'scale(0.7)' },
                // enter:{ opacity: 1, transform: 'scale(1)' },
                // leave:{ opacity: 0, transform: 'scale(0.5)' }},
              backgroundColor: item.backgroundColor,
              cursor: 'pointer',
              
              // transition: 'transform 0.2s', // Add a smooth hover animation
              display: 'flex', // Make the container a flex container
              alignItems: 'center', // Vertically center the content
              position: 'relative',
              overflow: 'hidden',
            }}
            onClick={item.onClick}
          >
            <div className="institute round_icon" style={{ borderRadius: '50%', overflow: 'hidden', margin:"10px",marginRight: '23px' }}>
              <img src={item.imageSrc} alt={item.label} className="box-image" style={{  marginLeft:"0px",width: '40px', height: '35px', objectFit: 'cover', }} />
            </div>
            <Typography variant="h6">{item.label}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Flip>
  );
};

export default BoxWithIcons;
