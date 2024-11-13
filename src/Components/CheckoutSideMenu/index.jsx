import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(CartContext);
    
    const calculateTotal = () => {
        return context.cartProducts.reduce(
            (total, product) => total + product.price * product.quantity, 0
        );
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '12.11.24',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: calculateTotal()
        }
        
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed bg-slate-400 right-0 border border-black rounded-2xl`}>
            <div className='flex justify-between items-center p-6 bg-slate-100 rounded-t-2xl shadow-lg shadow-black-500/40'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeCheckoutSideMenu()}
                />
            </div>
            <div className="items-content w-full p-2 overflow-y-auto ">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id} 
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            quantity={product.quantity}
                            increaseQuantity={() => context.increaseQuantity(product.id)} 
                            decreaseQuantity={() => context.decreaseQuantity(product.id)} 
                            removeProduct={() => context.removeProduct(product.id)}
                        />
                    ))
                }
            </div>
            
            <div className="flex justify-between items-center p-6 h-22 bg-slate-100 rounded-b-2xl absolute bottom-0 w-full">
                <p className="font-bold">Q.{calculateTotal().toFixed(2)}</p>
                <Link to='/my-orders/last' className="w-3/5">
                    <button 
                        className="h-7 w-full bg-black text-white px-3 rounded-lg"
                        onClick={() => handleCheckout()}>
                            Checkout
                    </button>
                </Link>
            </div>
            
        </aside>
    )
}

export { CheckoutSideMenu }