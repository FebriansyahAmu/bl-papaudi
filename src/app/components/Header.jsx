"use client";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
      }}
    >
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/welding-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-55"> </div>
        <div className="relative z-0 text-center grid grid-cols-1 max-w-4xl mx-auto p-8  rounded-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <h1 className="font-extrabold text-5xl text-white">
              <span class="text-orange-700">PROFESIONAL</span> & HIGH QUALITY
              WELDING
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <p className="italic text-base text-white mt-2">
              Hasil pengelasan yang solid dan kelihatan keren, sesuai dengan
              kebutuhanmu.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Header;
