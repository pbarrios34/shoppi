import { useContext } from "react"
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard"
import { CartContext } from "../../Context";

function MyOrders() {
  const context = useContext(CartContext);

    return (
      <>
        MyOrders
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
      </>
    )
  }
  
  export default MyOrders