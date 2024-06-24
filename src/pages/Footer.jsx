import React from "react";
import { Box, Container, Typography } from "@mui/material";
import logo from "../assets/titleLogo.png";
import social from "../assets/facebooks.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(247 247 247)", marginTop: "20px" }}>
      <Container
        sx={{
          display: "flex",
          paddingBottom: "20px",
          flexShrink: 'shrink',
        }}
      >
        <Container component="div" id="logoComponent">
          <Container
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <img src={logo} alt="logo" />
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "rgb(66, 200, 183)",
                marginTop: "10px",
              }}
            >
              Cashify
            </Typography>
          </Container>
          <Typography variant="h6" sx={{ color: "rgb(170 170 171)" }}>
            Follow us on
          </Typography>
          <img src={social} alt="social icons" />
        </Container>

        <Container component="div">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "rgb(170 170 171)",
              paddingTop: "25px",
            }}
          >
            Services
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Phone{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Television{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Smart Watch{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Speakers{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Camera{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Sell Earbuds{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Repair Phone{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Buy Phone{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Recycle Phone{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Find New Phone{" "}
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Partner With Us
          </Typography>
        </Container>

        <Container component="div">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "rgb(170 170 171)",
              paddingTop: "25px",
            }}
          >
            Company
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            About Us
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Careers
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Articles
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Press Releases
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Become Partner
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Become saler
          </Typography>
        </Container>

        <Container component="div">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "rgb(170 170 171)",
              paddingTop: "25px",
            }}
          >
            Sell Device
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Mobile Phone
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Laptop
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Tablet
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            iMac
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Gaming Consoles
          </Typography>
        </Container>

        <Container component="div">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "rgb(170 170 171)",
              paddingTop: "25px",
            }}
          >
            Help and Support
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            FAQS
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Contact Us
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Warrenty Policy
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Refund Policy
          </Typography>
        </Container>

        <Container component="div">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "rgb(170 170 171)",
              paddingTop: "25px",
            }}
          >
            More Info
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Terms and Conditions
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Terms of Use
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            E-Waste Policy
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Cookie Policy
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            GDPR Compliance
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Refurbished
          </Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
            Device Safety
          </Typography>
        </Container>
      </Container>
      <Box
        sx={{
          backgroundColor: "rgb(247 247 247)",
          borderTop: "2px solid rgb(211 211 211)",
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center", padding: "20px" }}
        >
          Copyright @ 2024 Hasnain Babar All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
