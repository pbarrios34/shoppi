import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const OrderCard = props => {
    const { title, imageUrl, price, quantity, increaseQuantity, decreaseQuantity, removeProduct } = props;
    return (
        <div className="flex justify-between items-center mt-1 w-full p-2 h-22 bg-slate-300 rounded-2xl">
            <div className="flex justify-center items-center">
                <MinusIcon 
                    className="inline-block size-4 cursor-pointer"
                    onClick={decreaseQuantity}/>
                <p className="text-xs bg-white text-black p-1">
                        {quantity}
                </p>
                <PlusIcon 
                    className="inline-block size-4 cursor-pointer"
                    onClick={increaseQuantity}/>
            </div>
            <div className="flex justify-center items-center gap-1">
                <figure className="w-16 h-16 shrink-0">
                    <img className="rounded-2xl" src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className="w-48 p-3">
                <p className="flex flex-col">
                    <span className="font-bold">Q{price}</span>
                    <span className="text-xs text-center max-w-fit truncate">{title}</span>
                </p>
            </div>
            <div >
                <p className="text-red-500 font-medium h-7 shrink-0">
                    <TrashIcon 
                        className="inline-block size-5 cursor-pointer"
                        onClick={removeProduct}/>
                </p>
            </div>
        </div>
    )
}

export { OrderCard }