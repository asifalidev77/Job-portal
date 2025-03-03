import { Typography, Box, Button, } from "@mui/material";
interface JobCardProps {
    title: string;
    company: string;
    description: string;
    salary: string;
    employmentType: string;
    level: string;
    isSelected?: boolean;
  }
const Positions: React.FC<JobCardProps> = ({
    title,
    company,
    description,
    salary,
    employmentType,
    level,
    isSelected = false,
  }) => {
    return (
        <>
            <Box
      sx={{
        width: "33%",
        padding: 3,
        borderRadius: 3,
        border: isSelected ? "1px solid blue" : "none",
        backgroundColor: "#fff",
        transition: "0.3s",
      }}
    >
        <Box sx={{ my: 2, }}> 
            <img src="/company logo.png" alt="company logo" height={92.52} width={92.52} />
        </Box>
        <Typography variant="h6" fontWeight={500} sx={{ fontSize: "16px" }}>
        {title}
      </Typography>
      <Typography variant="body2" color="#999FA9" sx={{ fontSize: "12px" }}>
        {company}
      </Typography>
      <Typography variant="body2" sx={{ my: 3, fontSize: "12px", fontWeight: 400 }}>
        {description}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 , width: "80%"}}>
        Apply
      </Button>
      <Box sx={{ display: "flex", justifyContent: "start", gap: 1, mt: 2 }}>
      <Button variant="contained" color="primary" sx={{ mt: 1 , width: "40%", backgroundColor:"#F0F6FF", color:"#0061FF", py: "15px", px: "20px", borderRadius: 0, fontSize: "10px"}}>
        {employmentType}
      </Button>
      <Button variant="contained" sx={{ mt: 1 , width: "40%", backgroundColor:"#F0F6FF", color:"#0061FF", py: "15px", px: "20px", borderRadius: 0, fontSize: "10px"}}>
       {level}
      </Button>
      </Box>
      <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
        {salary} <Typography component="span" variant="body2" color="gray">/ Year</Typography>
      </Typography>
        </Box> 
            </>

    );
}
export default Positions;