import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { animateScroll as scroll } from 'react-scroll';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const styles = {
    button: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 999,
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      // boxShadow: hovering ? '0px 0px 5px 0px rgba(0, 0, 0, 0.2)' : 'none',
    },
    // icon: {
    //   color: '#000000',
    //   fontSize: '15vh',
    //   // fontSize:"Large" 
    // },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <IconButton varient="contained" baseClassName="fas" className="fa-plus-circle" onClick={handleScrollToTop} style={{ position: 'fixed', bottom: '20px', right: '12vh', color:"lightgrey",  }}>
          {/* <ArrowUpward /> */}
          <KeyboardDoubleArrowUpOutlinedIcon style={{fontSize:'3.5rem'}}/>
        </IconButton>
      )}
    </>
  );
};

export default BackToTopButton;




// import React from 'react';
// import { IconButton } from '@mui/material';
// import { ArrowUpward } from '@mui/icons-material';
// import { animateScroll as scroll } from 'react-scroll';
// import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
//  import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { yellow } from '@mui/material/colors';

// const BackToTopButton = () => {
//   const handleScrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <IconButton    color="inherit"  onClick={handleScrollToTop} sx={{ position: 'fixed', bottom: '20px', right: '10px', transform: "scale(2)" }} style={{fontSize:"60",}}>
//       {/* <ArrowUpward /> */}
//       <ArrowCircleUpRoundedIcon  style={{ color: yellow}} />
//       {/* <KeyboardArrowUpRoundedIcon/> */}
//     </IconButton>
//   );
// };

// export default BackToTopButton;