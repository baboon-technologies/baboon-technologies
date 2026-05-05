/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Name of the person submitting the form
      - `company` (text) - Company name
      - `email` (text) - Contact email address
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when message was created
      - `status` (text) - Status of the message (new, read, archived)
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting new contact messages (public access for form submission)
    - Add policy for reading messages (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);
