import React from "react";
import { Link, useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();

  function submitAlert() {
    alert("Payment done!");
  }

  return (
    <>
      <div id="#checkout" className=" pt-10 mt-5 bg-gradient-to-r from-gray-900 to-blue-950">
        <div className="w-full max-w-3xl mx-auto p-8">
          <div className="bg-gradient-to-l from-gray-900 to-blue-950 p-5 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold dark:text-white mb-4">
              Checkout
            </h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Shipping Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-white mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-white mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="address"
                  className="block text-white mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="city"
                  className="block text-white mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-white mb-1"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-white  mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Payment Information
              </h2>
              <div className="mt-4">
                <label
                  htmlFor="card_number"
                  className="block text-white mb-1"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="card_number"
                  className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="exp_date"
                    className="block text-white mb-1"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="exp_date"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-white mb-1"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white dark:border-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Link to={`/products/product-details/checkout/invoice/${id}`}>
                <button
                  onClick={submitAlert}
                  type="submit"
                  className=" mb-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700  dark:text-white "
                >
                  Confirm payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
