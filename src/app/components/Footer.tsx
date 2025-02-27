import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "white", fontWeight: "bold", fontSize: "36px" }}
        >
          Logo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            sx={{
              input: {
                color: "white", // Text color
                "::placeholder": { color: "white", opacity: 1 }, // Placeholder color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "white", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Border color when focused
                },
              },
            }}
            fullWidth
            placeholder="EmailAddress"
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
    </>
  );
}
