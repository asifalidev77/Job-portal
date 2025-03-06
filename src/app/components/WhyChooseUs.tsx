import { Container, Box, Typography, Button } from "@mui/material";
const features = [
  {
    img: "/icon1.png",
    title: "Special expa rates",
    description: "Very tempting both in terms",
  },
  {
    img: "/icon2.png",
    title: "24/7 Customer services",
    description: "Very tempting both in terms",
  },
  {
    img: "icon3.png",
    title: "Work life balance",
    description: "Very tempting both in terms",
  },
  {
    img: "icon4.png",
    title: "No paperwork",
    description: "Very tempting both in terms",
  },
];
const WhyChooseUs: React.FC = () => {
  {
    return (
      <>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              justifyContent: "flex-start",
              width: "100%",
              alignItems: "center",
              my:"40px"
            }}
          >
<Box
  sx={{
    position: "relative",
    width: { xs: "100%", md: "50%" },
    backgroundImage: {xs:"none", lg:"url('/bg1.png')",},
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: { xs: "400px", sm: "500px", md: "546px" }, // Adjust height for different screens
    borderRadius: "15px",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    gap:2,
    justifyContent: "center",
  }}
>
  {/* Left Blue Box */}
  <Box
    sx={{
      backgroundColor: "#0575E6",
      position: { xs: "static", lg: "absolute" },
      left: { xs: "10px", sm: "20px", md: "-30px" },
      top: "30%",
      p: { xs: "15px", sm: "20px", md: "30px" }, // Adjust padding for responsiveness
      borderRadius: "10px",
      textAlign: "center",
      width:{xs:"100%" , lg:"auto"},
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: "20px", sm: "24px", md: "30px" },
        fontWeight: "600",
        fontFamily: "Plus Jakarta Sans",
        color: "#fff",
      }}
    >
      20k+
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        fontWeight: "400",
        fontFamily: "Plus Jakarta Sans",
        color: "#fff",
      }}
    >
      People got hired
    </Typography>
  </Box>

  {/* Right White Box */}
  <Box
    sx={{
      backgroundColor: "#fff",
      position: { xs: "static", lg: "absolute" },
      right: { xs: "10px", sm: "20px", md: "30px" },
      top: "30%",
      p: { xs: "15px", sm: "20px", md: "30px" },
      borderRadius: "10px",
      width:{xs:"100%" , lg:"auto"}, // Dynamic width
      boxShadow: 1,
    }}
  >
    <Typography variant="body1" sx={{ fontWeight: "600" }}>
      Live
    </Typography>
    <Typography variant="body2" sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
      Gain extensive connections and <br /> opportunities for success
    </Typography>
    <Button
      variant="contained"
      sx={{
        mt: "15px",
      }}
    >
      Join Now
    </Button>

    {/* Bottom Job Card */}
  </Box>
  <Box
      sx={{
        position: { xs: "static", lg: "absolute" },
        backgroundColor: "white",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
        alignItems: "center",
        justifyContent: "space-between",
        width:{xs:"100%" , lg:"auto"},
        borderRadius: "15px",
        p: "20px",
        boxShadow: 2,
        bottom: { xs: "5%", sm: "10%", md: "10%" }, // Adjust bottom spacing for different screens
        right: { xs: "5%", sm: "5%" },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <img
        src="/icon5.png"
        alt="icon05"
        style={{ width: "48px", height: "48px" }} // Fixed size
      />
      <Box sx={{ flex: 1, mx: { xs: "10px", sm: "20px" } }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "18px", sm: "22px", md: "25px" },
            fontWeight: "500",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          UI/UX Designer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: "400",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          159 Open Positions
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          mt: { xs: "10px", sm: "0px" },
        }}
      >
        Apply Now
      </Button>
    </Box>
</Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                We Help Not one, But Many Companies
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mt: 4,
                }}
              >
                {features.map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "100%", sm: "50%", md: "50%" },
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      columnGap: 2,
                      mt: 2,
                    }}
                  >
                    <Box>
                      <img
                        src={feature.img}
                        alt="icon01"
                        width={48}
                        height={48}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" fontWeight="500" fontSize="20px">
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
};
export default WhyChooseUs;
