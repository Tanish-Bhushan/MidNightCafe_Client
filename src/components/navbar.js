import React from "react";
import logo from "../images/logo.png";
import burger from "../images/burger.png";
import ramen from "../images/ramen.png";
import pizza from "../images/pizza.png";
import softdrink from "../images/softdrink.png";
import { MdRestaurantMenu } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTableRestaurant, MdHome } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="h-20 bg-white flex justify-between p-2 shadow-lg top-0 mb-20fixed w-full">
      <div className="flex">
        <img src={logo} alt="Logo" className="h-18" />
      </div>
      <img
        src={burger}
        alt="Logo"
        className="ml-2 opacity-30 hover:opacity-100"
      />
      <img
        src={ramen}
        alt="Logo"
        className="ml-2 opacity-30 hover:opacity-100"
      />

      <div className="m-1">
        <ul className="flex space-x-12 text-xl m-3 ">
          <li className="flex cursor-pointer hover:scale-125">
            <a href="/">Home </a>
            <MdHome className="m-1" />
          </li>
          <li className="flex cursor-pointer hover:scale-125">
            <a href="/menu">Menu </a>
            <MdRestaurantMenu className="m-1" />
          </li>
          <li className="flex cursor-pointer hover:scale-125">
            Book Table <MdTableRestaurant className="m-1" />
          </li>
          <li className="flex cursor-pointer hover:scale-125">
            TopDeals <GiTakeMyMoney className="m-1" />
          </li>
        </ul>
      </div>
      <img
        src={pizza}
        alt="Logo"
        className="ml-2 opacity-30 hover:opacity-100"
      />
      <img
        src={softdrink}
        alt="Logo"
        className="ml-2 opacity-30 hover:opacity-100"
      />
      <div className="flex m-3">
        <button className="m-1 bg-red-500 rounded-lg w-20 h-10 font-light">
          <p className=" text-black font-semibold hover:scale-110">
            <a href="/Signup">Signup</a>
          </p>
        </button>
        <button className="m-1 bg-yellow-400 rounded-lg w-20 h-10 font-light">
          <p className=" text-black font-semibold hover:scale-110">
            <a href="/Login">Login</a>
          </p>
        </button>
      </div>
    </div>
  );
};
