import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function AuthButton() {
   const { openLogin, user, setUser } = useContext(AuthContext);
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();

   function toggleDropdown() {
      setOpen(!open);
   }

   function logOut() {
      setUser(null);
      setOpen(!open);
      navigate('/')
      
   }

   return (
      <>
         {user ? (
            <div className='bg-white rounded px-3 relative flex flex-col items-center justify-center'>
               <button onClick={() => toggleDropdown()} className='uppercase text-orange-500 font-medium'>{user.firstName}</button>
               {open && (
                  <div className='flex flex-col gap-4 absolute top-10 right-3  bg-white rounded p-3 border-2 border-t-0 z-50'>
                     <NavLink to='/profile' className='uppercase text-orange-500 font-medium'>Profile</NavLink>
                     <button onClick={logOut} className='uppercase text-orange-500 font-medium'>Logout</button>
                  </div>
               )}
            </div>
         ) : (
            <button onClick={openLogin} className='bg-white rounded px-3'>
               <PersonIcon fontSize='medium' sx={{ color: 'orange' }} />
               <span className='uppercase ml-3 align-bottom text-orange-500 font-medium'>
                  Login
               </span>
            </button>
         )}
      </>
   );
}
