import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
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
      <div className="bg-gradient-to-r #111827 , #0c1e55">
      <h1 className=" text-center text-gray-100 font-bold text-5xl mt-0 pb-14 pt-20 underline">
        Products
      </h1>
      <section
        id="#projects"
        className=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.slice(1, 26).map((item) => {
          return (
            <>
              <div className="w-72 bg-gray-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link
                 
                  to={`/products/product-details/${item.id}`}
                >
                  <img
                    src={item.images}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                  <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold text-white truncate block capitalize">
                      {item.title.slice(0, 30)}
                    </p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-white cursor-auto my-3">
                        Price: ${item.price}
                      </p>
                      <del className="deletedPrice">
                        <p className="text-sm text-gray-300 cursor-auto ml-2">
                          ${Math.round(item.price + item.price * 0.5)}
                        </p>
                      </del>
                    </div>
                    <Link
                      to={`/products/product-details/${item.id}`}
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
                </Link>
              </div>
            </>
          );
        })}
      </section>
      </div>
    </>
  );
};

export default Cards;
