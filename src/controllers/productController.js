// src/controllers/productController.js
import supabase from '../supabase';  // Asegúrate de tener el archivo de configuración de supabase

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los productos', error: err.message });
  }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
  const { title, price, description, image, category } = req.body;
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([{ title, price, description, image, category }]);

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el producto', error: err.message });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, image, category } = req.body;
  try {
    const { data, error } = await supabase
      .from('products')
      .update({ title, price, description, image, category })
      .eq('id', id);

    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el producto', error: err.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.status(200).json({ message: 'Producto eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el producto', error: err.message });
  }
};
