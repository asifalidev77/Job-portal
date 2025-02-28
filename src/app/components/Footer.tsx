import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0575E6",
          height: "50vh",
          pt: "150px",
          px: "163px",
          container: "xl",
          width: "100%",
          display: "flex",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", fontSize: "36px" }}
          >
            Logo
          </Typography>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", width: "70%" , border: "1px solid white", borderColor: "white", borderRadius: "5px",padding: "5px" }}>
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
            
            width: "40%",
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
          }}
        >
          © 2022 Job Portal. All Rights Reserved. With love by Elmous
        </Typography>
      </Box>
    </>
  );
}
