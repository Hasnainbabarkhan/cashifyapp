import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import myLocalImage23 from "../assets/cardProductOne.png";
import myLocalImage24 from "../assets/cardProductTwo.png";
import myLocalImage25 from "../assets/cardProductThree.png";
import myLocalImage26 from "../assets/cardProductFour.png";
import myLocalImage27 from "../assets/cardProductFive.png";
import myLocalImage28 from "../assets/cardProductSix.png";

const products = [
  {
    id: 1,
    title: "Apple 7 - Refurbished",
    rating: 4.5,
    reviews: 361,
    price: 19399,
    originalPrice: 39499,
    monthlyPrice: 969,
    image: myLocalImage23,
  },
  {
    id: 2,
    title: "iPhone 7 - Refurbished",
    rating: 4.6,
    reviews: 200,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage24,
  },
  {
    id: 3,
    title: "iPhone 11 - Refurbished",
    rating: 4.7,
    reviews: 100,
    price: 49999,
    originalPrice: 79999,
    monthlyPrice: 1999,
    image: myLocalImage25,
  },
  {
    id: 4,
    title: "iPhone XR - Refurbished",
    rating: 4.5,
    reviews: 361,
    price: 19399,
    originalPrice: 39499,
    monthlyPrice: 969,
    image: myLocalImage26,
  },
  {
    id: 5,
    title: "Apple Watch ultra 2",
    rating: 4.6,
    reviews: 200,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage27,
  },
  {
    id: 6,
    title: "Apple MacBook Air 2017",
    rating: 4.7,
    reviews: 100,
    price: 49999,
    originalPrice: 79999,
    monthlyPrice: 1999,
    image: myLocalImage28,
  },
];

const ProductCard = ({ product }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Container>
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
          height="200"
          image={product.image}
          alt={product.title}
        />
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            color: "white",
            padding: "2px 8px",
            borderRadius: 1,
            fontSize: "0.75rem",
          }}
        >
          Stock Out Soon
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            {product.title}
          </Typography>
          <Box display="flex" alignItems="center">
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.5}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ marginLeft: 1 }}
            >
              ({product.reviews})
            </Typography>
          </Box>
          <Button
            sx={{
              margin: "5px 0",
              background: "rgb(29 61 147)",
              color: "white",
            }}
          >
            Summer Sale
          </Button>
          <Typography variant="h6" color="textPrimary">
            -{discount}% ₹{product.price.toLocaleString()}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textDecoration: "line-through" }}
          >
            ₹{product.originalPrice.toLocaleString()}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontWeight: "bold" }}
          >
            Effective Price: ₹{product.price.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Box
    {...props}
    sx={{
      position: "absolute",
      left: -35,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    <ArrowBackIosIcon style={{ color: "black", fontSize: "30px" }} />
  </Box>
);

const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Box
    {...props}
    sx={{
      position: "absolute",
      right: -35,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    <ArrowForwardIosIcon style={{ color: "black", fontSize: "30px" }} />
  </Box>
);

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

const Devices = () => {
  return (
    <Container>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 10 }}>
        Explore Refurbished Devices
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "rgb(66, 200, 183)",
          marginTop: 2,
          textAlign: "center",
          borderBottom: "1px solid rgb(0 0 0 / 60%)",
        }}
      >
        Phones | Laptops | SmartWatches
      </Typography>
      <Box sx={{ padding: 2, maxWidth: 1200, margin: "0 auto", marginTop: 2 }}>
        <ProductList />
      </Box>
    </Container>
  );
};

export default Devices;
