import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#0575E6", width: "100%" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              py: { xs: "50px", md: "100px" },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              justifyContent: "space-between",
            }}
          >
            {/* Left Section */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "28px", md: "36px" },
                  mb: 3,
                }}
              >
                Logo
              </Typography>

              {/* Subscription Box */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  maxWidth: "400px",
                  border: "1px solid white",
                  borderRadius: "5px",
                  padding: "5px",
                  mb: 3,
                }}
              >
                <TextField
                  sx={{
                    flex: 1,
                    input: {
                      color: "white",
                      "::placeholder": { color: "white", opacity: 1 },
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#0575E6" },
                      "&:hover fieldset": { borderColor: "#0575E6" },
                      "&.Mui-focused fieldset": { borderColor: "#0575E6" },
                    },
                  }}
                  fullWidth
                  placeholder="Email Address"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ color: "white" }}>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "#FF601B",
                    color: "#fff",
                    px: "20px",
                    py: "10px",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Subscribe
                </Button>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "18px", md: "24px" },
                  mb: 3,
                }}
              >
                We build startups from zero
              </Typography>

              {/* Contact & Location */}
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4 }}>
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      mb: 1,
                    }}
                  >
                    Contact Us
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "18px" }}>
                    jobportal@example.com <br />
                    +012-324-545-66
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "white", fontSize: "20px", mb: 1 }}>
                    Location
                  </Typography>
                  <Typography sx={{ color: "white", fontSize: "18px" }}>
                    St. Gangnam Uhuy, 8329 NYC
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Section (Links) */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: { xs: "100%", md: "50%" },
                gap: 4,
              }}
            >
              {["Company", "Help", "Jobs"].map((category, index) => (
                <Box key={index} sx={{ minWidth: "120px" }}>
                  <Typography sx={{ color: "white", fontSize: "20px", mb: 1 }}>
                    {category}
                  </Typography>
                  <List sx={{ color: "white", fontSize: "18px" }}>
                    {["About Us", "Why Portal", "Testimonial", "Promotions", "Forum"].map(
                      (item, i) => (
                        <ListItem key={i} sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Bottom Copyright Section */}
      <Box
        sx={{
          backgroundColor: "#0F0F0F",
          py: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "white", fontSize: "15px" }}
        >
          © 2022 Job Portal. All Rights Reserved. With love by Elmous
        </Typography>
      </Box>
    </>
  );
}
