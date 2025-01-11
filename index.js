require('dotenv').config();



const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('tu-url-de-supabase', 'tu-clave-de-supabase');

async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) console.error('Error fetching products:', error);
  return data;
}
