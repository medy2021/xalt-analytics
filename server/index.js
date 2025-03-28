// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

const PORT =  3001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://Xalt-test:nsFEW4w6OzddKead@test.yux69jn.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Mongoose Schema & Model
const FormSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organization: { type: String  },
  details: { type: String},
  submittedAt: { type: Date, default: Date.now }
});

const FormSubmission = mongoose.model("FormSubmission", FormSubmissionSchema);

// Configure Nodemailer
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: 'abhimanyu.mishra@xaltanalytics.com', // Your Gmail address
//     pass: 'Xalt@123' 
//   }
// });

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // ✅ Use Outlook's SMTP server
  port: 587, // ✅ Use 587 for TLS (recommended)
  secure: false, // ✅ `false` for TLS
  auth: {
    user: 'abhimanyu.mishra@xaltanalytics.com', // ✅ Your Outlook email
    pass: 'Xalt@123' // ✅ Your Outlook password (or App Password)
  },
  tls: {
    ciphers: "SSLv3", // ✅ Ensures a secure connection
  }
});

// API Route to Handle Form Submission
app.post("/submit", async (req, res) => {
  const { name, email, organization, details } = req.body;

  if (!name || !email || !organization || !details) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save data to MongoDB
    const newSubmission = new FormSubmission({ name, email, organization, details });
    await newSubmission.save();

    // Send confirmation email to the user
    const mailOptions = {
      from: "abhimanyu.mishra@xaltanalytics.com",
      to: email,
      organization: `Re: ${organization}`,
      text: `Hello ${name},\n\nThank you for reaching out!\n\nWe have received your details:\n"${details}"\n\nOur team will get back to you shortly.\n\nBest regards,\nXalt Analytics`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ details: "Form submitted successfully and email sent." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error processing request" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
