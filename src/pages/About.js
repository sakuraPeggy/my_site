import React from "react";
import { Typography, Box, Container } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 5,  mb:5 }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          Hello, I'm a passionate web developer with a love for creating intuitive and interactive websites. With experience in technologies like React, JavaScript, and Material UI, I aim to build seamless and efficient web experiences.
          <br />
          <br />
          My journey in web development began with a simple curiosity about how websites are built. Since then, I’ve grown my skills in both front-end and back-end development. I enjoy learning new technologies and challenges that help me grow as a developer.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
