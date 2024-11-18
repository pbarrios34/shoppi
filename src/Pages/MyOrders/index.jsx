import { useContext } from "react"
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard"
import { CartContext } from "../../Context";

function MyOrders() {
  const context = useContext(CartContext);

    return (
      <>
        <h1 className="text-white">My Orders</h1>
        <div className="mt-5">
          {
            context.order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts}
                />
              </Link>
            ))
          }
        </div>
      </>
    )
  }
  
  export default MyOrders