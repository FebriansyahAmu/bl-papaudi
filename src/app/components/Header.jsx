import React from "react";

function Header() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/images/welding-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"> </div>
      <div className="relative z-10 text-center grid grid-cols-1 max-w-6xl mx-auto p-8 bg-slate-600 bg-opacity-40 rounded-lg">
        <h1 className="font-extrabold text-5xl text-white">SELAMAT DATANG</h1>
        <p className=" text-lg text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa
          amet alias minima laudantium, voluptas porro eius et iste earum
          similique excepturi vel nesciunt suscipit atque. Ipsa odit enim ab.
        </p>
      </div>
    </section>
  );
}

export default Header;
