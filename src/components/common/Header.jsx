import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import { CartContext } from '../../context/CartContext';
import totalItems from '../../helpers/totalItems';
import { ProductsContext } from '../../context/ProductsContext';
import AuthButton from './AuthButton';

export default function Header() {
    const { cartProducts } = useContext(CartContext);
    const { setQuery, setCategory } = useContext(ProductsContext);
    const items = totalItems(cartProducts);
 
    const handleCategoryClick = (categoryName) => {
       setQuery('');
       setCategory(categoryName);
    };
 
    return (
        <header>
            <nav className='bg-orange-500 flex p-3 items-center justify-around'>
                <ul>
                    <li className='text-2xl text-white font-bold tracking-wide hover:text-black'>
                        <NavLink to='/' onClick={() => handleCategoryClick('')}>
                        Home
                        </NavLink>
                    </li>
                </ul>
                <SearchInput />
                <div className='flex gap-4'>
                    <AuthButton/>
                    <NavLink to='/cart'>
                        <Badge badgeContent={items} color='secondary' showZero>
                        <ShoppingCartIcon fontSize='large' sx={{ color: 'white' }} />
                        </Badge>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
 }
