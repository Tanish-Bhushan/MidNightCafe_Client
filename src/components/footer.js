import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import {
  IoCallOutline,
  IoLocationOutline,
  IoHeartOutline,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <>
      <div className="flex text-white bottom-0 justify-between  w-full h-52 ">
        <div className="w-1/6 bg-[#282D33]  text-center">
          <h1 className="underline underline-offset-4 text-xl  text-gray-400 mt-2">
            Follow
          </h1>
          <div className="text-3xl text-gray-500">
            <TiSocialFacebookCircular className="ml-auto mr-auto mt-3 hover:scale-150  hover:text-green-400" />
            <TiSocialLinkedinCircular className="ml-auto mr-auto mt-2 hover:scale-150  hover:text-green-400" />
            <TiSocialTwitterCircular className="ml-auto mr-auto mt-2 hover:scale-150  hover:text-green-400" />
            <TiSocialInstagramCircular className="ml-auto mr-auto mt-2 hover:scale-150  hover:text-green-400" />
          </div>
        </div>
        <div className="w-4/6 bg-[#1F2025] ">
          <div className="flex justify-around mt-5">
            <div>
              <h1 className="text-xl">UserArea</h1>
              <ul className="text-gray-500">
                <li>My Account</li>
                <li>Cart</li>
                <li>Login</li>
                <li>Checkout</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl">Shopping Guide</h1>
              <ul className="text-gray-500">
                <li>Payment</li>
                <li>Shipping</li>
                <li>FAQ</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl">SiteMap</h1>
              <ul className="text-gray-500">
                <li>Payment</li>
                <li>Shipping</li>
                <li>FAQ</li>
                <li>Return Policy</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-gray-500">@Copyright.All right Reserved</p>
          </div>
        </div>
        <div className="w-2/6 bg-[#191A1C] ">
          <h1 className="m-4 text-xl ">Contact details </h1>
          <div className="flex justify-around m-1">
            <div className="flex">
              <IoCallOutline className=" text-2xl mr-1" />
              <p className="text-gray-400">Call Us</p>
            </div>
            <div className="flex">
              <IoLocationOutline className=" text-2xl mr-1" />
              <p className="text-gray-400">Find Us</p>
            </div>
            <div className="flex">
              <IoHeartOutline className=" text-2xl mr-1" />
              <p className="text-gray-400">Support Us</p>
            </div>
          </div>
          <div className="m-4 text-xl">
            <h1 className="ml-2">Newsletter</h1>
            <div>
              <input
                type="email"
                className="rounded-l-xl  mt-2 mr-1 bg-gray-800"
              />
              <button
                type="submit"
                className=" bg-[#37414c]  rounded-r-xl  w-28 text-white/70 hover:bg-green-400 hover:text-black"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
