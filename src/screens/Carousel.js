import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
 <div className="relative bg-gradient-to-r from-gray-800 to-blue-800 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-black opacity-50" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-10">
    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to <span className=" self-center text-5xl font-bold whitespace-nowrap text-white dark:text-white">
              DREAM<span style={{ color: "rgb(172,225,175)" }}>STORE</span>
            </span> </h1>
    <p className="text-lg text-gray-300 mb-8">We are offering upto 50% discount on almost every product.</p>
    <p className="text-lg text-gray-300 mb-8">Discover reliable, attractive and amaizing products.</p>
    <Link to="/products" className="bg-red-600 text-gray-100 hover:bg-red-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Explore now</Link>
  </div>
</div>


    </>
  );
};

export default Carousel;
