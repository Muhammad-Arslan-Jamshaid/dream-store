import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:3000/user/login/register", {
        method: "POST",
        body: JSON.stringify({ name, email, contact, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.Message);
      setName("");
      setEmail("");
      setContact("");
      setPassword("");
      alert(data.Message);

      if (data.Message === "Email is already registered") {
        Navigate("/login");
      } else if (data.Message === "User registered successfully") {
        Navigate("/login");
      } else {
        alert("Please try again later");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="signupForm mt-20  flex h-screen items-center justify-center ">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-gray-800 shadow-md rounded-lg p-5">
          
            <h2 className="my-3 pb-4 text-center text-3xl font-bold tracking-tight text-gray-100">
              Sign up for a new account
            </h2>
            <form
              onSubmit={registerHandler}
              className="space-y-6"
              method="POST"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-100"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    type="username"
                    placeholder="Enter your name"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-gray-700 text-white placeholder-gray-400 px-2 py-2 mt-1 block w-full rounded-md border  shadow-sm focus:border-blue-600 focus:outline-none focus:ring-blue-700 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="bg-gray-700 text-white placeholder-gray-400  px-2 py-2 mt-1 block w-full rounded-md border  shadow-sm focus:border-blue-600 focus:outline-none focus:ring-blue-700 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-100"
                >
                  Contact number
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    id="number"
                    name="contact"
                    placeholder="Enter your contact number"
                    type="tel"
                    autoComplete="contact"
                    required
                    className="bg-gray-700 text-white placeholder-gray-400  px-2 py-2 mt-1 block w-full rounded-md border  shadow-sm focus:border-blue-600 focus:outline-none focus:ring-blue-700 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-100"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter a password"
                    autoComplete="password"
                    required
                    className="bg-gray-700 text-white placeholder-gray-400  px-2 py-2 mt-1 block w-full rounded-md border  shadow-sm focus:border-blue-600 focus:outline-none focus:ring-blue-700 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create account
                </button>
              </div>
              <p className="text-sm font-bold text-white ">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 underline "
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
