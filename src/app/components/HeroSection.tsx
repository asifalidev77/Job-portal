"use Client";
import { Box, Button, Container, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import HeroImage from "../../assets/PNG/herosection.png";
import Image from "next/image";
export default function HeroSection() {
    return (
      <>
      <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "80vh",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        py: { xs: 4, md: 8 },}}>
        <Container maxWidth="xl">
            <Grid container spacing={4} alignItems="center">
            <Grid item xs={6} >
              <Typography variant="h3" sx={{ fontWeight: "bold"}}>
              We Help You Find <br /> Your Dream Job
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Quis <br/> autem vel eum iure reprehenderit qui in ea voluptate.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
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
              />
              <TextField
                fullWidth
                select
                label="Select Country"
                variant="outlined"
                size="small"
              >
              </TextField>
              <Button variant="contained" size="small" >
                Search Job
              </Button>
            </Box>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center", display: "flex", justifyContent: "end"}}>
              <Image
                src={HeroImage}
                alt="Hero Image"
                width={749}
                height={652}
              />
            </Grid>
            
            </Grid>
          </Container>
      </Box>
      </>
    );
  }
  