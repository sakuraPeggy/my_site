import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", () => {
        video.currentTime = 5;
      });
    }
  }, []);

  const handleToggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container
      sx={{
        mt: 5,
        mb: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 4,
        position: "relative",
        marginBottom:20,
        marginTop: 10
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: 400 },
          height: 400,
          flexShrink: 0,
        }}
      >

        <img
          src={`${process.env.PUBLIC_URL}/bgVideo.png`}
          alt="Frame"
          style={{
            width: "120%",
            height: "100%",
            position: "absolute",
            top: 45,
            left: 0,
            zIndex: 2,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "20%",
            left: "15%",
            zIndex: 3,
            fontSize: "12px",
            color: "#fff",
            backgroundColor: "rgba(56, 53, 53, 0.6)",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          Peggy B Siamoc <br /> Junior Web Developer
        </motion.div>
        <video
          ref={videoRef}
          src={`${process.env.PUBLIC_URL}/484548138_9328582417238135_4272248539879582238_n-VEED.mp4`}
          loop
          muted
          style={{
            width: "100%",
            height: "80%",
            position: "absolute",
            top: 46,
            left: "7.5%",
            zIndex: 1,
            objectFit: "cover",
          }}
        />
        <Button
          variant="contained"
          onClick={handleToggleVideo}
          sx={{
            backgroundColor: "rgba(220, 140, 130, 0.8)",
            width: "120%",
            height: "50px",
            fontSize: "16px",
            fontWeight: "bold",
            position: "absolute",
            bottom: 0,
            left: 0,
            borderRadius: 0,
            zIndex: 3,
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          flex: 1,
          minWidth: { xs: "100%", md: "50%" },
          backgroundColor: "rgba(202, 211, 210, 0.8)",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 5,
          marginLeft: "60px",
          marginTop:10
          
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
          Hello, I'm a passionate web developer with a love for creating
          intuitive and interactive websites. With experience in technologies
          like React, JavaScript, and Material UI, I aim to build seamless and
          efficient web experiences.
          <br />
          <br />
          My journey in web development began with a simple curiosity about how
          websites are built. Since then, I’ve grown my skills in both front-end
          and back-end development. I enjoy learning new technologies and
          challenges that help me grow as a developer.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
