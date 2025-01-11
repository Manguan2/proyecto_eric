// src/app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';

dotenv.config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());  // Habilitar CORS
app.use(express.json());  // Permitir el uso de JSON en las solicitudes

// Rutas
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
