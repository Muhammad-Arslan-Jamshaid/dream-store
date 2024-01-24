import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cart = ({ counter, incrementCounter, decrementCounter }) => {
  let setCounter = counter + 1;
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div
        id="#cart"
        className="mt-16 container mx-auto px-4 py-8 placeholder-sky-100 bg-gradient-to-r from-gray-900 to-blue-950"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="pt-5 text-3xl font-bold my-4 text-white">
            Product Details
          </h1>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
              <img
                src={products.images}
                alt="Product image"
                className="w-32 h-32 object-cover"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <h2 className="text-lg font-bold text-white">{products.title}</h2>
              <p className="mt-2 text-gray-200">{products.description}</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-gray-200">Quantity:</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 rounded-l-lg px-2 py-1 font-bold"
                    onClick={decrementCounter}
                  >
                    -
                  </button>
                  <span className="mx-2 text-gray-200">{setCounter}</span>
                  <button
                    className="bg-gray-200 rounded-r-lg px-2 py-1 font-bold"
                    onClick={incrementCounter}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-4 text-gray-700 dark:text-gray-300">
                <span className="ml-auto font-bold text-white">
                  Price: ${Math.round(products.price)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-200 mr-4 font-bold">Subtotal:</span>
          <span className="text-xl font-bold text-white">
            ${Math.round(products.price * setCounter)}
          </span>
          <Link to={`/products/product-details/checkout/${id}`}>
            <button className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
