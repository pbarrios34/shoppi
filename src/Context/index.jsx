import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Product Detail · Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // My Order · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart · Order
    const [order, setOrder] = useState([]);

    useEffect(() => { 
        const totalCount = cartProducts.reduce(
            (total, product) => 
                total + product.quantity, 0
        ); 
        setCount(totalCount); 
    }, [cartProducts]);

    const addProductToCart = (product) => {
        setCartProducts(prevProducts => {
            const productExists = prevProducts.find(p => 
                p.id === product.id);
            if (productExists) {
                return prevProducts.map(p => 
                    p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1} : p
                );
            }
            return [ ...prevProducts, {...product, quantity: 1}];
        });
    };

    const increaseQuantity = (productId) => { 
        setCartProducts(prevProducts => 
            prevProducts.map(p => 
                p.id === productId ? { ...p, quantity: (p.quantity || 0) + 1 } : p 
            ) 
        ); 
    }; 
    
    const decreaseQuantity = (productId) => { 
        setCartProducts(prevProducts => 
            prevProducts.map(p => 
                p.id === productId && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p 
            ) 
        ); 
    }; 
    
    const removeProduct = (productId) => { 
        setCartProducts(prevProducts => 
            prevProducts.filter(p => 
                p.id !== productId
            ) 
        ); 
    };

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
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            addProductToCart,
            increaseQuantity,
            decreaseQuantity,
            removeProduct,
            order, 
            setOrder,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider}