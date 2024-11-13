import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"

function MyOrder() {
  const context = useContext(CartContext);

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1
  
    return (
      <>
        <div className="flex">
          <Link to={"/my-orders"}>
            <ChevronLeftIcon className="size-6 text-blue-400 cursor-pointer"/>
          </Link>
          <h1 className="ml-3">My Order</h1>

        </div>
        <div className="flex flex-col w-96 h-[42rem]">
          <div className="items-center w-96 h-auto mt-7 p-2 overflow-y-auto">
              {
                context.order?.[index]?.products.map((product) => (
                  <OrderCard 
                      key={product.id} 
                      title={product.title}
                      imageUrl={product.image}
                      price={product.price}
                      quantity={product.quantity}
                  />
                ))           
              }
          </div>
          <div className="flex items-center h-20 bg-slate-100 rounded-b-2xl">
            <p className="font-bold p-3">
              <span>Total: </span>
              Q.{context.order?.[index]?.totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </>
    )
  }
  
  export default MyOrder