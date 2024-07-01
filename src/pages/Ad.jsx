import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Box } from "@mui/material";
import ad from "../assets/ad.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";

export default function ActionAreaCard() {
  return (
    <Container>
      <Card sx={{ maxWidth: 1200, margin: "auto", marginTop: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ad}
            alt="green iguana"
            sx={{ height: 200 }}
          />
        </CardActionArea>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Our Exclusive Stores
        </Typography>
        <Typography
          sx={{
            color: "rgb(66, 200, 183)",
          }}
        >
          View all stores
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 5
        }}
      >
        <LocationOnIcon
          sx={{
            color: "rgb(66, 200, 183)",
            fontSize: "2.5rem",
            border: "2px solid rgb(247 247 247)",
            borderRadius: 2,
          }}
        />
        <Typography
          sx={{
            marginLeft: 1,
          }}
        >
          200+ Experience Centers
        </Typography>
        <StarIcon
          sx={{
            color: "rgb(66, 200, 183)",
            fontSize: "2.5rem",
            border: "2px solid rgb(247 247 247)",
            borderRadius: 2,
            marginLeft: 5,
          }}
        />
        <Typography
          sx={{
            marginLeft: 1,
          }}
        >
          4.5 Star Ratings
        </Typography>
      </Box>
    </Container>
  );
}
