import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav
        id="navbar-sticky"
        className=" fixed top-0 start-0 w-full z-20 bg-gradient-to-r from-gray-900 to-blue-950"
      >
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
              DREAM<span style={{ color: "rgb(172,225,175)" }}>STORE</span>
            </span>
          </Link>
          <div className="desktopMenu flex items-center space-x-6 rtl:space-x-reverse">
            
                <Link to='/' offset={-100}>
   <button className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800 ">
     Home </button></Link>
                  <Link to='/products'>
   <button className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800">
     Products </button></Link>
                  <Link to='/products-category'>
   <button className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800">
     Categories </button></Link>
        <Link to='/about'>
   <button className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800">
     About Us </button></Link>
            <Link to="/contact">
              <button type="button"className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800">
     Contact</button></Link>
            <Link to="/login"><button type="button"className="bg-blue-700 px-2 py-2 rounded-lg text-white dark:text-white hover:bg-blue-800"
              >
                Login
              </button>
            </Link>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="mobMenu  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 bg-gray-700 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            style={{ display: showMenu ? "flex" : "none" }}
            className="navMenu bg-gradient-to-r from-gray-900 to-blue-950"
            id="navbar-cta"
          >



            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ListItem"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
              className="ListItem "
              onClick={() => setShowMenu(false)}
            >
              All Products
            </Link>
            <Link
              to="/products-category"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ListItem"
              onClick={() => setShowMenu(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ListItem"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ListItem"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="ListItem"
              onClick={() => setShowMenu(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;


