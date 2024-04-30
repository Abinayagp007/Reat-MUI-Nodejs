// VideoPlayer.js
import React, { useRef, useState } from 'react';
import { Grid, Switch, FormControlLabel } from '@mui/material';
import '../App.css'; // Import a custom CSS file for styling

function OwnVideoPlayer() {
  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        autoPlay={true}
        src="Angkor Wat (Full Episode) _ Access 360 World Heritage.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <Grid container justifyContent="center">
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                checked={!isMuted}
                onChange={toggleMute}
                color="success"
              />
            }
            label={isMuted ? 'Mute' : 'Unmute'}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default OwnVideoPlayer;
