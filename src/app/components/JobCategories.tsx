import {
    Button,
    Box,
    Typography,
    Container,
  } from "@mui/material";
  import { ReactElement } from "react";
  interface jobProps {
    title: string;
    positions: number;
    icon: ReactElement; // Path to the icon
  }
  export default function JobCategories({title, positions, icon }: jobProps) {
    return (
      <>

      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "0.3s",
        width: { xs: "100%", sm: "280px", md: "250px" }, // Responsive width
        "&:hover": { boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)" },
      }}
      >
        <Box
          sx={{
            backgroundColor: "#007BFF",
            borderRadius: "8px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            color: "white", 
            }}
        >
        {icon}
        </Box>
      <Box>
      <Typography variant="h5" sx={{fontSize: "15px" }}>{title}</Typography>
      <Typography sx={{ fontSize: "14px", color: "gray" }}>{positions} Open Position</Typography>
      </Box>
      </Box>
      </>
      );
      }