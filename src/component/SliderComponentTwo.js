import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const SliderComponentTwo = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Simulating data for left and right boxes
  const leftBoxes = Array.from({ length: 5 }, (_, index) => `Left Box ${index + 1}`);
  const rightBoxes = Array.from({ length: 5 }, (_, index) => `Right Box ${index + 1}`);

  // Image sources for the slider
  const sliderImages = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
    'https://via.placeholder.com/600x300?text=Slide+4',
    'https://via.placeholder.com/600x300?text=Slide+5',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container sx={{ marginTop: "10px" }}>
      <Grid container spacing={2}>
        {/* Left Boxes */}
        <Grid item xs={3}>
          {leftBoxes.map((box, index) => (
            <Paper key={index} style={{ height: '50px', width: "200px", textAlign: 'center', marginBottom: '10px' }}>
              <Typography variant="h6">{box}</Typography>
            </Paper>
          ))}
        </Grid>

        {/* Middle Slider */}
        <Grid item xs={6} sx={{ marginLeft: "0px" }}>
          <Paper style={{ height: '300px', textAlign: 'center', marginBottom: '10px', overflow: 'hidden' }}>
            <img src={sliderImages[slideIndex]} alt={`Slide ${slideIndex + 1}`} style={{ width: '100%', height: '100%' }} />
          </Paper>
        </Grid>

        {/* Right Boxes */}
        <Grid item xs={3} style={{ marginLeft: 'auto' }}>
          {rightBoxes.map((box, index) => (
            <Paper key={index} style={{ height: '50px', width: "200px", textAlign: 'center', marginBottom: '10px' }}>
              <Typography variant="h6">{box}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SliderComponentTwo;
