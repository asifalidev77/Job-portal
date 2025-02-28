import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Company1 from "../../assets/SVG/Frame 1979.svg";
import Company2 from "../../assets/SVG/Frame 1969.svg";
import Company3 from "../../assets/SVG/Frame 1973.svg";
import Company4 from "../../assets/SVG/Frame 1975.svg";
import Company5 from "../../assets/SVG/Frame 1976.svg";
import Company6 from "../../assets/SVG/Frame 1977.svg";
export default function ExploreCompanies() {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            mt: 5,
            mb: 5,
            width: "100%",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Job By Browsing World Best Companies
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
            I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects 
            
            dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful
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
              Browse All Companies
            </Button>
          </Box>
          <Box sx={{ width: "50%", display: "flex", flexDirection: "column", justifyItems: "end", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "end" }}>
            <Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company1} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box>
            <Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company2} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box><Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company3} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, justifyContent: "end" }}>
            <Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company4} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box>
            <Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company5} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box><Box sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                <Image src={Company6} alt="Company01" width={100} height={100} />
                <Typography variant="h6" fontWeight={600}>
                Corporate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                159 Open Position
                </Typography>
            </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
