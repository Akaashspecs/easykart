import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";


function Navbar({productCount}) {
  return (
    <div className="h-20  bg-white flex border-solid border-b-4 border-black rounded-b-lg">
      <img className="ml-10 object-cover h-20" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
      <AiOutlineShoppingCart/>
      
      <span>{productCount}</span>


    </div>
  );

}

export default Navbar;