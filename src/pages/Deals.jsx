import { Box, Container, Typography, Card, CardMedia } from "@mui/material";
import img1 from "../assets/deal1.png";
import img2 from "../assets/deal2.png";
import img3 from "../assets/deal3.png";

function Deals() {
  return (
    <Box sx={{ background: "#f3f4f7", marginTop: 6 }}>
      <Container>
        <Typography variant="h5" sx={{ fontWeight: "bold", paddingTop: 5 ,marginLeft: 3}}>
          Hot Deals
        </Typography>
        <Typography sx={{ color: "rgb(112 112 112)", marginLeft:3 }}>
          Exciting offers for more value
        </Typography>
        <Container sx={{maxWidth:1400, marginTop:5, paddingBottom: 5 ,display: 'flex',
              justifyContent:'space-between'}}>
          <Card
            sx={{
              maxWidth: 300,
              border: "none",
              borderRadius: 3,
              marginBottom: "10px",
              boxShadow: 5,
              
            }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
            //   height="100"
              image={img1}
            ></CardMedia>
            </Card>
            <Card sx={{
              maxWidth: 300,
              border: "none",
              borderRadius: 3,
              marginBottom: "10px",
              boxShadow: 5,
              
            }}>
            <CardMedia
              component="img"
              alt="green iguana"
            //   height="100"
              image={img2}
            ></CardMedia>
            </Card>
            <Card sx={{
              maxWidth: 300,
              border: "none",
              borderRadius: 3,
              marginBottom: "10px",
              boxShadow: 5,
              
            }}
            id='lastCard'>
            <CardMedia
              component="img"
              alt="green iguana"
            //   height="100"
              image={img3}
            ></CardMedia>

          </Card>
        </Container>
      </Container>
    </Box>
  );
}
export default Deals;
