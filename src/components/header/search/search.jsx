import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, InputAdornment } from "@mui/material";

export default function Search() {
  return (
    <div>
      <TextField
        variant="standard"
        label="поиск по сайту"
        color="warning"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
