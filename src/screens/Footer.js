import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient to r #111827 , #102256 mt-5">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Menu
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="/about"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-1}
                      duration={500}
                      className="hover:underline cursor-pointer"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-1}
                      duration={500}
                      className="hover:underline"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline ">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Youtube
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className=" text-sm sm:text-center text-gray-400">
              © 2010-2024{" "}
              <Link to="/" className="hover:underline">
                DREAMSTORE™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
