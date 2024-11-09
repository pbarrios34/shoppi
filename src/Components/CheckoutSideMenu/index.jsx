import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(CartContext);

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-slate-400 right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }