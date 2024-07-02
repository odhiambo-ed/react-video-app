import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          {/* <Grid>{VideoDetail}</Grid>
          <Grid>{VideoList}</Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
