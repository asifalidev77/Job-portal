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
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "50%" },
                backgroundImage: "url('/Group 43627.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "546px",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0575E6",
                  position: "absolute",
                  left: "-30px",
                  top: "30%",
                  p: "30px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "30px",
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
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#fff",
                  }}
                >
                  People got hired
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  position: "absolute",
                  right: "30px",
                  top: "30%",
                  p: "30px",
                  borderRadius: "10px",
                }}
              >
                <Typography>Live</Typography>
                <Typography>
                  Gain extensive connections and <br /> opportunies for success
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        mt: "20px",
                      }}
                    >
                      Join Now
                    </Button>{" "}
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      position: "absolute",
                      backgroundColor: "white",
                      display: "flex",
                      width: "450px",
                      justifyContent: "space-around",
                      borderRadius: "15px",
                      p: "20px",
                      boxShadow: "inherit",
                      alignItems: "center",
                      bottom:"-130%",
                      right: "5%"
                    }}
                  >
                    <img src="/icon5.png" alt="icon05" />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "25px",
                          fontWeight: "500",
                          fontFamily: "Plus Jakarta Sans",
                        }}
                      >
                        UI/UX Designer
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          fontFamily: "Plus Jakarta Sans",
                        }}
                      >
                        159 Open Position
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: "20px",
                      }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Box>
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
