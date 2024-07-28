import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
   const [value, setValue] = useState('');
   const { setQuery, setCategory } = useContext(ProductsContext);
   const navigate = useNavigate();

   function handleInput(e) {
      setValue(e.target.value);
   }

   function handleSearch(e) {
      e.preventDefault();
      setQuery(value);
      setCategory(null);
      navigate('/');
   }

   return (
      <>
         <form onSubmit={handleSearch} className='w-1/3'>
            <div className='relative'>
               <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <SearchIcon></SearchIcon>
               </div>
               <input
                  onChange={handleInput}
                  value={value}
                  type='search'
                  className='block w-full p-4 ps-10 text-sm text-gray-900 rounded border outline-none'
                  placeholder='Search...'
               />
               <button
                  type='submit'
                  className='bg-orange-500 absolute end-4 top-2 p-2 text-base rounded text-white  active:bg-orange-400'
               >
                  Search
               </button>
            </div>
         </form>
      </>
   );
}
