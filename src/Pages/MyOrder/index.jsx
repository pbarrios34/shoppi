import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(CartContext);

  const lastOrder = context.order?.slice(-1)[0];
  
    return (
      <>
        <div className="flex">
          <Link to={"/my-orders"}>
            <ChevronLeftIcon className="size-6 text-blue-400 cursor-pointer"/>
          </Link>
          <h1 className="ml-3">My Order</h1>

        </div>
        <div className="items-content w-96 p-2 overflow-y-auto ">
            {lastOrder ? (
              lastOrder.products.map((product) => (
                <OrderCard 
                    key={product.id} 
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    quantity={product.quantity}
                />
              ))           
            ) : (
              <p>No hay órdenes recientes.</p>
            )}
        </div>
      </>
    )
  }
  
  export default MyOrder