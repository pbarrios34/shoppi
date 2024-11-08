import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CartContext } from '../../Context';
import './styles.css'



const ProductDetail = () => {
    const context = useContext(CartContext);

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-slate-400 right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Product Detail</h2>
                <XMarkIcon 
                    className="size-6 text-black cursor-pointer" 
                    onClick={() => context.closeProductDetail()}
                />
            </div>
            <div className='flex flex-col overflow-y-auto h-full'>
                <figure className="relative w-full h-80 rounded-lg">
                    <img
                        className="w-full h-full object-fit: container p-3 rounded-3xl"
                        src={context.productToShow.image} 
                        alt={context.productToShow.title} 
                    />
                </figure>
                <p className="flex flex-col p-6 text-black">
                    <span className="text-2xl font-bold text-nowrap">Q {context.productToShow.price}</span>
                    <span className="text-wrap text-lg my-2 font-medium">{context.productToShow.title}</span>
                    <span className="text-balance text-lg font-light">
                        <span className='font-bold'>Description: </span>
                        {context.productToShow.description}
                    </span>
                </p>
            </div>
            
        </aside>
    )
}


export { ProductDetail }