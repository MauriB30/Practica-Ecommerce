import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

export default function Login() {
   const { closeModal, switchModal, login, error } = useContext(AuthContext);
   const [user, setUser] = useState({ email: '', password: '' });

   function handleChange(e) {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name] : value,
      })
   }

   function handleSubmit(e) {
      e.preventDefault();
      login(user);
      
   }

   return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
         <div className='flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 gap-10 bg-orange-500 rounded w-1/4'>
            <button onClick={() => closeModal()} className='self-end'>
               <CancelIcon sx={{ color: 'white' }}></CancelIcon>
            </button>
            <h2 className='text-center font-semibold text-4xl text-white tracking-widest'>
               LOGIN
            </h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
               <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  value={user.email}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={user.password}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               {error && (
                  <p className=' text-sm text-white mt-1'>Invalid Password</p>
               )}
               <button
                  type='submit'
                  className='bg-white rounded text-orange-500 font-medium'
               >
                  Submit
               </button>
            </form>
            <div>
               <span className='text-white'>Not a member? </span>
               <button
                  onClick={() => switchModal()}
                  className='text-white font-medium'
               >
                  Sign up now
               </button>
            </div>
         </div>
      </div>
   );
}
