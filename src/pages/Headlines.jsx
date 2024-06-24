import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Typography, Container } from "@mui/material";
import img1 from "../assets/motorola.png";
import img2 from "../assets/nokia.png";
import img3 from "../assets/huawei.png";
import img4 from "../assets/hp.png";
import img5 from "../assets/dell.png";
import img6 from "../assets/apple-logo.png";
import img7 from "../assets/social3.png";
import img8 from "../assets/samsung.png";
import img9 from "../assets/oppo.png";
import img10 from "../assets/lenovo.png";

const Headlines = () => {
  return (
    <Box
      sx={{
        background: "rgb(66, 200, 183)",
        padding: "10px 0",
      }}
    >
      <Marquee speed={150}>
        <Container
          sx={{
            minWidth: "100vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src="#" alt="" />
          <img src={img1} alt="" />
          <img src={img4} alt="" />
          <img src={img2} alt="" />
          <img src={img5} alt="" />
          <img src={img10} alt="" />

          <img src={img6} alt="" />
          <img src={img8} alt="" />
          <img src={img7} alt="" />

          <img src={img9} alt="" />
          <img src={img3} alt="" />
        </Container>
      </Marquee>
    </Box>
  );
};

export default Headlines;
