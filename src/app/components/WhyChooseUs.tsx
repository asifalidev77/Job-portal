import {Container, Box,Typography, } from "@mui/material"; 
const features = [
    {
     img:"",
      title: "Special expa rates",
      description: "Very tempting both in terms",
    },
    {
        img:"",
      title: "24/7 Customer services",
      description: "Very tempting both in terms",
    },
    {
        img:"",
      title: "Work life balance",
      description: "Very tempting both in terms",
    },
    {
        img:"",
      title: "No paperwork",
      description: "Very tempting both in terms",
    },
  ];
const WhyChooseUs: React.FC = () => {
{

    return(
        <>
        <Container>
            <Box sx={{
                display: "flex",
               flexDirection:{xs:"column", md:"row"},
               gap: 5,
               justifyContent:"flex-start",
               width: "100%",
               alignItems: "center",
            }}>
                <Box
                sx={
                    {
                        position: "relative",
                        width:{xs:"100%" , md:"50%" },

                    }
                }></Box>
                <Box sx={{
                    width:{xs:"100%" , md:"50%" },
                }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                We Help Not one, But Many Companies
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga
            </Typography>
            <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      > 
      {features.map((feature, index) => (
      <Box>
 key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              textAlign: "center",
              p: 2,
              borderRadius: 2,
            }}
            {feature.icon}
            <Typography variant="h6" fontWeight="bold" mt={2}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
      </Box>
      ))}
      </Box>

                </Box>
            </Box>
        </Container>
        </>
    );
}
export default WhyChooseUs;