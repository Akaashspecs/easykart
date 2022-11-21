import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { withCart } from "./withProvider";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="h-20  bg-white flex border-solid border-b-4 border-black rounded-b-lg pl-10 pr-10">
      <div>
        <img
          className=" object-cover h-20"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        />
      </div>
      <div className="grow"></div>
      <Link
        to="/cart"
        className="text-black mx-2 underline font-Shadows text-2xl hover:italic"
      >
        <div className="flex mt-5">
          <AiOutlineShoppingCart />

          <span>{cartCount}</span>
        </div>
      </Link>
    </div>
  );
}

export default withCart(Navbar);
