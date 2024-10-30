// server.js or any backend file
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

const transporter = nodemailer.createTransport({
   service: 'gmail',
    port: 465, // use 587 for TLS
    secure: true, // true for SSL (port 465), false for TLS (port 587)
    auth: {
      user: "nodemailer420@gmail.com",
      pass: "riie mlfy xpld osoy" // replace with app password if using 2FA
    }
  });
  

// Define a route to send emails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  const htmlContent = `<h1>Welcome to Artifex!</h1><p> ${text}</p>`;

  const mailOptions = {
    from: 'nodemailer420@gmail.com',
    to,
    subject,
    html: htmlContent
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });

});

app.get('/', (req, res) => {
    res.send('nodemailer server is running');
    }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
