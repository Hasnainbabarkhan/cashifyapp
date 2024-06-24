import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png";
import img3 from "../assets/product3.png";
import img4 from "../assets/product4.png";
import img5 from "../assets/product5.png";
import img6 from "../assets/product6.png";

export default function PocketCards() {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginLeft: "2%", marginTop: 5 }}
      >
        Better For Pocket. Buy Refurbished
      </Typography>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, flexWrap:'wrap' , gap:'22px'}} 
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img1}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                Is The Refurbished iphone 14 Pro...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img2}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                Things You Can Expect From...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img3}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                4 Reasons You Should Buy The...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Container>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginLeft: "2%", marginTop: 5 }}
      >
       Be Smart. Sell Smart
      </Typography>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, flexWrap:'wrap' , gap:'22px' }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img4}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                iPhone 12 Vs Samsung Galaxy...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img5}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                3 Best Smartphone Upgrades...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="160"
                image={img6}
                alt="green iguana"
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "80%",
                  background:
                    "linear-gradient(to bottom, rgba(128, 128, 128, 0), black)",
                }}
              />

              <Typography
                variant="p"
                style={{
                  position: "absolute",
                  top: 130,
                  left: 10,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  fontSize: "18px",
                }}
              >
                Don’t Let Your Samsung Galaxy...
              </Typography>
            </div>
          </CardActionArea>
        </Card>
      </Container>
    </Container>
  );
}
