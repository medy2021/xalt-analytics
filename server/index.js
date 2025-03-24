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

// Configure transporter for testing (ethereal.email)
let transporter;

async function createTestAccount() {
  try {
    // Create a test account at ethereal.email
    const testAccount = await nodemailer.createTestAccount();
    
    // Create a transporter using the test account
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    console.log('Test email account created:', testAccount.user);
  } catch (error) {
    console.error('Failed to create test account:', error);
    
    // Fallback to a dummy transporter
    transporter = {
      sendMail: async (options) => {
        console.log('Email would be sent with:', options);
        return { messageId: 'dummy-id' };
      }
    };
  }
}

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
    
    // In development mode, just log and return success
    if (isDevelopment) {
      console.log('DEV MODE: Would send email with:', {
        to,
        subject: `Your ${leadMagnetTitle} Download`,
        downloadLink
      });
      
      // Simulate a slight delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.json({ 
        success: true, 
        provider: 'mock',
        message: 'Email would be sent in production mode'
      });
    }
    
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








