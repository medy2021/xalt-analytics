import nodemailer from 'nodemailer';

// Configure transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your-email@example.com', // Replace with your email
    pass: 'your-password', // Replace with your password or app password
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
      from: '"Xalt Analytics" <your-email@example.com>',
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