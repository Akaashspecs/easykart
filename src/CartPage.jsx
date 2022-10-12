import React, { useEffect, useState } from 'react';

import { ImCross } from "react-icons/im";
import { getProduct } from "./api";  
import Loading from './Loading';
import CartList from './CartList';


function CartPage ({ cart, updateCart }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
   

    useEffect(
        function () {
            setLoading(true);
            const productIds = Object.keys(cart); 
            const myProductPromises = productIds.map(function (id) {
                return getProduct(id);
            });

            Promise.all(myProductPromises).then(function (products){
                setProducts(products);
                setLoading(false);
            });
         
        },
        [cart]
    );


    
   

  

    function handleRemove(event) {
        const productId = event.currentTarget.getAttribute("productid");
        
        const newCart = { ...cart };
        console.log("before", cart);
        delete newCart[productId];
        updateCart(newCart);
        setLoading(true);
    }

    function updateMyCart() {
        updateCart(localCart);
    }

    function handleChange(event) {
        const newValue = +event.target.value;   
        const productId = event.target.getAttribute('productid');
        const newLocalCart = { ...localCart, [productId]: newValue };
        setLocalCart(newLocalCart);
    }

    if (loading) {
        return <Loading />;
    }

    

    return (
        <div className='max-w-6xl px-20 py-16 mx-auto bg-white'>
            <CartList products={producrs} cart={cart} updateCart={updateCart}/> 

        
        </div>
    );
}

export default  CartPage;