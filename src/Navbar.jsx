import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";


function Navbar({productCount}) {
  return (
    <div class="h-20 border bg-white flex">
      <img class="ml-10 object-cover h-20" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
      <AiOutlineShoppingCart/>
      <span>{productCount}</span>


    </div>
  );

}

export default Navbar;