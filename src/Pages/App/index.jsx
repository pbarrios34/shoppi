import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { Navbar } from '../../Components/Navbar'
import { Layout } from '../../Components/Layout'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
