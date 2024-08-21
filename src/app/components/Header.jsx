import React from "react";

function Header() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/welding-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-55"> </div>
      <div className="relative z-0 text-center grid grid-cols-1 max-w-4xl mx-auto p-8  rounded-lg">
        <h1 className="font-extrabold text-5xl text-white">
          <span class="text-orange-700">PROFESIONAL</span> & HIGH QUALITY
          WELDING
        </h1>
        <p className="italic text-base text-white mt-2">
          Hasil pengelasan yang solid dan kelihatan keren, sesuai dengan
          kebutuhanmu.
        </p>
      </div>
    </section>
  );
}

export default Header;
