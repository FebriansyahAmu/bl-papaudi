"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/62098312321"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.7,
        type: "spring",
        stiffness: 260,
        damping: 15,
        bounce: 0.3,
      }}
      className="z-10 fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-800"
    >
      <FaWhatsapp className="text-3xl" />
    </motion.a>
  );
}

export default WhatsAppButton;
