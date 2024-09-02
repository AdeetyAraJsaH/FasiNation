import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './Layouts/Home/Home.jsx'
import './index.css'
import Product from './Layouts/Product/Product.jsx'
import Catalogue from './Layouts/Catalogue/Catalogue.jsx'
import Cart from './Layouts/Cart/Cart.jsx'
import Favourites from './Layouts/Favourites/Favourites.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/:category",
        element: <Catalogue />,

      },
      {
        path: '/:category/:productId',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/favourites',
        element: <Favourites />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
