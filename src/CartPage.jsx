import React, { useEffect, useState } from 'react';


import { getProductByIds } from "./api";  
import Loading from './Loading';
import CartList from './CartList';
import { withCart } from './withProvider';


function CartPage ({ cart, updateCart }) {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
   

    useEffect(
        function () {
            setLoading(true);
            const productIds = Object.keys(cart); 
            getProductByIds(productIds).then(function (products){
                setProducts(products);
                setLoading(false);
            });
         
        },
        [cart]
    );

  
    
    if (loading) {
        return <Loading />;
    }

    

    return (
        <div className='max-w-6xl px-20 py-16 mx-auto bg-white'>
            <CartList products={products} cart={cart} updateCart={updateCart}/> 

        
        </div>
    );
}

export default withCart(CartPage);