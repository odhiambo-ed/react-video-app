import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import { getYouTubeVideos } from './api/youTube';

function App() {
  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={getYouTubeVideos} /> {/* Ensure the prop name matches */}
          </Grid>
          {/* <Grid>{VideoDetail}</Grid>
                    <Grid>{VideoList}</Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;