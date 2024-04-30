import React, { useState, useEffect } from 'react';
import { Container, Switch, FormGroup, FormControlLabel, Box } from '@mui/material';

const TempleVideoPlayer = () => {
  const [muted, setMuted] = useState(false);
  const [player, setPlayer] = useState(null);
  const videoId = 'Wc9tRwJlePQ'; // Replace with your video ID

  useEffect(() => {
    // Load the YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Define callback for when the API is ready
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
      setPlayer(newPlayer);
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.mute();
    setMuted(true);
  };

  const handleMuteToggle = () => {
    if (player) {
      if (muted) {
        player.unMute();
      } else {
        player.mute();
      }
      setMuted(!muted);
    }
  };

  return (
    <Container>
      <div id="youtube-player"></div>
      <Box mt={2}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={muted}
                onChange={handleMuteToggle}
                name="muteToggle"
                color="primary"
              />
            }
            label={muted ? 'Muted' : 'Unmuted'}
          />
        </FormGroup>
      </Box>
    </Container>
  );
};

export default TempleVideoPlayer;



// import React, { useState } from 'react';
// import YouTube from 'react-youtube';
// import { Container, Switch, FormControlLabel } from '@mui/material';

// const TempleVideoPlayer = () => {
//   const [autoplay, setAutoplay] = useState(true);
//   const [videoId, setVideoId] = useState('Wc9tRwJlePQ'); // Replace with your video ID

//   const handleAutoplayToggle = () => {
//     setAutoplay(!autoplay);
//   };

//   return (
//     <Container>
//       <YouTube
//         videoId={videoId}
//         opts={{
//           // height: '360',
//           height: '500',
// width: '100%',
//           playerVars: {
//             autoplay: autoplay ? 1 : 0,
//           },
//         }}
//       />

//       <FormControlLabel
//         control={
//           <Switch
//             checked={autoplay}
//             onChange={handleAutoplayToggle}
//             name="autoplayToggle"
//             color="primary"
//           />
//         }
//         label="Autoplay"
//       />
//     </Container>
//   );
// };

// export default TempleVideoPlayer;
