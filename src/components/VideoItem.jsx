import React from 'react'
import { Grid, Paper, Typography} from '@mui/material'

function VideoItem() {
  return (
      <Grid item xs={12}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onSelectVideo(video)} >
          <img alt="thumbnail" style={{ marginRight: '20px' }} />
          <Typography variant="subtitle1"><b>Title</b></Typography>
        </Paper>
    </Grid>
  )
}

export default VideoItem