import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import imageRoutes from './route/imageRoutes.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', imageRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Image Processing API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});