const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'sangamithra707@gmail.com',
    pass: process.env.EMAIL_PASS || 'ndgf ttur lkjv aqxe'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Send email to Sangamithra
    const mailToOwner = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'sangamithra707@gmail.com',
      subject: `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B5CF6;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    };

    // Auto-reply to sender
    const autoReply = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for reaching out! - Sangamithra M',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #8B5CF6; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for taking the time to reach out to me. I have received your message and truly appreciate your interest in my work.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #8B5CF6; margin-top: 0;">Your Message:</h3>
              <p style="color: #555; font-style: italic;">"${message}"</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              I will review your message carefully and get back to you within 24-48 hours. In the meantime, feel free to explore my portfolio and check out my latest projects.
            </p>
            
            <div style="margin: 30px 0; padding: 20px; background: #f3f4f6; border-radius: 8px;">
              <h4 style="color: #8B5CF6; margin-top: 0;">Connect with me:</h4>
              <p style="color: #555; margin: 5px 0;">📧 Email: sangamithra707@gmail.com</p>
              <p style="color: #555; margin: 5px 0;">📱 Phone: +91 6379347491</p>
              <p style="color: #555; margin: 5px 0;">📍 Location: Tenkasi, Tamil Nadu, India</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you once again for your interest. I look forward to connecting with you soon!
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #8B5CF6; font-weight: bold; margin: 0;">Best regards,</p>
              <p style="color: #333; font-size: 18px; font-weight: bold; margin: 5px 0;">Sangamithra M</p>
              <p style="color: #666; font-size: 14px; margin: 0;">Junior Software Developer</p>
            </div>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(autoReply);

    res.json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});