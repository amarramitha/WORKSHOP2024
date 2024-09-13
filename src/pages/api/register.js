export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Here you would normally save the user to the database
      // This is a placeholder response
      if (email && password) {
        res.status(200).json({ message: 'User registered successfully' });
      } else {
        res.status(400).json({ message: 'Invalid data' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  