import CancelIcon from '@mui/icons-material/Cancel';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useContext } from 'react';

export default function Register() {
   const { switchModal, closeModal } = useContext(AuthContext);
   const { register } = useContext(AuthContext);

   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      purchases: [] 
   });

   function handleChange(e) {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name] : value
      })
   }

   function handleRegister(e) {
    register(formData);
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
            <form onSubmit={handleRegister} className='flex flex-col gap-5'>
               <input
                  type='text'
                  name='firstName'
                  placeholder='First name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <input
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='rounded p-1 bg-white bg-opacity-20 border-2 placeholder-white focus:outline-none caret-white text-white focus:bg-white focus:caret-black focus:text-black'
               />
               <button type='submit' className='bg-white rounded text-orange-500 font-medium'>
                  Register
               </button>
            </form>
            <div>
               <span className='text-white'>Already create an Account? </span>
               <button
                  onClick={() => switchModal()}
                  className='text-white font-medium'
               >
                  Login
               </button>
            </div>
         </div>
      </div>
   );
}

