// Client-side API wrapper for lead magnet functionality
export const sendLeadMagnetData = async (
  to: string,
  name: string,
  leadMagnetTitle: string,
  downloadLink: string
) => {
  try {
    const response = await fetch('/api/send-lead-magnet', {
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

    const data = await response.json();

    if (!response.ok) {
      console.error('Server returned error:', data);
      throw new Error(data.message || data.error || 'Failed to process lead magnet');
    }

    return data;
  } catch (error) {
    console.error('Error processing lead magnet:', error);
    throw error;
  }
};