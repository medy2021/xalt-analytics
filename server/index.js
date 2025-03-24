const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const sgMail = require('@sendgrid/mail');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// For debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  next();
});

// Add a simple health check endpoint
app.get('/api/health', (req, res) => {
  return res.json({ status: 'ok', message: 'Server is running!' });
});

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Create test account on startup
createTestAccount();

// Test email sending function
async function testEmailSending() {
  try {
    // Make sure transporter is initialized
    if (!transporter) {
      await createTestAccount();
    }
    
    // Send a test email
    const info = await transporter.sendMail({
      from: '"Xalt Analytics Test" <test@xaltanalytics.com>',
      to: 'test@example.com',
      subject: 'Test Email',
      text: 'This is a test email from the Xalt Analytics server.',
      html: '<b>This is a test email from the Xalt Analytics server.</b>',
    });
    
    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
    // If using Ethereal, provide the preview URL
    if (info.messageId && info.messageId !== 'dummy-id') {
      console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    }
    
    return true;
  } catch (error) {
    console.error('Test email failed:', error);
    return false;
  }
}

// Add a test endpoint
app.get('/api/test-email', async (req, res) => {
  const success = await testEmailSending();
  if (success) {
    return res.json({ success: true, message: 'Test email sent successfully!' });
  } else {
    return res.status(500).json({ success: false, message: 'Failed to send test email' });
  }
});

// Test email on startup
testEmailSending().then(success => {
  if (success) {
    console.log('Email system is working correctly!');
  } else {
    console.error('Email system is not working correctly!');
  }
});

// Using SendGrid instead of Ethereal
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const isDevelopment = process.env.NODE_ENV !== 'production';

// Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, name, leadMagnetTitle, downloadLink } = req.body;
    
    console.log('Email request received:', { to, name, leadMagnetTitle });
    
    if (!to || !name || !leadMagnetTitle || !downloadLink) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Xalt Analytics" <noreply@xaltanalytics.com>',
      to,
      subject: `Your ${leadMagnetTitle} Download`,
      text: `Hello ${name},\n\nThank you for requesting "${leadMagnetTitle}" from Xalt Analytics.\n\nYou can download your guide here: ${downloadLink}\n\nIf you have any questions, please don't hesitate to contact us.\n\nBest regards,\nThe Xalt Analytics Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Your Download is Ready</h2>
          <p>Hello ${name},</p>
          <p>Thank you for requesting <strong>"${leadMagnetTitle}"</strong> from Xalt Analytics.</p>
          <p>You can download your guide by clicking the button below:</p>
          <p style="text-align: center; margin: 30px 0;">
            <a href="${downloadLink}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Download Now
            </a>
          </p>
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>The Xalt Analytics Team</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    
    return res.json({ 
      success: true,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    });
    
    // Production code - try SendGrid
    if (process.env.SENDGRID_API_KEY) {
      try {
        const msg = {
          to,
          from: 'info@xaltanalytics.com',
          subject: `Your ${leadMagnetTitle} Download`,
          text: `Hello ${name}, Thank you for requesting "${leadMagnetTitle}" from Xalt Analytics. You can download your guide here: ${downloadLink}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">Your Download is Ready</h2>
              <p>Hello ${name},</p>
              <p>Thank you for requesting <strong>"${leadMagnetTitle}"</strong> from Xalt Analytics.</p>
              <p><a href="${downloadLink}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Now</a></p>
            </div>
          `,
        };
        
        await sgMail.send(msg);
        console.log('Email sent successfully via SendGrid to:', to);
        return res.json({ success: true, provider: 'sendgrid' });
      } catch (sgError) {
        console.error('SendGrid error:', sgError.response?.body || sgError);
        // Don't throw, continue to fallback
      }
    }
    
    // Fallback to Ethereal for testing
    try {
      if (!transporter) {
        await createTestAccount();
      }
      
      const info = await transporter.sendMail({
        from: '"Xalt Analytics" <test@xaltanalytics.com>',
        to,
        subject: `Your ${leadMagnetTitle} Download`,
        text: `Hello ${name}, Thank you for requesting "${leadMagnetTitle}" from Xalt Analytics. You can download your guide here: ${downloadLink}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Your Download is Ready</h2>
            <p>Hello ${name},</p>
            <p>Thank you for requesting <strong>"${leadMagnetTitle}"</strong> from Xalt Analytics.</p>
            <p><a href="${downloadLink}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Now</a></p>
          </div>
        `,
      });
      
      console.log('Email sent successfully via Ethereal to:', to);
      console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
      
      return res.json({ 
        success: true, 
        provider: 'ethereal',
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    } catch (emailError) {
      console.error('Ethereal email error:', emailError);
      
      // Last resort - return success anyway so the user experience isn't broken
      return res.json({ 
        success: true, 
        provider: 'none',
        message: 'Email delivery attempted but may have failed. User will still be redirected.'
      });
    }
  } catch (error) {
    console.error('Error in email endpoint:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Unknown server error'
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








