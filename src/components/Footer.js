import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
  sx={{
    width: "100vw",
    backgroundColor: "#F5B5AE",
    textAlign: "center",
    left: 0,
    right: 0,
    position: "absolute",
    passing:"2px"
  }}
>
      <Typography 
       sx={{
        fontWeight: 20, 
        fontSize: "12px", 
        color: "#FFF",
      }}
      >
        © {new Date().getFullYear()} Peggy Siamoc | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;