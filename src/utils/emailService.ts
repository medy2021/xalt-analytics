import nodemailer from 'nodemailer';

// Configure transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER || 'your-email@gmail.com', // Use environment variable
    pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password', // Use app password, not regular password
  },
});

// Email sending function
export const sendEmail = async (
  to: string, 
  subject: string, 
  text: string, 
  html?: string
) => {
  try {
    const info = await transporter.sendMail({
      from: '"Xalt Analytics" <your-email@gmail.com>',
      to,
      subject,
      text,
      html: html || text,
    });
    
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Function to send lead magnet email
export const sendLeadMagnetEmail = async (
  to: string,
  name: string,
  leadMagnetTitle: string,
  downloadLink: string
) => {
  const subject = `Your ${leadMagnetTitle} Download`;
  
  const text = `
    Hello ${name},
    
    Thank you for requesting "${leadMagnetTitle}" from Xalt Analytics.
    
    You can download your guide here: ${downloadLink}
    
    If you have any questions, please don't hesitate to contact us.
    
    Best regards,
    The Xalt Analytics Team
  `;
  
  const html = `
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
      <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
      <p style="background-color: #f3f4f6; padding: 10px; border-radius: 4px; word-break: break-all;">
        ${downloadLink}
      </p>
      <p>If you have any questions, please don't hesitate to contact us.</p>
      <p>Best regards,<br>The Xalt Analytics Team</p>
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #6b7280;">
        This email was sent to ${to} because you requested information from Xalt Analytics.
      </p>
    </div>
  `;
  
  return sendEmail(to, subject, text, html);
};

