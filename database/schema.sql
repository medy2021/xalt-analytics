
-- Create a table for storing lead magnet submissions
CREATE TABLE leads (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    lead_magnet_title VARCHAR(255) NOT NULL,
    download_link TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX idx_leads_email ON leads(email);

-- Add a unique constraint to prevent duplicate emails for the same lead magnet
CREATE UNIQUE INDEX idx_unique_lead_email_title ON leads(email, lead_magnet_title);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Enable insert for leads" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Create policy to allow select for leads
CREATE POLICY "Enable select for leads" ON leads
    FOR SELECT
    USING (true);
