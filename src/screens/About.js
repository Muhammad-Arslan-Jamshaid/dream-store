import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-8 pt-4 bg-gradient-to-r from-gray-900 to-blue-950  sm:flex items-center max-w-screen-xl ">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="img_" />
          </div>
        </div>
        <div className="sm:w-1/2 p-10">
          <div className="text">
            <span className="text-gray-200 border-b-2 border-gray-200 uppercase">
              About us
            </span>
            <h2 className="my-4 text-gray-100 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-white ">DREAM</span>
              <span
                style={{ color: "rgb(172,225,175)" }}
              
              >
                STORE
              </span>
            </h2>
            <p className="text-gray-100 font-semibold text-xl">
              It is a trusted platform that provides almost everything daily
              life use item inside a single web application. Our company
              provides quality assurance and durability of all products. We only
              deal in branded products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
