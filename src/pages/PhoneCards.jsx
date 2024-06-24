import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import phone1 from "../assets/phoneOne.webp";
import phone2 from "../assets/phoneTwo.webp";
import phone3 from "../assets/phoneThree.webp";
import phone4 from "../assets/phoneFour.webp";
import phone5 from "../assets/phoneFive.webp";
import phone6 from "../assets/phoneSix.webp";
import phone7 from "../assets/phoneSeven.webp";
import phone8 from "../assets/phoneEight.webp";
import phone9 from "../assets/phoneNine.webp";
import phone10 from "../assets/phoneTen.webp";
import phone11 from "../assets/phoneEleven.webp";
import phone12 from "../assets/phoneTwelve.webp";
import phone13 from "../assets/phoneThirteen.webp";
import phone14 from "../assets/phoneFourteen.webp";
import phone15 from "../assets/phoneFifteen.webp";

export default function ImgMediaCard() {
  return (
    <Container sx={{ padding: 0, fontFamily: "sans-serif" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", paddingBottom: "10px" }}
      >
        Our Services
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" , flexWrap:'wrap'}}
      >
        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="100"
              image={phone1}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="p"
                component="div"
                sx={{ textAlign: "center" }}
              >
                Buy Phone
              </Typography>
            </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone2}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Buy Laptops
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone3}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Repair Phone
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone4}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              New Phone
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone5}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell Phone
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone6}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Nearby Stores
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone7}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Recycle
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone8}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Smartwatches
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", paddingBottom: "10px", paddingTop: "50px" }}
      >
        Sell Your Old Device Now
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" , flexWrap:'wrap'}}
      >
        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone1}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell Phone
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone9}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell Laptop
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone10}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell Tv
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone11}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell Tablet
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone12}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Earbuds
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone13}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Smartwatches
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone14}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              SmartSpeakers
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 200, height: "140px", boxShadow: "none" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="100"
            image={phone15}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Sell More
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Typography variant="h5" sx={{
        fontWeight: 'bold',
        marginTop: 5
      }}>Buy Refurbished Phones</Typography>
    </Container>
  );
}
