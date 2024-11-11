import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { noteRoutes } from './routes/noteRoutes';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', noteRoutes);
app.get('/', (req, res) => {
    console.log('hi');
    res.send('Hello from the root route!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
