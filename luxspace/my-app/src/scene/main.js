import React from "react";
import Banner from "../images/banner.png";
import living from "../images/living.png";
import child from "../images/child.png";
import bed from "../images/bed.png";
import decor from "../images/decor.png";

export default function main(props) {
  return (
    <div>
      <div className=" hero flex-row  -mt-16 overflow-hidden ">
        <div className=" lg:grid lg:grid-cols-4 sm:grid-cols-none  ">
          <div className="col-span-2">
            <h1 className="font-sans font-semibold text-black text-center text-5xl mx-auto  lg:mt-64 md:mt-20 sm:mt-20  grid col-span-1 mb-4 ">
              The Room <br />
              You've Dreaming
            </h1>
            <p className="text-center font-medium text-lg">
              Kami menyediakan furniture berkelas yang <br />
              membuat ruangan terasa homey
            </p>
            <center>
              <button className=" bg-pink font-sans font-medium rounded-full w-40 h-12 mx-auto mt-14 hover:bg-black hover:text-pink hover:ease-out md:mb-20 sm:mb-20">
                Explore Now
              </button>
            </center>
          </div>
          <div className=" lg:col-span-2  flex items-stretch ">
            <img
              src={Banner}
              className=" lg:w-full lg:h-full sm:w-0 sm:h-0    "
            />
          </div>
        </div>
      </div>
      <div className="bg-blank w-full mx-auto h-fit   ">
        <div className="container mx-auto">
          <h1 className=" mx-auto font-sans text-left text-xl text-black py-16 ml-10 font-semibold  ">
            Browse The Room <br />
            That We Designed For You
          </h1>
          <div className=" grid xl:grid-cols-12 grid-rows-2 gap-4  ml-10 mr-10   ">
            <div className="relative row-start-1 row-end-2 col-span-5  rounded-xl ">
              <img
                src={living}
                className="w-full h-full  object-cover object-center overlay overflow-hidden rounded-3xl  "
              />
              <h2 className="font-sans font-semibold text-black text-xl absolute top-20 left-11 pl-72    ">
                Living Room
              </h2>
              <p className="font-sans font-normal text-black text-lg text-center absolute top-28 left-40 pl-44">
                18.309 items
              </p>
            </div>
            <div className=" relative row-start-2 row-end-2 col-span-5  rounded-xl">
              <img
                src={child}
                className="w-full h-full overflow-hidden rounded-3xl object-cover "
              />
              <h2 className="font-sans font-semibold text-black text-xl absolute top-20 left-11 pl-72    ">
                Children Room
              </h2>
              <p className="font-sans font-normal text-black text-lg text-center pl-44  absolute top-28 left-40 ">
                837 items
              </p>
            </div>
            <div className=" relative row-span-2 lg:col-span-3 sm:col-span-5 rounded-xl md:col ">
              <img
                className="xl:w-full xl:h-full object-cover  overlay  rounded-xl sm:h-52 sm:w-full rounded-2xl"
                src={decor}
              />
            </div>
            <div className=" relative row-span-2 lg:col-span-4 sm:col-span-5">
              <img
                src={bed}
                className="xl:w-full xl:h-full sm:w-full  sm: h-52 overflow-hidden object-cover rounded-2xl  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto py-10">
        <h1 className="font-sans text-center text-xl text-black font-semibold py-4">
          Just Arrived <br />
          This Summer For You
        </h1>
      </div>
    </div>
  );
}
