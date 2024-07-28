import { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import ListProducts from './ListProducts';
import filterProducts from '../../helpers/filterProducts';


export default function ListAllProducts() {
   const { allProducts, category, query } = useContext(ProductsContext);
   const [newProducts, setNewProducts] = useState([]);

   useEffect(() => {
      setNewProducts(filterProducts(allProducts,category,query))
   }, [category,allProducts,query])
   
 
   return (
      <ListProducts products={newProducts}></ListProducts>
   );
}