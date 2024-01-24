import React from "react";
import Pic1 from "../assets/cvr-5.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <img className="header-img mt-10 pt-6" src={Pic1} />
      <div className="header-content flex flex-col float-right relative">
        <div className=" ">
          <h2 className=" text-4xl font-extrabold leading-10 tracking-tight text-gray-200  sm:text-5xl sm:leading-none md:text-6xl">
            <span className="bg-gray-800">DREAM</span>

            <span
              className="bg-gray-800 font-bold"
              style={{ color: "rgb(172,225,175)" }}
            >
              STORE
            </span>
          </h2>
          <p className="text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            is offering flat <span className="font-bold text-white">50%</span>{" "}
            <span className="font-bold white" style={{ color: "" }}>
              discount
            </span>{" "}
            on entire stock. Avail the offer now!
          </p>
          <div className="flex ">
            <Link to="/products" className=" avail-btn rounded-md">
              <button className="px-1.5  text-white font-bold transition duration-150 ease-in-out bg-red-500 hover:bg-white rounded-md hover:text-red-500 hover:font-bold ">
                Avail Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
