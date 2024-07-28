async function fetchProducts() {
   const  URL = 'https://fakestoreapi.com/products';

   try {
      const response = await fetch(URL);

      if (!response.ok) {
         throw new Error('Error fetching products');
      }
      
      const data = await response.json();

      return data;

   } catch (error) {
      console.error('Error:', error);
      return [];
   }
}

export default fetchProducts;