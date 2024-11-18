import { useContext } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Card from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail";
import { CartContext } from "../../Context";


function Home() {
  const context = useContext(CartContext);

  const renderView = () => {
    const filteredProducts = context.filteredProducts;

    if (filteredProducts?.length > 0) {
      if (filteredProducts?.length > 0) {
        return (
          filteredProducts?.map(product => (
            <Card 
              key={product.id} 
              product={product}
            />
          ))
        )
      } else {
        return (
          <h2 className="text-white">We don&apos;t have anything :(</h2>
        )
      }
    } else {
      return (
        context.products?.map(product => (
          <Card 
            key={product.id} 
            product={product}
          />
        ))
      )
    }
  }

    return (
      <>
        <div className="flex">
          <h1 className="text-white text-2xl">Home</h1>
        </div>
        <div className="flex justify-center items-center my-6 w-96 h-9 cursor-pointer">
          <MagnifyingGlassIcon className="size-6 text-blue-400 relative left-8"/>
          <input 
            type="text" 
            placeholder="Search a product" 
            className="w-full h-full rounded-2xl text-center bg-slate-100 placeholder:italic placeholder:text-blue-400 shadow-lg shadow-blue-500/50 text-slate-500"
            onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
        </div>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
        
      </>
    )
  }
  
  export default Home