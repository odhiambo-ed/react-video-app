import React from 'react'
import { Grid, Paper, Typography} from '@mui/material'

function VideoItem({ video, onSelectVideo}) {
  return (
      <Grid item xs={12}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onSelectVideo(video)} >
          <img alt="thumbnail" style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} />
          <Typography variant="subtitle1"><b>Title</b></Typography>
        </Paper>
    </Grid>
  )
}

export default VideoItem