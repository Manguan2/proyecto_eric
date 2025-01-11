import express from 'express';
import { createUser, getUsers, deleteUser } from '../controllers/userController.js';
import { loginUser } from '../controllers/userController.js';

// Endpoint para login de usuario
router.post('/login', loginUser);

const router = express.Router();

// Endpoint para obtener todos los usuarios
router.get('/', getUsers);

// Endpoint para crear un nuevo usuario
router.post('/', createUser);

// Endpoint para eliminar un usuario
router.delete('/:id', deleteUser);

export default router;
