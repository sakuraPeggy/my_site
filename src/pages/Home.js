import { Box, Typography, Button, Avatar, Paper, Grid, Container } from "@mui/material";
import profilePic from "../assets/pic.png"; 
import bgImage from "../assets/yellobg.png";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        position: "absolute",
        display: "flex",
      }}
    >
      <Box 
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid 
          container 
          spacing={2} 
          justifyContent="center" 
          alignItems="center" 
          sx={{ maxWidth: "1000px", width: "100%" }}
        >
          <Grid item md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <Paper
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "2rem",
                borderRadius: "10px",
                textAlign: "center",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Avatar
                src={profilePic}
                sx={{ width: 150, height: 150, margin: "auto", boxShadow: 3 }}
              />
              <Typography variant="h4" sx={{ fontFamily: "'Roboto', sans-serif", color: "#E57373" }}>
                Hello!
              </Typography>
              <Typography sx={{ fontFamily: "'Roboto', sans-serif", color: "#333" }}>
                I'm Peggy Siamoc
              </Typography>
              <Typography sx={{ fontSize: "11px", fontFamily: "'Montserrat', sans-serif", color: "#666" }}>
                Graphic Designer & Web Developer
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontFamily="Georgia, serif" fontWeight="bold" color="#E57373" fontStyle="italic">
              About Me
            </Typography>
            <Typography mt={1} sx={{ fontFamily: "Arial, sans-serif", fontSize: "14px", color: "#444" }}>
              I am a creative and detail-oriented Graphic Designer & Web Developer with a passion for crafting visually
              stunning and highly functional digital experiences. With expertise in Adobe Photoshop, UI/UX design, and
              front-end development, I specialize in designing intuitive user interfaces and developing responsive,
              high-performance websites.
            </Typography>

            <Box mt={4} display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Button 
                variant="contained" 
                component={Link} 
                to="/portfolio"   // ✅ Use `to` instead of `href`
                sx={{
                  backgroundColor: "#F4A8A1",
                  color: "#3D2A22",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#A67F65",
                  },
                }}
              >
                Portfolio
              </Button>

              <Button 
                variant="contained"
                component={Link} 
                to="/resume"  // ✅ Use `to` instead of `href`
                sx={{
                  backgroundColor: "#F4A8A1",
                  color: "#3D2A22",
                  fontWeight: "bold",
                  fontSize: "14px",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  minWidth: "120px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#A67F65",
                  },
                }}
              >
                Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
