import { AccountCircle, Search, ShoppingCart } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-gray-400 py-4 px-5 shadow-lg">
      <div className="flex items-center gap-2 font-bold text-xl">
        <img src="/images/fc-logo.png" alt="" className="w-5 " />
        <span className="text-red-600 ">FASHION</span>
        <span>COLLECTION</span>
      </div>

      <div className="bg-white border-b-[1.5px] border-black px-1 ">
        <input type="text" placeholder="Search.." className="outline-none " />
        <Search />
      </div>
      <ul className="flex gap-5 text-lg ">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <div>
          <AccountCircle className="mr-1" />
          <button>Login</button>
        </div>
       <a href=""><ShoppingCart /> </a> 
      </ul>
    </div>
  );
};

export default Navbar;
