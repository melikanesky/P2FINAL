import express from 'express';
import corredorRoutes from './routes/corredorRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/corredores', corredorRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor Maratón en http://localhost:${PORT}`);
});