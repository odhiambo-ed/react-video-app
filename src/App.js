import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import { getYouTubeVideos } from './api/youTube';
import { useState } from 'react';
import VideoDetail from './components/VideoDetail';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchSubmit = async (searchTerm) => {
    const videos = await getYouTubeVideos(searchTerm);
    if (videos && videos.length > 0) {
      setSelectedVideo(videos[0]); // Set the first video as the selected video
    }
    return videos; // Return videos for debugging purposes
  };

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSearchSubmit} />
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