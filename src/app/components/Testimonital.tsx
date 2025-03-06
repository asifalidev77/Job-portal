"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
const testimonials = [
    {
      name: "Dulce Rosser",
      image: "/user1.jpg", // Replace with actual image paths
      rating: 5,
      date: "05 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Zain Schleifer",
      image: "/user2.jpg",
      rating: 5,
      date: "13 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Martin Calzoni",
      image: "/user3.jpg",
      rating: 5,
      date: "23 September 2022",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        <Box sx={{ textAlign: "center", py: 5 }}>
          <Typography variant="h4" fontWeight={700} mb={3}>
            See That They Say About Us
          </Typography>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} sx={{ mx: 2, p: 3, boxShadow: 3, borderRadius: 2 }}>
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
                  <Typography variant="caption" color="textSecondary">
                    {testimonial.date}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      );
    };
    
    export default Testimonials;
    