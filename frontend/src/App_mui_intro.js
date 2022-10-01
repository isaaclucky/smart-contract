import { Button,styled, Typography } from "@mui/material";
import React from 'react';
import { Add, Settings } from '@mui/icons-material';

function App() {
  // custom styled button
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:"skyblue",
    color:"#888",
    margin:5,
    "&:hover":{
     backgroundColor: "lightblue"
    },
    "&:disabled":{
     backgroundColor:"gray",
     color:"white",}
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary" size="small">Settings</Button>
      <Button startIcon={<Add />} variant="contained" color="success" size="small">Add New Post</Button>
      <Button variant="outlined" disabled >Outlined</Button>

      <Typography variant="h1" component="h2">
      This is the title of the buttons
      </Typography>;

        <BlueButton>
          My Buttons 1
        </BlueButton>
        <BlueButton>
          My Buttons 2
        </BlueButton>
    </div>
  );
}

export default App   