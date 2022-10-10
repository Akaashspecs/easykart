import React, { useEffect, useState } from 'react';

import { ImCross } from "react-icons/im";
import { getProduct } from "./api";  
import Loading from './Loading';

function CartPage ({ cart, updateCart }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const productIds = Object.keys(cart); 
    console.log("id", cart, productIds);
    const [localCart, setLocalCart] = useState(cart);


    useEffect(
        function () {
            setLocalCart(cart);
        },
        [cart]
    );
    
   

    useEffect(
        function() {
            const myProductPromises = productIds.map(function (id) {
                return getProduct(id);

            });

            Promise.all(myProductPromises).then(function (products) {
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
        <div>
        {products.map(function (p) {
            return (
                <div key={p.id}>
                    {p.title}{" "}
                    
                    <input
                        productid={p.id}
                        type="number"
                        className='w-12 p-1 mx-2 border border-gray-300 rounded-md'
                        value={localCart[p.id]}
                        onChange={handleChange}
                    />
                    <button productid={p.id} onClick={handleRemove}>
                        <ImCross />
                    </button>
                </div>
                
            );
            
        })}
        <button onClick={updateMyCart}>Update cart</button>
     </div>
    );
}

export default  CartPage;