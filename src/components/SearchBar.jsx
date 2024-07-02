import {useState} from 'react'
import { Paper, TextField } from '@mui/material'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => { 
        setSearchTerm(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(searchTerm)
        }
    }
  return (
      <Paper elevation={6} style={{padding: "25px"}}>
          <TextField
              fullWidth
              label="Search..."
              value={ searchTerm }
              onChange={ handleChange }
              onKeyDown = { handleKeyPress }
          />
    </Paper>
  )
}

export default SearchBar