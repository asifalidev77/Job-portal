import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Container
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Footer() {
  return (
<>      
    <Box
      sx={{
        backgroundColor: "#0575E6",
      }}>
    <Container maxWidth="lg"
  >
      <Box
        sx={{
          py:"150px",
          width: "100%",
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" },}}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", fontSize: "36px", mb:3 }}
          >
            Logo
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", width: "70%" , border: "1px solid white", borderColor: "white", borderRadius: "5px",padding: "5px" , mb:3}}>
            <TextField
              sx={{
                input: {
                  color: "white", // Text color
                  "::placeholder": { color: "white", opacity: 1 }, // Placeholder color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#0575E6", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#0575E6", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0575E6", // Border color when focused
                  },
                },
              }}
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: "white" }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "#FF601B",
                color: "#fff",
                py: "16px",
                px: "30px",
              }}
              size="small"
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: "24px",
              fontWeight: "normal",
              fontFamily: "Plus Jakarta Sans",
               mb:3,
            }}
          >
            We build startups from zero
          </Typography>
          <Box sx={{ display: "flex", gap: 4 }}>
            <Box>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "20px",
                  fontFamily: "Plus Jakarta Sans",
                   mb:3,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "18px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                jobportal@example.com <br />
                +012-324-545-66
              </Typography>
            </Box>
            <Box>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "20px",
                  fontFamily: "Plus Jakarta Sans",
                  mb:3,
                }}
              >
                Location
              </Typography>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: "18px",
                  fontFamily: "Plus Jakarta Sans",
                }}
              >
                St. Gangnam Uhuy, 8329 NYC
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            
            width: { xs: "100%", md: "50%" },
                        justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              component="p"
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "20px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Company
            </Typography>
            <List
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "18px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Why Portal" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Testimonial" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Promotions" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Forum" />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "20px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Help
            </Typography>
            <List
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "18px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Why Portal" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Testimonial" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Promotions" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Forum" />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              component="p"
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "20px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Jobs
            </Typography>
            <List
              sx={{
                color: "white",
                fontWeight: "normal",
                fontSize: "18px",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Why Portal" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Testimonial" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Promotions" />
              </ListItem>
              <ListItem sx={{ paddingLeft: 0, paddingY: 0, marginY: 0 }}>
                <ListItemText primary="Forum" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

      </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0F0F0F",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          container: "xl",
          width: "100%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: "normal",
            fontSize: "15px",
            fontFamily: "Plus Jakarta Sans",
            textAlign: "center"
          }}
        >
          © 2022 Job Portal. All Rights Reserved. With love by Elmous
        </Typography>
      </Box>
    </>
  );
}
