import { useState } from "react";
import { Paper, TextField } from "@mui/material";

function SearchBar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        const videos = await onSubmit(searchTerm);
        console.log("Fetched videos:", videos);
      } catch (error) {
        console.error("Error during video fetch:", error);
      }
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Paper>
  );
}

export default SearchBar;