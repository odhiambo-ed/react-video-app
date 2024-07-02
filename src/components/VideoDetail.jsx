import React from 'react'
import { Paper, Typography } from '@mui/material'

function VideoDetail() {
  return (
      <React.Fragment>
        <Paper elevation={6} style={{ height: '70%' }}>
            <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src="https://www.youtube.com/embed/..."
            />
      </React.Fragment>
  )
}

export default VideoDetail