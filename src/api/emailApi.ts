
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Client-side API wrapper for lead magnet functionality
export const sendLeadMagnetData = async (
  to: string,
  name: string,
  leadMagnetTitle: string,
  downloadLink: string
) => {
  try {
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

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error storing lead:', error);
    throw error;
  }
};
