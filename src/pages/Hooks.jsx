import React, { useState, useEffect } from "react";
import pic from "../assets/Screenshot.png";
import { Button, Container, Box } from "@mui/material";

const Hooks = () => {
  const [showAd, setShowAd] = useState(false); 

  useEffect(() => {
    const expiryDate = new Date("2024-07-31");
    const currentDate = new Date();

    if (currentDate > expiryDate) {
      setShowAd(false);
    }
  }, []);

  const toggleAd = () => {
    setShowAd(!showAd); 
  };

  return (
    <Container sx={{ textAlign: "center", maxWidth: 1100 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button onClick={toggleAd}>
          {showAd ? "Close Ad" : "Show Ad"}
        </Button>
      </Box>
      {showAd && <img src={pic} alt="ad" style={{ width: "100%" }} />} 
    </Container>
  );
};

export default Hooks;


