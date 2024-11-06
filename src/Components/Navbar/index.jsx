import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(CartContext);
    const activeStyle = "aria-[current]:underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={activeStyle}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={activeStyle}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={activeStyle}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' className={activeStyle}>
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={activeStyle}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={activeStyle}>
                        Others
                    </NavLink>
                </li>           
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    pbarrios@toolbox.com.gt
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
                <li>
                    🛒{context.count}
                </li>       
            </ul>
        </nav>
    )
};

export { Navbar };