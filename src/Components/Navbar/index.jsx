import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { CartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(CartContext);
    const activeStyle = "aria-[current]:underline underline-offset-4";

    const handleCategoryClick = (category) => {
        context.setSearchByCategory(category);
    };

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/' onClick={() => handleCategoryClick('')}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('')}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/audio' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('audio')}>
                        Audio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/tv' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('tv')}>
                        TV
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/mobile' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('mobile')}>
                        Mobile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/gaming' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('gaming')}>
                        Gaming
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others' 
                        className={activeStyle}
                        onClick={() => handleCategoryClick('others')}>
                        Others
                    </NavLink>
                </li>           
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    tu-correo@example.com
                </li>
                <li>
                    <NavLink to='/my-orders' className={activeStyle}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' className={activeStyle}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={activeStyle}>
                        Sign In
                    </NavLink>
                </li>
                <li 
                    className='cursor-pointer flex justify-center items-center font-medium'
                    onClick={() => {
                        context.openCheckoutSideMenu()
                        context.closeProductDetail()
                    }}
                    >
                    <ShoppingBagIcon className="size-6 text-black" />
                    {context.count}                    
                </li>       
            </ul>
        </nav>
    )
};

export { Navbar };