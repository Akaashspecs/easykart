import React from "react";
import Product from "./Product";
import ProductView from "./ProductView";

function ProductList({ products }) {
  return (
    <div className="flex flex-row flex-wrap justify-between self-center  shrink-0 mt-4  bg-white">
      {products.map(function (item) {
        return (
          <Product
            key={item.title}
            id={item.id}
            title={item.title}
            category={item.category}
            thumbnail={item.thumbnail}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
