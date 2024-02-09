import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Root from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import ProductDetails from './pages/ProductDetails'
 const router = createBrowserRouter([
  { path: '/',
   element: <Root/>,
   errorElement : <ErrorPage/>,
   children: [
    { index: true, element: <Home/>},
    { path: 'products', element: <Product/>},
    { path: 'products/:id', element: <ProductDetails/>}
   ],
  },
  
 ])
function App() {

  return <RouterProvider router={router}/>
}

export default App
