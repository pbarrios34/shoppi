import { useContext } from "react";
import { CartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(CartContext);
  const lastOrder = context.order?.slice(-1)[0];

    return (
      <>
        MyOrder
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
            )
            }
        </div>
      </>
    )
  }
  
  export default MyOrder