import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p className="flex flex-col w-96">
                <span>Fecha: 12.11.24</span>
                <span>Precio: {totalPrice}</span>
                <span>Total de Productos: {totalProducts}</span>
            </p>
        </div>
    )
}

export { OrdersCard }