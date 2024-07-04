import React from 'react'
import { Grid } from '@mui/material'
import VideoItem from './VideoItem'

function VideoList({ videos, onVideoSelect }) {
  const listOfVideos = videos.map((video, id) => {
    return (
      <Grid key={id} item xs={12}>
        <VideoItem video={video} onVideoSelect={onVideoSelect} />
      </Grid>
    )
  })
  return (
    <Grid containet spacing={10}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList