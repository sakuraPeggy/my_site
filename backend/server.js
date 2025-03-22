require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Sending Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, //  Gmail address
        pass: process.env.EMAIL_PASS, //  Gmail App Password
      },
    });

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // receiving email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
