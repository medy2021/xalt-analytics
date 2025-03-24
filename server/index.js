const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

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

// Lead magnet delivery endpoint using Supabase
app.post('/api/send-lead-magnet', async (req, res) => {
  try {
    const { to, name, leadMagnetTitle, downloadLink } = req.body;

    console.log('Lead magnet request received:', { to, name, leadMagnetTitle });

    if (!to || !name || !leadMagnetTitle || !downloadLink) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Store lead information in Supabase
    const { data, error } = await supabase
      .from('leads')
      .insert([
        { 
          email: to,
          name: name,
          lead_magnet_title: leadMagnetTitle,
          download_link: downloadLink,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error storing lead:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to store lead information'
      });
    }

    return res.json({ 
      success: true,
      message: 'Lead magnet delivery processed successfully'
    });

  } catch (error) {
    console.error('Error in lead magnet endpoint:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message || 'Unknown server error'
    });
  }
});


// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});