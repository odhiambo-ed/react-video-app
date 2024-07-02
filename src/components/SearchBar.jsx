import React from 'react'
import { Paper, TextField } from '@mui/material'

function SearchBar() {
  return (
      <Paper elevation={6} style={{padding: "25px"}}>
          <TextField
              fullWidth
              label="Search..."
              value={ }
              onChange={ }
              onKeyPress = { }
          />
    </Paper>
  )
}

export default SearchBar