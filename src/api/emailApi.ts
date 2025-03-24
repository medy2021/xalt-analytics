// Client-side API wrapper for email functionality
export const sendLeadMagnetEmail = async (
  to: string,
  name: string,
  leadMagnetTitle: string,
  downloadLink: string
) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        name,
        leadMagnetTitle,
        downloadLink
      }),
    });
    
    // Handle non-JSON responses
    const text = await response.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error('Failed to parse response:', text);
      throw new Error('Invalid server response');
    }
    
    if (!response.ok) {
      console.error('Server returned error:', data);
      throw new Error(data.message || data.error || 'Failed to send email');
    }
    
    return data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};



