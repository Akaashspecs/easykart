import React from 'react';
import ProductView from './ProductView';
import { Link } from "react-router-dom";


function Product({ title, price, category, thumbnail , id, review }) {
  
  return (

    <div className="w-56 mb-7 xl:w-64 2xl:w-72">
      <div className="border">
        <img className="object-cover  h-56 xl:h-64 2xl:h-72" src= {thumbnail}  />
        
      </div>
      <div className="mt-1  text-gray-500 text-xs">{category}</div>
      <div className=" max-h-min font-semibold"> {title} </div>

      <div className="flex justify-between">

        <div class="text-sm mb-3">${price}</div>
        <Link className="bg-red-500 px-3 py-1 text-sm rounded" to={"/Product/" + id}>Buy Now</Link>
      </div>

    </div>

  );

}

export default Product;



















































