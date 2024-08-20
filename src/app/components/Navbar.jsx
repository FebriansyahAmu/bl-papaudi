"use client";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-4 fixed  top-0 left-0 right-0 z-10 w-full bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href=""
          className="flex item-center text-white text-lg font-semibol ml-11"
        >
          BengkelLas PapaUdi
        </a>
        <div className="hidden md:flex space-x-8 mr-11">
          <a href="" className="text-gray-300 hover:text-gray-700">
            Home
          </a>
          <a href="" className="text-gray-300 hover:text-gray-700">
            Tentang Kami
          </a>
          <a href="" className="text-gray-300 hover:text-gray-700">
            Kontak
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full flex border-gray-100 rounded-lg items-center flex-col space-y-4 mt-4">
          <a
            href="/"
            className="block w-full py-2 text-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
          >
            Home
          </a>
          <a
            href="#"
            className="block w-full py-2 text-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
          >
            Tentang Kami
          </a>
          <a
            href="#"
            className="block w-full py-2 text-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
