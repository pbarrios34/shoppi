import { useContext } from "react";
import { PlusIcon } from '@heroicons/react/24/solid';
import { CartContext } from "../../Context";


const Card = ({ product }) => {
    const context = useContext(CartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductToCart = (productData) => {
        // Aquí hacemos la comprobación para ver si el producto ya está en el carrito 
        const productExists = context.cartProducts.find(p => 
            p.id === productData.id
        );
        // Si ya existe, incrementamos la cantidad  
        if (productExists) { 
            context.increaseQuantity(productData.id); 
        // Si no existe, lo agregamos con quantity 1 
        } else { 
            context.setCount(context.count + 1); 
            context.setCartProducts([...context.cartProducts, { ...productData, quantity: 1 }]); 
        }
    }

    return (
        <div 
            className="bg-slate-600 mb-3 cursor-pointer w-full h-80 rounded-lg"
            onClick={() => showProduct(product)}>
            <figure className="relative w-full h-4/5 rounded-lg">
                <span className="absolute bottom-5 left-2 bg-black/60 px-3 py-0.5 rounded-lg text-white text-xs m-2">
                    {product.category}
                </span>
                <img
                    className="w-full h-full object-fit: container p-3 rounded-3xl"
                    src={product.image} 
                    alt={product.title} 
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black/60 w-6 h-6 rounded-full m-4 font-bold"
                    onClick={(e) => {
                        e.stopPropagation();
                        addProductToCart(product);
                        }
                    }>
                    <PlusIcon className="size-3 text-white" />
                </div>
            </figure>
            <p className="flex justify-between h-12 items-center px-3 text-white">
                <span className="truncate text-xs font-light">{product.title}</span>
                <span className="text-md font-medium text-nowrap">Q {product.price}</span>
            </p>
        </div>
    );
}

export default Card