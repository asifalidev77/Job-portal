import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import JobCategories from './components/JobCategories';
import { Grid, Container , Box, Typography, Button
} from "@mui/material";
import JoinOurTeam from './components/JoinOurTeam';
import {
  Brush,
  Code,
  Edit,
  CameraAlt,
  Analytics,
  Storage,
  BusinessCenter,
  Calculate,
} from "@mui/icons-material";
const jobList = [
  { title: "UI/UX Designer", positions: 49, icon: <Brush fontSize="large" /> },
  { title: "Programmer", positions: 159, icon: <Code fontSize="large" /> },
  { title: "Content Writer", positions: 123, icon: <Edit fontSize="large" /> },
  { title: "Photographer", positions: 23, icon: <CameraAlt fontSize="large" /> },
  { title: "Data Analyst", positions: 34, icon: <Analytics fontSize="large" /> },
  { title: "Database Engineer", positions: 55, icon: <Storage fontSize="large" /> },
  { title: "Project Manager", positions: 56, icon: <BusinessCenter fontSize="large" /> },
  { title: "Accounting", positions: 78, icon: <Calculate fontSize="large" /> },
];
export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Container sx={{ mt: 4 }}>
    <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mt: 5, mb: 5 }}>
            Popular Job Categories
                </Typography>
                
          </Box>
         
      <Grid container component={Container} maxWidth="xl" spacing={3} justifyContent="center">
        {jobList.map((job, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <JobCategories title={job.title} positions={job.positions} icon={job.icon} />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
      <Button
        variant="contained"
        sx={
          {
            backgroundColor: "#000000",
            py : '18px',
            px : '25px',
        }}>
          Explore More
        </Button>
        </Box>
    </Container>
    <JoinOurTeam/>
    <Footer/>
    </>
  );
}
