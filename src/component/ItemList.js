import React from 'react';
import { Tooltip, Link, IconButton, Paper, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../App.css";

const socialMediaLinks = [
  { name: 'INSTAGRAM', url: 'https://www.instagram.com', icon: InstagramIcon, color: 'white', titleBackgroundColor: '#d81b60', contentBackgroundColor: '#f50057',iconColor:'#d81b60' },
  { name: 'FACEBOOK', url: 'https://www.facebook.com', icon: FacebookIcon, color: 'white', titleBackgroundColor: '#0d47a1', contentBackgroundColor: '#3f51b5',iconColor:'#0d47a1' },
  { name: 'TWITTER', url: 'https://twitter.com', icon: TwitterIcon, color: 'white', titleBackgroundColor: '#00b0ff', contentBackgroundColor: '#2196f3' , iconColor:'#00b0ff'},
  { name: 'YOUTUBE', url: 'https://www.youtube.com', icon: YouTubeIcon, color: 'white', titleBackgroundColor: '#b71c1c', contentBackgroundColor: '#d50000',iconColor:'#b71c1c' },
];

const ItemList = () => {
  const iconSize = 60; // Adjust the size as needed

  const StyledIconButton = ({ icon, color }) => (
    <IconButton
      sx={{
        fontSize: iconSize,
        color: color,
        
        // transition: 'all 10s ease-out',
        '&:hover': {
          color: 'black',
          transition: 'all 10s ease-out',
        },
      }}
    >
      {React.createElement(icon)}
    </IconButton>
  );

  return (
    <div style={{ position: 'fixed', top: '70%', right: '-12%', transform: 'translateY(-30%)' }}>
    <ul style={{ width: "200px", padding: 0, display: 'flex', flexDirection: 'column' }}>
      {socialMediaLinks.map((link, index) => (
        <li key={index} style={{ display: 'inline-flex',alignItems: 'center', marginBottom: 4 }}>
          {/* <Tooltip
            title={link.name}
            placement="right"
            padding="3px"
            PopperProps={{
              sx: {
                '& .MuiTooltip-tooltip': {
                 padding:'12px',
                 textAlign: "center",
fontWeight:"bold",
                 width:"100px",
                 fontSize:"16px",
            
                  backgroundColor:
                   link.titleBackgroundColor, // Set the background color of the tooltip title
                  animation: 'slide-in 5s @keyframes slide-in{from {marginRight: 100%}to {marginRight: 0%} ', // Add the animation
               
                transform: 'scale(1.1)',
                  transition: 'transform  0.5s ease-in-out '
                },
                '& .MuiTooltip-arrow': {

                    // transform: 'scale(5)',
                    transform: 'scale(1.1)',
                    
                    transition: 'transform  0.5s ease-in-out ',
                  backgroundColor: link.titleBackgroundColor, // Set the background color of the tooltip arrow
                },
              },
            }}
          > */}

<Tooltip
  title={link.name}
  placement="left"
  PopperProps={{
    sx: {
      '& .MuiTooltip-tooltip': {
        width: 'auto',
        animation: 'openTooltip 1s ease-in-out',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        backgroundColor: link.titleBackgroundColor, // Set the background color of the tooltip title
      },
      '& .MuiTooltip-arrow': {
        transform: 'scale(1.1)',
        transition: 'transform 1s ease-in-out',
        backgroundColor: link.titleBackgroundColor, // Set the background color of the tooltip arrow
      },
    },
  }}
>
    
  {/* Your tooltip trigger content */}


             
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <Paper
                elevation={3}
                sx={{
                   backgroundColor:link.iconColor,
                  padding: '2px',
                  display: 'inline-flex',
                  borderRadius: '50%',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-out',
                    backgroundColor: link.contentBackgroundColor // Set the background color of the tooltip content on hover
                  },
                }}
              >
                <StyledIconButton icon={link.icon} color={link.color} />
              </Paper>
            </Link>
          </Tooltip>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ItemList;