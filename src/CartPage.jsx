import React, { useEffect, useState } from "react";

import { getProductByIds } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";
import { withCart } from "./withProvider";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      const productIds = Object.keys(cart);
      getProductByIds(productIds).then(function (products) {
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
    <div className="max-w-6xl px-20 py-16 mx-auto flex flex-col grow my-10 bg-white">
      <Link to="/">
        <FiArrowLeft
          className=" text-3xl
        mb-3 border "
        />
      </Link>
      <CartList products={products} cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default withCart(CartPage);
