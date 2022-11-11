import React from 'react';

import ProductDesc from './ProductDesc';

import Navbar from './Navbar';
import Footer from './Footer';

import ProductView from './ProductView';
import NotFound from './NotFound';
import { Routes,Route } from 'react-router-dom';
import SignUpPage from './SignupPage';
import CartPage from './CartPage';
import Login from './Login';


import AuthRoute from './AuthRoute';
import UserRoute from './UserRoute';

import Alert from './Alert';

import UserProvider from './Providers/UserProvider';
import AlertProvider from './Providers/AlertProvider';
import CartProvider from './Providers/CartProvider';




function App() {



  return (
    <>
      <div class="bg-cover h-screen bg-[url('https://i.redd.it/t7b5j2cqpce21.png')] bg-no-repeat bg-cover flex flex-col h-screen overflow-scroll">
        
        <UserProvider >
          
            <AlertProvider >
            <CartProvider>
              
              
              <Alert /> 
          
              <Navbar  />
        
        
              <Routes>
          
              <Route 
              index 
              element={
              <UserRoute >
              <ProductView  />
              </UserRoute>
              }
              />

              <Route path='/Product/:id/' element={<ProductDesc  />}></Route>
              <Route path='/cart' element={<CartPage />}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              <Route path='/signup' element={<SignUpPage/>}> </Route>
              <Route 
                path='/login' 
                element={
                <AuthRoute >
                  <Login />
                </AuthRoute>}
              /> 
          

              </Routes>

        

              <Footer />
              </CartProvider>
            </AlertProvider>
          
        </UserProvider>
      </div>
      
    </>
  );
}

export default App;