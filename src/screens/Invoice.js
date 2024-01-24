import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Invoice = ({ counter }) => {
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
  });

  return (
    <>
    
     <div className="invoice  bg-gradient-to-r from-gray-900 to-blue-950">
     <div
        id="#invoice"
        className=" mt-20 bg-white rounded-lg shadow-lg px-6 py-10 max-w-2xl mx-auto">
           {/* <div className="text-red-600 mb-6">Don't refresh this page until saving this invoice.</div> */}
            <div className="text-white text-center mb-4 font-semibold text-lg bg-gray-800">
              DREAM<span style={{ color: "rgb(172,225,175)" }}>STORE</span>™
            </div>
        <div className="underline font-bold text-xl mb-2 text-gray-700 text-center">
          INVOICE
        </div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
          </div>
          <div className="text-gray-700">
            <div className="text-sm font-bold">Date :</div>
            <div className="text-sm">{Date()}</div>
          </div>
        </div>

        <table className="w-full text-left mb-8 border-t-2 border-gray-300">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">
              Item(s)
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Quantity
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Price</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 text-gray-700">{products.title}</td>
              <td className="py-4 px-6 text-gray-700">{counter}</td>
              <td className="py-4 px-2 text-gray-700">
                ${Math.round(products.price)}
              </td>
             
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end mb-2">
          <div className="text-gray-700 mr-2">Subtotal:</div>
          <div className="text-gray-700">
            ${Math.round(products.price * counter)}
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="text-gray-700 mr-4">GST of 17% :</div>
          <div className="text-gray-700 ">
            ${Math.round(products.price * counter * 0.17)}
          </div>
        </div>
        <div className="flex justify-end mb-6">
          <div className="text-gray-700 mr-2 font-semibold text-lg uppercase">Total:</div>
          <div className="text-gray-700 font-bold text-xl">
            $
            {Math.round(
              (products.price * counter) + (products.price * counter * 0.17)
            )}
          </div>
        </div>
          <p className="border-t-2 text-gray-700 font-bold" >The total payable amount of ${Math.round((products.price * counter) + (products.price * counter * 0.17))} has been deducted from your provided bank card.</p>
        <div className="border-t-2 border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 mb-2">
            Your order will be shipped within 7 days. Thank you for your
            business! Have a nice day!
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Invoice;
