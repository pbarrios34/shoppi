import { CalendarIcon, ShoppingBagIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-2xl bg-slate-100 shadow hover:shadow-lg">
            <p className="flex justify-between p-3 w-96">
                <div className="flex flex-col justify-evenly">
                    <span className="flex justify-center items-center">
                        <CalendarIcon className="size-5 mr-2 text-blue-400"/> 
                        12.11.24
                    </span>
                    <span className="flex justify-center items-center">
                        <ShoppingBagIcon className="size-5 mr-2 text-blue-400"/> 
                        {totalProducts} articles
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <span className="font-bold">
                        Q. {totalPrice}
                    </span>
                    <ChevronRightIcon className="size-5 mr-2 text-blue-400"/>
                </div>
            </p>
        </div>
    )
}

export { OrdersCard }