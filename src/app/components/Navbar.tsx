"use client";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  Work,
  Groups,
  CalendarMonth,
  Menu,
} from "@mui/icons-material";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Home", icon: <Home fontSize="small" /> },
    { text: "Jobs", icon: <Work fontSize="small" /> },
    { text: "Groups", icon: <Groups fontSize="small" /> },
    { text: "Calendar", icon: <CalendarMonth fontSize="small" /> },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              sx={{ color: "black", fontWeight: "bold" }}
            >
              LOGO
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{ display: { xs: "none", md: "flex", gap: 4 }, alignItems: "center" }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    startIcon={item.icon}
                    sx={{ color: "gray", textTransform: "none", fontSize: "0.875rem" }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" sx={{ color: "black", borderColor: "black" }}>
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

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }}>
          <Typography
            variant="h6"
            sx={{ padding: 2, fontWeight: "bold", textAlign: "center" }}
          >
            LOGO
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ textAlign: "center", padding: 2 }}>
            <Button variant="outlined" sx={{ color: "black", borderColor: "black", width: "100%" }}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#007bff", width: "100%", marginTop: 1 }}
            >
              Create an Account
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}