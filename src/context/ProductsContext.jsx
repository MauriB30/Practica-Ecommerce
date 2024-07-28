import { createContext, useEffect, useState } from 'react';
import fetchProducts from '../components/services/fetchProducts';

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
   const [allProducts, setAllProducts] = useState([]);
   const [category, setCategory] = useState(null);
   const [query, setQuery] = useState('');
   
   useEffect(() => {

     async function getAllProducts() {
         const response = await fetchProducts();
         setAllProducts(response);
      }

      getAllProducts();
   }, [])

   function addReview(item,review) {
      const itemIndex = allProducts.findIndex(product => product.id === item.id);

      const newProducts = [...allProducts];

      const itemUpdate = {
         ...newProducts[itemIndex],
         reviews: newProducts[itemIndex].reviews ? [...newProducts[itemIndex].reviews, review] : [review]
      };

      newProducts[itemIndex] = {...itemUpdate};

      setAllProducts(newProducts);

   }

   return (
      <ProductsContext.Provider value={{ allProducts, category, query, setCategory, setQuery, addReview }}>
         {children}
      </ProductsContext.Provider>
   );
}
