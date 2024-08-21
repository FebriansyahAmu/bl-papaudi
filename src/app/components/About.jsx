import React from "react";

function About() {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center p-8 mt-14">
      <h1 className="text-4xl text-orange-700 font-extrabold text-center mb-8">
        TENTANG KAMI
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
        <div className="md:col-span-7">
          <h2 className="text-3xl font-semibold text-orange-700  md:text-left ">
            Welding
          </h2>
          <p className=" md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut
            reprehenderit, aperiam impedit eum cupiditate amet similique
            accusamus molestiae hic magni animi exercitationem distinctio, non
            fugiat dicta assumenda odit excepturi?
          </p>
        </div>
        <div class="md:col-span-5">
          <img src="/images/welding-person.jpg" alt="Welding person" />
        </div>
      </div>
    </section>
  );
}

export default About;
