import React from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";

const Portfolio = () => {
  const ArchiveImage = process.env.PUBLIC_URL + "/archiveFile.mp4";
  const ProgressImage = process.env.PUBLIC_URL + "/inprogress.mp4";
  const archiveLink = "https://sakurapegs.github.io/myresumeapp/";

  return (
    
    <Grid container spacing={2} alignItems="center" justifyContent="center" mb={15} mt={15}>
      
      <Grid item display="flex" justifyContent="center">
        <Card sx={{ maxWidth: "600px", overflow: "hidden" }}>
          <CardMedia
            component="video"
            src={ProgressImage}
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />
        </Card>
      </Grid>

      
      <Grid item display="flex" justifyContent="center">
        <Box
          sx={{
            maxWidth: "600px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "250px",
              backgroundColor: "rgba(244, 168, 161, 0.4)", 
              transition: "background-color 0.3s ease",
            },
            "&:hover .notification": {
              opacity: 1, 
            },
          }}
          onClick={() => window.open(archiveLink, "_blank")} 
        >
          <Card sx={{ maxWidth: "100%", overflow: "hidden" }}>
            <CardMedia
              component="video"
              src={ArchiveImage}
              autoPlay
              loop
              muted
              playsInline
              sx={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
          </Card>

          
          <Box
            className="notification"
            sx={{
              position: "absolute",
              top: "10px", 
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              color: "white", 
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "5px 10px", 
              opacity: 0, 
              transition: "opacity 0.3s ease",
            }}
          >
            Click the video to view my portfolio!
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
