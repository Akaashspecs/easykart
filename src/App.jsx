import React, { useState } from 'react';
import Product from './Product';
import ProductDesc from './ProductDesc';
import Span from './Span';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';
import ProductView from './ProductView';
import NotFound from './NotFound';
import { Routes,Route } from 'react-router-dom';



function App() {

    const savedDataString = localStorage.getItem("my-cart") || "{}";
    const savedData = JSON.parse(savedDataString);
  
    const [count , setCount] = useState(0);
   
    const [cart , setCart] = useState(savedData);
  
    
  
  
    const handleAddToCart = (productId, count) =>  {
     let oldCount = cart[productId] || 0;

      const newCart = {...cart, [productId]: oldCount + count };
      setCart(newCart);
      const cartString = JSON.stringify(newCart);
      localStorage.setItem("mycart", cartString);
    };

    const totalCount = Object.keys(cart).reduce(function(previous, current) {
     return previous + cart[current];
    }, 0);


  return (
    <>
      <div class="bg-slate-50 bg-cover flex flex-col h-screen">
        <Navbar productCount={totalCount} />
        
        
        <Routes>
          
          <Route index element={<ProductView/>}></Route>
          <Route path='/Product/:id/' element={<ProductDesc onAddToCart={handleAddToCart} />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

        

        <Footer />

      </div>
      
    </>
  );
}

export default App;