import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { NavLink } from 'react-router-dom';

export default function Footer() {
   return (
      <footer className='bg-orange-500 h-20 flex flex-col justify-center items-center gap-2'>
         <div className='flex gap-3'>
            <NavLink>
               <InstagramIcon sx={{ color: 'white' }} />
            </NavLink>
            <NavLink>
               <FacebookIcon sx={{ color: 'white' }} />
            </NavLink>
            <NavLink>
               <XIcon sx={{ color: 'white' }} />
            </NavLink>
            <NavLink>
               <LinkedInIcon sx={{ color: 'white' }} />
            </NavLink>
         </div>
         <p className='font-thin'>© 2024 My Practice Site. Thank you for visiting!</p>
      </footer>
   );
}

