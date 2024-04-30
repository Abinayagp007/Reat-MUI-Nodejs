import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography, Divider } from "@mui/material";
import { Bounce, Slide } from 'react-reveal';
import Flip from 'react-reveal/Flip';

const SliderComponent = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const leftBoxes = [
    { name: "Poosari Welfare", color: "#26a69a" },
    { name: "Temple function Live", color: "#ff4081" },
    { name: "360 Dgree View", color: "#66bb6a" },
    { name: "Thirupani Experts Approval", color: "#03a9f4" },
    { name: "Magazines", color: "#ff5252" },
    { name: "Distirict Commitee DetailMagazines", color: "#ffd54f" },
  ];

  const rightBoxes = [
    { name: "Postal Prasadam", color: "#26a69a" },
    { name: "Public Grievances", color: "#ff4081" },
    { name: "Temple Lands", color: "#66bb6a" },
    { name: "Donar Registration", color: "#03a9f4" },
    { name: "Trusteeship Application", color: "#ff5252" },
    { name: "Land Retrieval Information", color: "#ffd54f" },
  ];

  const sliderImages = [
    "https://st1.latestly.com/wp-content/uploads/2022/10/62-2-3.jpg",
    "https://wallpaperaccess.com/full/6262494.jpg",
    "https://live.staticflickr.com/854/43955401221_37205bd7d6_b.jpg",
    "https://previews.123rf.com/images/spukkato/spukkato1710/spukkato171000209/88351295-happy-diwali-diya-lamps-lit-with-bokeh-background-during-diwali-celebration.jpg",
    "https://wallpapers.com/images/featured/lord-murugan-pictures-qt27ip8283ndjs19.jpg",
  ];

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % 5);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Bounce Left>
    <Container sx={{ marginTop: "30px", alignItems: "center" }}>
      <Typography variant="h5" sx={{ marginBottom: "5px", textAlign: "center" }}>
        Hindu Religious & Charitable Endowments
      </Typography>
      <Divider
        sx={{
          height: "2px",
          width: "500px",
          marginLeft: "53vh",
          alignItems: "center",
          background: "linear-gradient(to right, #ff8a00, #da1b60)",
          marginBottom: "20px",
        }}
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          {leftBoxes.map((box, index) => (
            <Paper
              key={index}
              style={{
                height: "50px",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                backgroundColor: box.color,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3, 0.4)",
              }}
            >
              <Typography variant="h9" sx={{'&:hover': {
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-out',
          }}}>{box.name}</Typography>
            </Paper>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            style={{
              height: "350px",
              textAlign: "center",
              marginBottom: "10px",
              overflow: "hidden",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={sliderImages[slideIndex]}
              alt={`Slide ${slideIndex + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          {rightBoxes.map((box, index) => (
            <Paper
              key={index}
              style={{
                height: "50px",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                backgroundColor: box.color,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3, 0.4)",
              }}
            >
              <Typography variant="h9" sx={{'&:hover': {
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-out',
          }}}>{box.name}</Typography>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Container>
    </Bounce>
  );
};

export default SliderComponent;
