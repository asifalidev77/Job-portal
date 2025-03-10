"use Client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
export default function HeroSection() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "#ffffff",
            minHeight: "60vh",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            width: "100%",
            py: { xs: 4, md: 8 },
            gap: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              textAlign: "left",
              px: { xs: 2, md: 0 },
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
            >
              We Help You Find Your Dream Job
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ my: 3, fontSize: { xs: "14px", md: "16px" } }}
            >
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis autem vel eum iure reprehenderit qui in ea voluptate.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 2,
                alignItems: "center",
                backgroundColor: "#fff",
                p: 2,
                borderRadius: 2,
                boxShadow: 1,
                width: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Job Title or Company"
                variant="outlined"
                size="small"
                sx={{ fontSize: "20px",
                  "& .MuiInputLabel-root": {
      fontSize: "12px", // Label (placeholder) font size
      color: "black", // Placeholder color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray", // Border color
      },
    },
                 }}
              />
              <TextField
                fullWidth
                label="Select Country"
                variant="outlined"
                size="small"
                sx={{ fontSize: "20px",
                  "& .MuiInputLabel-root": {
      fontSize: "12px", // Label (placeholder) font size
      color: "black", // Placeholder color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray", // Border color
      },
    },
                 }}
              ></TextField>
              <Button
                variant="contained"
                size="small"
                sx={{
                  py: "8px",
                  width: { xs: "100%" },
                }}
              >
                Search Job
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "end",
            }}
          >
            {/* <Image
              src={HeroImage}
              alt="Hero Image"
              width={500}
              height={500}
              objectFit="contain"
            /> */}
            <img src="/herosection.png" alt="" />
          </Box>
        </Box>
      </Container>
    </>
  );
}
