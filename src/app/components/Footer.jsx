import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full h-2/3 p-8 mt-14 bg-slate-800 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-2">
          <h3 className="text-2xl font-semibold mb-4 text-orange-700">
            About Us
          </h3>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
            explicabo necessitatibus? Quasi culpa iste voluptatum iusto alias
            molestias illo rem, dolores cum suscipit possimus, assumenda fugiat
            nobis reprehenderit adipisci consequatur.
          </p>
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold mb-4 text-orange-700">
            Services
          </h3>
          <ul className="text-white">
            <li>Structural Welding</li>
            <li>Repair & Maintenance</li>
            <li>Consultation & Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-700">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-t border-gray-400" />
      <div className="text-center text-white">
        &copy; {new Date().getFullYear()} WriteLine. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
