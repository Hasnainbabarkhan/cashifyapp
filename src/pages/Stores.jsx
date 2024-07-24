import React from "react";
import Card from "@mui/material/Card";
import { styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CardContent from "@mui/material/CardContent";
import { Typography, Box, Button } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const Stores = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    width: "30%",
    height: "5vh",
    margin: "40px",
    boxShadow: "1px 1px  10px 1px  lightGrey",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));

  return (
    <Card
      sx={{
        maxWidth: 1150,
        background: "rgb(247 247 247)",
        height: 250,
        boxShadow: "none",
        margin: "auto",
        marginBottom: 10,
      }}
    >
      <Search id="search">
        <StyledInputBase
          placeholder="Enter Pin Code"
          inputProps={{ "aria-label": "search" }}
          id="searchInput"
        />
        <ArrowCircleRightRoundedIcon sx={{ marginRight: "10px" }} />
      </Search>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1100",
          justifyContent: "space-around",
          marginRight: "30%",
          gap: "300px",
          flexWrap:'wrap'
        }}
        id='boxStore'
      >
        <Card>
          <CardContent
            sx={{
              maxWidth: 320,
              background: "white",
              position: "absolute",
              border: "1px solid rgb(247 247 247)",
              boxShadow: 3,
              borderRadius: "5px",
            }}
          >
            <Button sx={{ background: "black", color: "white" }}>
              GURGAON
            </Button>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Sushant Lok
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon
            </Typography>
            <Typography
              sx={{
                paddingTop: "10px",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              Timings : 10:00 AM - 09:00 PM
            </Typography>
            <Button
              sx={{ color: "black", fontWeight: "bold", marginTop: "10px" }}
            >
              View Details{" "}
              <EastRoundedIcon
                sx={{ color: "rgb(66, 200, 183)", paddingLeft: "10px" }}
              />
            </Button>
          </CardContent>
        </Card>
        <Card id='lastCard'>
          <CardContent
            sx={{
              maxWidth: 320,
              background: "white",
              position: "absolute",
              border: "1px solid rgb(247 247 247)",
              boxShadow: 3,
              borderRadius: "5px",
            }}
          >
            <Button sx={{ background: "black", color: "white" }}>
              GURGAON
            </Button>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Buy, Sell and Repair Mobile
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank
              market, Gurugram
            </Typography>
            <Typography
              sx={{
                paddingTop: "10px",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              Timings : 10:00 AM - 09:00 PM
            </Typography>
            <Button
              sx={{ color: "black", fontWeight: "bold", marginTop: "10px" }}
            >
              View Details{" "}
              <EastRoundedIcon
                sx={{ color: "rgb(66, 200, 183)", paddingLeft: "10px" }}
              />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent
            sx={{
              maxWidth: 320,
              background: "white",
              position: "absolute",
              border: "1px solid rgb(247 247 247)",
              boxShadow: 3,
              borderRadius: "5px",
            }}
            id='lastCard'
          >
            <Button sx={{ background: "black", color: "white" }}>
              GURGAON
            </Button>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
            >
              Sector-14
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank
              market, Gurugram
            </Typography>
            <Typography
              sx={{
                paddingTop: "10px",
                fontSize: "15px",
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              Timings : 10:00 AM - 09:00 PM
            </Typography>
            <Button
              sx={{ color: "black", fontWeight: "bold", marginTop: "10px" }}
            >
              View Details{" "}
              <EastRoundedIcon
                sx={{ color: "rgb(66, 200, 183)", paddingLeft: "10px" }}
              />
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Card>
  );
};

export default Stores;



