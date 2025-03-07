"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const talents = [
  {
    name: "Angel Westervelt",
    image: "/Profile (1).png",
    rating: 4.4,
    role: "UI/UX Designer",
    age: 28,
  },
  {
    name: "Zain Mango",
    image: "/Profile (2).png",
    rating: 4.8,
    role: "UI/UX Designer",
    age: 23,
  },
  {
    name: "Roger Saris",
    image: "/Profile (3).png",
    rating: 4.2,
    role: "UI/UX Designer",
    age: 30,
  },
  {
    name: "Leo Bergson",
    image: "/Profile (4).png",
    rating: 5.0,
    role: "UI/UX Designer",
    age: 25,
  },
];

const TalentSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
    ],
  };

  return (
    <Box sx={{ py: 5, overflow: "hidden", maxWidth: "90%", mx: "auto" }}>
      <Typography variant="h4" fontWeight={700} mb={3} textAlign="center">
        Find The Best Talent
      </Typography>
      <Slider {...settings}>
        {talents.map((talent, index) => (
          <Box key={index} sx={{ px: 2, display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: 320, p: 2, boxShadow: 3, borderRadius: 2, mx: "auto" }}>
              <Box position="relative">
                <Avatar
                  src={talent.image}
                  alt={talent.name}
                  sx={{ width: 280, height: 360, borderRadius: 2 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "#FFC107",
                    color: "#000",
                    px: 1,
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  ⭐ {talent.rating}
                </Box>
              </Box>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  {talent.role}
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  {talent.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {talent.age} Years old
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TalentSlider;
