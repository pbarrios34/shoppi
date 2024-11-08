import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Product Detail · Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart · Show products
    const [cartProducts, setCartProducts] = useState({});

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}