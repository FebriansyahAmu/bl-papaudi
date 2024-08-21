"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/62098312321"
      target="_blank"
      rel="noopener noreferrer"
      className="z-10 fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-800"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}

export default WhatsAppButton;
