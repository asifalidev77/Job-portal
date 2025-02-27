"use Client";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { Home, Work, Groups, CalendarMonth } from "@mui/icons-material";
export default function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              {" "}
              LOGO{" "}
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex", gap: 4 } , alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 2  }}>
              <Button
                startIcon={<Home fontSize="small" />}
                sx={{
                  color: "gray",
                  textTransform: "none",
                  fontSize: "0.875rem",
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<Work fontSize="small" />}
                sx={{
                  color: "gray",
                  textTransform: "none",
                  fontSize: "0.875rem",
                }}
              >
                Jobs
              </Button>
              <Button
                startIcon={<Groups fontSize="small" />}
                sx={{
                  color: "gray",
                  textTransform: "none",
                  fontSize: "0.875rem",
                }}
              >
                Groups
              </Button>
              <Button
                startIcon={<CalendarMonth fontSize="small" />}
                sx={{
                  color: "gray",
                  textTransform: "none",
                  fontSize: "0.875rem",
                }}
              >
                Calender
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
              >
                Login
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#007bff" }}>
                Create an Account
              </Button>
            </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
