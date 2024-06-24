import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";

export default function MediaCard() {
  return (
    <Box sx={{ backgroundColor: "rgb(247 247 247)" }}>
      <Typography
        variant="h5"
        color="initial"
        sx={{ fontWeight: "bold",textAlign:'center', paddingTop: "20px" }}
      >
        Trending Articles
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
          paddingBottom: "20px",
          flexWrap:'wrap'
        }}
      >
        {/* article1 */}

        <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={article1}
            title="green iguana"
          />
          <CardContent
            sx={{ backgroundColor: "rgb(247 247 247)", padding: "0" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              How to Get Coursera Courses for Free with Certificates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Coursera is a leading online platform that offers a range of
              Courses courses for free for different subjects and
              specializations. All the courses offered by Coursera are curated
              by university professors from leading colleges like Yale
              University, and Princeton University. These Coursera courses for
              free help to develop a skill set that keeps you ahead…
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              24th May 2024
            </Typography>
          </CardContent>
        </Card>

        {/* article 2 */}

        <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={article2}
            title="green iguana"
          />
          <CardContent
            sx={{ backgroundColor: "rgb(247 247 247)", padding: "0" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              How to Get Coursera Courses for Free with Certificates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Coursera is a leading online platform that offers a range of
              Courses courses for free for different subjects and
              specializations. All the courses offered by Coursera are curated
              by university professors from leading colleges like Yale
              University, and Princeton University. These Coursera courses for
              free help to develop a skill set that keeps you ahead…
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              24th May 2024
            </Typography>
          </CardContent>
        </Card>

        {/* article 3 */}

        <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={article3}
            title="green iguana"
          />
          <CardContent
            sx={{ backgroundColor: "rgb(247 247 247)", padding: "0" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              How to Get Coursera Courses for Free with Certificates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Coursera is a leading online platform that offers a range of
              Courses courses for free for different subjects and
              specializations. All the courses offered by Coursera are curated
              by university professors from leading colleges like Yale
              University, and Princeton University. These Coursera courses for
              free help to develop a skill set that keeps you ahead…
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px", fontWeight: "bold" }}
            >
              24th May 2024
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
