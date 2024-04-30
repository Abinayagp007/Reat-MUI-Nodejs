import React, { useState } from "react";
import { Button, Drawer, Typography } from "@mui/material";

const SideTab = () => {
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);
  const [isTimingsOpen, setTimingsOpen] = useState(false);

  const handleFeedbackClick = () => {
    setFeedbackOpen(true);
  };

  const handleTimingsClick = () => {
    setTimingsOpen(true);
  };

  const handleDrawerClose = () => {
    setFeedbackOpen(false);
    setTimingsOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50vh",
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "5px",
        minWidth: "2px",
      }}
    >
      <Button
        variant="contained"
        onClick={handleFeedbackClick}
        sx={{
          color: "#FFF",
          transform: "rotate(180deg)",
          padding: "5px",
          width: "30px",
          minWidth: "30px",
          textTransform: "none",
        }}
      >
        <Typography
          variant="subtitle3"
          sx={{
            display: "inline-block",
            transform: "rotate(360deg)",
            marginLeft: "5px",
            writingMode: "vertical-lr",
          }}
        >
          Feedback
        </Typography>
      </Button>
      <Button
        variant="contained"
        onClick={handleTimingsClick}
        sx={{
          color: "#FFF",
          marginTop: "5px",
          transform: "rotate(180deg)",
          padding: "5px",
          width: "30px",
          minWidth: "30px",
          textTransform: "none",
        }}
      >
        <Typography
          variant="subtitle4"
          sx={{
            display: "inline-block",
            marginLeft: "5px",
            writingMode: "vertical-lr",
            transform: "rotate(360deg)",
          }}
        >
          Temple Timings
        </Typography>
      </Button>

      <Drawer
        anchor="right"
        open={isFeedbackOpen || isTimingsOpen}
        onClose={handleDrawerClose}
      >
        <div style={{ padding: "20px", width: "250px" }}>
          {isFeedbackOpen && (
            <Typography variant="h6" gutterBottom>
              Feedback Popup
            </Typography>
          )}
          {isTimingsOpen && (
            <Typography variant="h6" gutterBottom>
              Temple Timings Popup
            </Typography>
          )}
          {/* Add your popup content here */}
        </div>
      </Drawer>
    </div>
  );
};

export default SideTab;
