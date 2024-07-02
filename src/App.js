import './App.css';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid>
          {/* <Grid>{SearchBar}</Grid>
          <Grid>{VideoDetail}</Grid>
          <Grid>{VideoList}</Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
