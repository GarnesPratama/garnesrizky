import React from "react";
import logo from "../images/logo.png";
import cart from "../images/cart.png";

export default function header() {
  return (
    <div>
      <div className=" opacity-90 fixed-top bg-transparent overflow-hidden   ">
        <div className="   ml-10 flex font-sans py-3   ">
          <img src={logo} alt="logo luxspace" />
        </div>
        <div className=" mr-10 flex justify-end lg:gap-8  ">
          <ul className=" flex  gap-7 font-sans text-center text-sm -mt-10  ">
            <li className="">
              <a className="lg:text-white hover:text-pink hover:underline sm:text-black ">
                Showcase
              </a>
            </li>
            <li className="">
              <a className="lg:text-white hover:text-pink hover:underline sm:text-black ">
                Catalog
              </a>
            </li>
            <li className="">
              <a className="lg:text-white hover:text-pink hover:underline sm:text-black">
                Delivery
              </a>
            </li>
            <li className="">
              <a className="lg:text-white hover:text-pink hover:underline sm:text-black">
                Reward
              </a>
            </li>
          </ul>
          <img
            className=" lg:-mt-10 lg:mr-10 w-6 h-6 flex  "
            src={cart}
            alt="keranjang"
          />
        </div>
      </div>
    </div>
  );
}
