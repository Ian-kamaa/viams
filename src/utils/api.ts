import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../lib/db';
import { ContactFormData } from '../lib/types';

// This file contains the server-side API route handler for handling the form submission.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only handle POST requests
  if (req.method === 'POST') {
    // Extract the form data from the request body
    const { name, email, phone, message } = req.body as ContactFormData;

    try {
      // Insert the form data into the database using the query function
      await query(
        'INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)',
        [name, email, phone, message]
      );

      // Send a success response
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      // Log the error and send an error response
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  } else {
    // Send a 405 Method Not Allowed response for non-POST requests
    res.status(405).json({ message: 'Method not allowed' });
  }
}