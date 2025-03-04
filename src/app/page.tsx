import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import JobCategories from "./components/JobCategories";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import JoinOurTeam from "./components/JoinOurTeam";
import ExploreCompanies from "./components/ExploreCompanies";
import CreativeJobsFeature from "./components/CreativeJobsFeature";
import Positions from "./components/Positions";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/ViewList";
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
  {
    title: "Photographer",
    positions: 23,
    icon: <CameraAlt fontSize="large" />,
  },
  {
    title: "Data Analyst",
    positions: 34,
    icon: <Analytics fontSize="large" />,
  },
  {
    title: "Database Engineer",
    positions: 55,
    icon: <Storage fontSize="large" />,
  },
  {
    title: "Project Manager",
    positions: 56,
    icon: <BusinessCenter fontSize="large" />,
  },
  { title: "Accounting", positions: 78, icon: <Calculate fontSize="large" /> },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CreativeJobsFeature />
      <Container sx={{ mt: 4 }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mt: 5, mb: 5 }}
          >
            Popular Job Categories
          </Typography>
        </Box>

        <Grid
          container
          component={Container}
          maxWidth="xl"
          spacing={3}
          justifyContent="center"
        >
          {jobList.map((job, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <JobCategories
                title={job.title}
                positions={job.positions}
                icon={job.icon}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000000",
              py: "18px",
              px: "25px",
            }}
          >
            Explore More
          </Button>
        </Box>
      </Container>
      <Container>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", fontSize: "16px", mt: 5 }}
        >
          Showing 20 result of “Development”
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "500", fontSize: "16px", mt: 5, mb: 5 }}
          >
            Based on your preferences
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton sx={{ color: "#0575E6" }}>
                <GridViewIcon />
              </IconButton>
              <IconButton>
                <ListIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Sort by:
              </Typography>
              <Typography
                variant="body2"
                color="#000000"
                sx={{ fontWeight: "bold" }}
              >
                Newest
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "start" },
            gap: { xs: 2, md: 4 },
            flexWrap: { xs: "wrap" }
          }}
        >
          {jobs.map((job, index) => (
            <Positions key={index} {...job} />
          ))}
        </Box>
      </Container>

      <ExploreCompanies />
      <JoinOurTeam />
      {/* <Footer /> */}
    </>
  );
}
const jobs = [
  {
    title: "Front End Developer",
    company: "Spotify Technology",
    description:
      "One of the biggest technology company in the world. We focus on making a big impact.",
    salary: "$80K",
    employmentType: "Fulltime",
    level: "Senior Level",
    isSelected: false,
  },
  {
    title: "Senior UI/UX Designer",
    company: "Google Inc.",
    description:
      "Biggest Technology company in the world needed your skill set to contribute to our company.",
    salary: "$200K",
    employmentType: "Fulltime",
    level: "Senior Level",
    isSelected: true,
  },
  {
    title: "Backend Developer",
    company: "Apple Inc.",
    description:
      "We provide you to expand your skill here. Improve yourself with us and be the best version you",
    salary: "$96K",
    employmentType: "Fulltime",
    level: "Junior Level",
    isSelected: false,
  },
];
