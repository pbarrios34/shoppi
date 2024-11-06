import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { apiUrl } from "../../api";
import { ProductDetail } from "../../Components/ProductDetail";


function Home() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
      fetch(`${apiUrl}/products`)
			.then(response => response.json())
			.then(data => {
        if (data.status === "SUCCESS") {
          setProducts(data.products)
        }
      })
      .catch(error => console.error('Error fetching data:', error))
    }, []);

    return (
      <>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {
            products?.map(product => (
              <Card 
                key={product.id} 
                product={product}
              />
            ))
          }
        </div>
        <ProductDetail />
        
      </>
    )
  }
  
  export default Home