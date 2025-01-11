import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();

// Definimos los endpoints CRUD para productos

// Obtener todos los productos (GET)
router.get('/', getProducts);

// Crear un nuevo producto (POST)
router.post('/', createProduct);

// Actualizar un producto (PUT)
router.put('/:id', updateProduct);

// Eliminar un producto (DELETE)
router.delete('/:id', deleteProduct);

export default router;
