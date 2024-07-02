import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import { getYouTubeVideos } from './api/youTube';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleVideoSelect} />
          </Grid>
          <Grid item xs={12}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          {/* <Grid>{VideoList}</Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;