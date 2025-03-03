"use client";
import { Box, Grid, Typography, Paper, TextField, useMediaQuery, useTheme ,Container} from "@mui/material";
import { FC } from "react";
interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { number: "01", title: "Register Account", description: "First, you need to make an account" },
  { number: "02", title: "Create Resume", description: "Second, create a resume for your job" },
  { number: "03", title: "Find Job", description: "Third, search for an appropriate job" },
  { number: "04", title: "Apply Job", description: "Fourth, apply to the company and wait for acceptance" },
];

const CreativeJobsFeature: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg"> 
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Steps Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
          How Its Work Creative Jobs & Quickly Feature
          </Typography>
          {steps.map((step, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#0575E680",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {step.number}
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Resume Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundImage:"url('/Group 43627.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", }}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight={600} mb={2}>
                Create Your Resume
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Full Name" fullWidth variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Email" fullWidth variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Address" fullWidth variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="ZIP Code" fullWidth variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Experience Job" fullWidth variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Academic School" fullWidth variant="outlined" size="small" />
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};
export default CreativeJobsFeature;