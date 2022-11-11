import React, { useState, useEffect} from "react";
import Button from "./Button";
import CartRow from "./CartRow";
import CartTotal from "./CartTotal";
import { withCart } from "./withProvider";

function CartList({ cart, updateCart}){
    const [localCart, setLocalCart] = useState(cart);

    useEffect(
        function () {
            cart.maps
            setLocalCart(cart);

        },
        [cart]
    );

    function handleQuantityChange(productId, newValue) {
        const newLocalCart = { ...localCart, [productId]: newValue };
        setLocalCart(newLocalCart);
    } 

    function handleUpdateCartClick() {
        updateCart(localCart);
    }

    function handleRemove(productId) {
        const newCart = { ...cart };
        delete newCart[productId];
        updateCart(newCart);
    
    }

    return (
        <div>
            <div className="flex px-4 py-2 space-x-4 bg-gray-100 border border-gray-300">
                <span className="ml-28 grow">Product</span>
                <span className="w-28">Price</span>
                <span className="w-32">Quantity</span>
                <span className="w-28">Subtotal</span>
            </div>
            {cart.map(function (cartItem) {
                return (
                    <CartRow
                        key={cartItem.product.id}
                        product={cartItem.product}
                        quantity={cartItem.quantity}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />


                );
            })}
            <div className="flex justify-end py-2 px-4 border border-gray-300">
                <Button onClick={handleUpdateCartClick}>Update Cart</Button>

            </div>
            
            
        </div>
    );

}

export default withCart(CartList);