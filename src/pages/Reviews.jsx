import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Dp from "../assets/profile.png";

function Reviews() {
  return (
    <Box
      sx={{
        maxWidth: "fix-content",
        background: "black",
        marginTop: "180px",
        height: "auto",
        paddingBottom:6
      }}
    >
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{ color: "white", fontWeight: "bold", paddingTop: "40px" }}
            variant="h4"
          >
            Trusted by 111.61 Lac + Happy Users and Major <br />
            Brands since 2015
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              gap: "20px",
              marginTop: "50px",
            }}
          >
            <Card
              sx={{
                width: "140px",
                padding: "10px",
                height: "100px",
                background: "linear-gradient(to bottom, Grey, black)",
              }}
              id='lastCard'
            >
              <CurrencyRupeeIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                  border: "3px solid white",
                  borderRadius: "20px",
                  padding: "2px",
                }}
              />
              <Typography
                sx={{ color: "rgb(66, 200, 183)", fontWeight: "bold" }}
                variant="h6"
              >
                8370.67Cr.
              </Typography>
              <Typography
                sx={{ color: "white", fontFamily: "sans-serif" }}
                variant="p"
              >
                Cash Given
              </Typography>
            </Card>
            <Card
              sx={{
                width: "140px",
                padding: "10px",
                height: "100px",
                background: "linear-gradient(to bottom, grey, black)",
              }}
              id='lastCard'
            >
              <PhoneIphoneIcon
                sx={{
                  color: "white",
                  fontSize: "40px",
                }}
              />
              <Typography
                sx={{ color: "rgb(66, 200, 183)", fontWeight: "bold" }}
                variant="h6"
              >
                124.01Lac
              </Typography>
              <Typography
                sx={{ color: "white", fontFamily: "sans-serif" }}
                variant="p"
              >
                Gadgets Encashed
              </Typography>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: 1200,
            marginTop: 8,
            height: "230px",
          }}
        >
          <Card sx={{ width: "350px", padding: "10px" }}>
            <FormatQuoteIcon
              sx={{ fontSize: "50px", color: "rgb(66, 200, 183)" }}
            />
            <Typography>
              Well trained staff. Overall a positive <br />
              experience in selling my phone at <br />
              Cashify.
            </Typography>
            <Box sx={{display: 'flex',marginTop: "35px" , alignItems:'center', gap:'10px'}}>
              <img
                src={Dp}
                alt="profile pic"
                style={{ width: "50px", }}
              />
              <Box>
              <Typography sx={{fontWeight: 'bold'}}>Hasnain Babar Khan</Typography>
              <Typography sx={{color:'rgb(0 0 0 / 60%)', fontSize: '15px'}}>Gilgit Baltistan</Typography>
              </Box>
            </Box>
          </Card>
          <Card sx={{ width: "350px", padding: "10px" }}>
            <FormatQuoteIcon
              sx={{ fontSize: "50px", color: "rgb(66, 200, 183)" }}
            />
            <Typography>
              Sold off my phone very easily and got the <br />
              payment on the spot. Best experience so <br />
              far.
            </Typography>
            <Box sx={{display: 'flex',marginTop: "35px" , alignItems:'center', gap:'10px'}}>
              <img
                src={Dp}
                alt="profile pic"
                style={{ width: "50px", }}
              />
              <Box>
              <Typography sx={{fontWeight: 'bold'}}>Hasnain Babar Khan</Typography>
              <Typography sx={{color:'rgb(0 0 0 / 60%)', fontSize: '15px'}}>Gilgit Baltistan</Typography>
              </Box>
            </Box>
          </Card>
          <Card sx={{ width: "350px", padding: "10px" }} id='lastCard'>
            <FormatQuoteIcon
              sx={{ fontSize: "50px", color: "rgb(66, 200, 183)" }}
            />
            <Typography>
              No complaints, sold my phone very easily <br />
              here. Definitely worth a try.
            </Typography>
            <Box sx={{display: 'flex',marginTop: "60px" , alignItems:'center', gap:'10px'}}>
              <img
                src={Dp}
                alt="profile pic"
                style={{ width: "50px", }}
              />
              <Box>
              <Typography sx={{fontWeight: 'bold'}}>Hasnain Babar Khan</Typography>
              <Typography sx={{color:'rgb(0 0 0 / 60%)', fontSize: '15px'}}>Gilgit Baltistan</Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
export default Reviews;
