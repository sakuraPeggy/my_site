import React from "react";
import {Link} from 'react-router-dom'
import {Box, Typography, Button, keyframes, Container} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Footer from '../components/Footer'
 
const HireMePage = () => {
  

  return (
    <Container
    sx={{
      mt: 5,
      mb: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 4,
      position: "relative",
       
    }}
    >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',  // centers horizontally
        alignItems: 'center',      // centers vertically
        width: '100%',
        my: 4                      // vertical spacing
      }}
      
      
    >
      <img
        src={`${process.env.PUBLIC_URL}/QRcodecv.jpg`}
        alt="Profile"
        style={{
          width: '80%',
          height: '100%',
          objectFit: 'cover',  // preserves aspect ratio and crops if necessary
          alignItems: 'center',
          margin: '0 auto',    // centers the image horizontally
        }}
      />
      <Button
       component={Link}
       to="/hireme"
    variant="contained"
    color="black"
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255,255,255,0.8)',
    }}
  >
    Hire me to unlock my full potential
  </Button>
    </Box>
    
    </Container>
  );
};

export default HireMePage;
