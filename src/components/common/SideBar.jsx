import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';
import { useContext } from 'react';


export default function SideBar() {

   const { setCategory } = useContext(ProductsContext)

   const handleCategoryClick = (categoryName) => {
      setCategory(categoryName); 
   };

   return (
      <aside className='bg-black p-1 w-52 h-screen sticky top-0'>
         <div className='p-3 rounded text-white text-lg fixed'>
            <h2 className='mb-6'>Categories</h2>
            <ul>
               <li>
                  <NavLink onClick={ () => handleCategoryClick("men's clothing")} to="/category/men's clothing" className='hover:text-orange-500'>Men Clothes</NavLink>
               </li>
               <li>
                  <NavLink onClick={ () => handleCategoryClick("women's clothing")} to="/category/women's clothing" className='hover:text-orange-500'>Women Clothes</NavLink>
               </li>
               <li>
                  <NavLink onClick={ () => handleCategoryClick("electronics")} to='/category/electronics' className='hover:text-orange-500'>Electronics</NavLink>
               </li>
               <li>
                  <NavLink onClick={ () => handleCategoryClick("jewelery")} to='/category/jewelery' className='hover:text-orange-500'>Jewelery</NavLink>
               </li>
            </ul>
         </div>
      </aside>
   );
}
