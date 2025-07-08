import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/peggybsiamoc@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setAlert({ open: true, message: "Message sent successfully!", severity: "success" });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setAlert({ open: true, message: "Failed to send message. Please try again.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 5, mb: 5, maxWidth: "600px" }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "center", mt:5, marginTo: 5 }}>
          Contact Me
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "center" }}>
        I appreciate your time and consideration. Please feel free to contact me regarding any opportunities that align with my skills and experience.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ mb: 2 }}
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Your Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Your Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ backgroundColor: "#F4A8A1", mt: 2 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Box>

      {/* Alert Snackbar */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert onClose={() => setAlert({ ...alert, open: false })} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
