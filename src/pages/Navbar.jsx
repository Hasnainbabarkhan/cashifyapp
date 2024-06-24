import { Typography, AppBar } from '@mui/material';
import React from 'react'

function Navbar() {
  return (
    <AppBar  style={{ border:"2px solid red"}}>
        <Typography variant='h1' color={"red"} >NAVBAR</Typography>
        <h1 style={{color:"red"}}>Navbar</h1>
      
    </AppBar>
  )
}
export default Navbar;