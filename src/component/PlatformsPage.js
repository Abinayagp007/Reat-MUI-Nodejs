import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Slide } from 'react-reveal';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';


// import backgroundImage from 'https://i.pinimg.com/originals/63/d0/6f/63d06f07ae997e1cfe777b77fa95af1f.jpg'; // Adjust the path

const PlatformsPage = () => {
  return (
    <Box
      className="banner_platforms_pages"
      style={{
        backgroundImage: `url(https://image.slidesdocs.com/responsive-images/background/futuristic-3d-rendering-of-pink-blue-and-black-light-pattern-on-dark-gradient-powerpoint-background_08832f8270__960_540.jpg)` ,padding:"20px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '350px', // Adjust the height as needed
        padding: '20px',
        position: 'static', // Ensure relative positioning for absolute child elements
      }}
    >
      <Container maxWidth="lg">
        <div className="domain_wrapper_platforms_pages k-notify">
          <div className="heading_text_block_platforms_pages_k_notify k-notify">
            <div className="div-block-6_services_page">
              {/* <div className="small_banner_title-careers_page">
                <a href="/" className="breadcrum_link">
                  home
                </a>{' '}
                /{' '}
                <a href="/platforms" className="breadcrum_link">
                  platforms
                </a>{' '}
                / k-notify
              </div> */}
              <Rotate top>
              <Typography variant="h2" className="heading_domain_banner-services_page"sx={{color:"whitesmoke", marginTop:"35vh"}}>
                KULADHEIVAM
              </Typography>
              </Rotate>
            </div>
          </div>
          <Slide left>
            <div className="bluish_text_block_platforms_pages k-notify" style={{position:"static"}}>
              <div className="text_heading_and_sub_heading_platforms_pages k-notify">
                <Typography variant="h4" className="secondary_heading_platform_pages mobile k-notify">
                  Digital transformation is the process of using digital technologies to fundamentally change the way a business operates and delivers value to customers.
                </Typography>
                <Typography variant="body1" className="secondary_heading_services_page-copy k-notify">
                  K-Notify is the platform that Kyyba has built that helps business to manage huge volumes of mass communications, whether to your customers, vendors, suppliers, or loyalty members
                </Typography>
              </div>
            </div>
          </Slide>
        </div>
      </Container>
    </Box>
  );
};

export default PlatformsPage;
