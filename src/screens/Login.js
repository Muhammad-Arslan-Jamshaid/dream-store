import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    try {
      let response = await fetch("http://localhost:3000/user/login/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.Message);
      setEmail("");
      setPassword("");
      alert(data.Message);

      if (data.Message === "User logged in successfully") {
        Navigate("/products");
      } else if (data.Message === "User is not registered") {
        Navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className= "loginForm mt-8 min-h-screen max-w-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="rounded-lg bg-gradient-to-l from-gray-900 to-blue-950 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
              <h2 className="my-3 pb-4   text-center text-3xl font-bold tracking-tight text-gray-100">
                Sign in to your account
              </h2>
            </div>
            <form onSubmit={submitHandler} className="space-y-6" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border  bg-gradient-to-l from-gray-900 to-blue-950 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border  bg-gradient-to-l from-gray-900 to-blue-950  placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-100"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
              <p className="mt-2 text-center text-sm text-gray-100 max-w">
                Don't have an account?{" "}
                <Link
                  to="/register "
                  className="font-medium text-blue-600 underline hover:text-blue-500"
                >
                  Create a new account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
