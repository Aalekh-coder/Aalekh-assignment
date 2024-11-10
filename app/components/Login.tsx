
"use client";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Casino Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/assets/logincara.png"
          className="h-[100vh] absolute bottom-0"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-red-950">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6">Login</h1>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-800 text-white border border-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              className="w-full py-2 px-4 bg-red-700 text-white font-semibold rounded hover:bg-red-900 transition"
            >
              <Link href="/Home">Login</Link>
            </button>
          </div>

          {/* Optional Links */}
          <div className="mt-4 text-sm text-center text-gray-400">
            <p>
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
