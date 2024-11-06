import { useContext } from "react";
import { CartContext } from "../../Context";


const Card = ({ product }) => {
    const context = useContext(CartContext);
    return (
        <div className="bg-slate-600 mb-3 cursor-pointer w-full h-80 rounded-lg">
            <figure className="relative w-full h-4/5 rounded-lg">
                <span className="absolute bottom-5 left-2 bg-black/60 px-3 py-0.5 rounded-lg text-white text-xs m-2">
                    {product.category}
                </span>
                <img
                    className="w-full h-full object-cover p-3"
                    src={product.image} 
                    alt={product.title} 
                />
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black/60 text-white w-6 h-6 rounded-full m-2 font-bold px-0.5 pb-1"
                    onClick={() => context.setCount(context.count + 1)}>
                    +
                </div>
            </figure>
            <p className="flex justify-between h-12 items-center px-3 text-white">
                <span className="truncate ... text-xs font-light">{product.title}</span>
                <span className="text-md font-medium text-nowrap">Q {product.price}</span>
            </p>
        </div>
    );
}

export default Card