import { Container, Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import Footer from '../components/Footer'

const Resume = () => {
  const resumeImage = process.env.PUBLIC_URL + "/RESUME.png"; 
  const resumePDF = process.env.PUBLIC_URL + "/CV.pdf"; 

  
  const [open, setOpen] = useState(false);
  const handleDownloadClick = () => {
    setOpen(true);
  };

  
  const handleConfirmDownload = () => {
    setOpen(false); 
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Peggy_Buena_Siamoc_Resume.pdf";
    link.click(); 
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <div>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadClick} 
          sx={{
            "&:hover": { backgroundColor: "#A67F65" },
            width: "100%",
            borderRadius: 2,
            boxShadow: 3,
            mt: 5,
            backgroundColor: "#F4A8A1",
            mb: 2
          }}
        >
          Download Resume
        </Button>
      </div>  

      <Box
        component="img"
        src={resumeImage}
        alt="Resume"
        sx={{ width: "100%", borderRadius: 2, boxShadow: 3, mb: 1 }}
      />

      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Copyright Notice</DialogTitle>
        <DialogContent>
          <Typography>
            © 2025 Peggy Siamoc. All Rights Reserved. <br />
            This document is for personal use only and may not be redistributed or modified without permission.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">Cancel</Button>
          <Button onClick={handleConfirmDownload} color="primary">Agree & Download</Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </Container>
  );
};

export default Resume;
