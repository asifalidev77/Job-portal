"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Avatar, Card, CardContent, Container } from "@mui/material";
const testimonials = [
    {
      name: "Dulce Rosser",
      image: " /user2 (2).png", // Replace with actual image paths
      rating: 5,
      date: "05 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    },
    {
      name: "Zain Schleifer",
      image: "/user1 (1).png",
      rating: 5,
      date: "13 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    },
    {
      name: "Martin Calzoni",
      image: "/user1 (3).png",
      rating: 5,
      date: "23 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    },
  ];
  const Testimonials: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 1 },
          },
        ],
      };  
      return (
        <>
        <Container>
        <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          See That They Say About Us
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2, border:"#CCCCCC" }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Avatar src={testimonial.image} alt={testimonial.name} sx={{ mr: 2 }} />
                  <Box textAlign="left">
                    <Typography fontWeight={600}>{testimonial.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {"⭐".repeat(testimonial.rating)}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="body2" mb={2}>{testimonial.feedback}</Typography>
                  <Typography variant="caption" color="textSecondary" mt="10px">
                    {testimonial.date}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      </Container>
      </>
    );
  };
    
    export default Testimonials;
    