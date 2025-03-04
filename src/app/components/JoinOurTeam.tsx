import { Box, Button, Container, Typography } from "@mui/material";
import Team from "../../assets/PNG/jointeam.png";
import Image from "next/image";
export default function JoinOurTeam() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: 5,
            mt: 5,
            mb: 5,
            height: "546px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "546px",
              display: "flex",
              position: "relative",
            }}
          >
            <Image src={Team} alt="Team" layout="fill" objectFit="cover" />

          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" }, }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Begin Your New Journey  With Us
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue
            </Typography>
            <Button
              sx={{
                backgroundColor: "#08111F",
                color: "#fff",
                py: "16px",
                px: "30px",
                mr: "10px",
              }}
              size="small"
            >
              Find A Job
            </Button>
            <Button
              sx={{
                backgroundColor: "#ffffff",
                color: "#08111F",
                py: "16px",
                px: "30px",
                border: "1px solid #08111F",
              }}
              size="small"
            >
              Find A Talent
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
