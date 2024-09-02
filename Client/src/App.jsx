import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Layouts/Header/Header'
import ProductProvider from './context/ProductProvider'
import GlobalContextProvider from './context/GlobalContextProvider'
import Footer from './Layouts/Footer/Footer'

function App() {
  React.useEffect(() => {
    const handleScroll = (event) => {
    };

    document.addEventListener('click', handleScroll);
    return () => {
      document.removeEventListener('click', handleScroll);
    };
    handleScroll();
  }, [])
  return (
    <>
      <GlobalContextProvider>
        <Header />
        <ProductProvider>
          <Outlet />
        </ProductProvider>
        <Footer />
      </GlobalContextProvider>
    </>
  )
}

export default App
