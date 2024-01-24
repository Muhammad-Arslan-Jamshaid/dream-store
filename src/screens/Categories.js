import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Categories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);
  return (
    <>
    <div className="bg-gradient-to-r from-gray-900 to-blue-950 -mb-6">
    <h1 className="  text-center text-gray-100 font-bold text-5xl mt-12 pt-10  underline">
        Categories
      </h1>
      <div className="grid gap-10 p-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 cardss">
        {products.slice(0, 4).map((item) => {
          return (
            <>
              <div className="max-w-sm bg-gray-700 rounded-lg shadow dark:bg-gray-000 dark:border-gray-000">
                <Link to={`/products/product-details/${item.id}`}>
                  <img
                    className=" rounded-t-lg w-100 "
                    src={item.image}
                    alt="product_img"
                  />
                </Link>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-100 dark:text-dark">
                      {item.name}
                    </h5>
                  </a>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>

      <Footer />
    </>
  );
};

export default Categories;
