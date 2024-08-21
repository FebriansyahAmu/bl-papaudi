"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      },
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="w-full h-auto flex flex-col justify-center items-center p-8 mt-14"
      ref={ref}
    >
      <motion.h1
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={serviceVariants}
        className="text-4xl text-orange-700 font-extrabold text-center mb-8"
      >
        TENTANG KAMI
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 max-w-7xl">
        <motion.div
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={serviceVariants}
          className="md:col-span-7"
        >
          <h2 className="text-3xl font-semibold text-orange-700  md:text-left ">
            Welding
          </h2>
          <p className=" md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut
            reprehenderit, aperiam impedit eum cupiditate amet similique
            accusamus molestiae hic magni animi exercitationem distinctio, non
            fugiat dicta assumenda odit excepturi?
          </p>
          <h2 className="text-3xl font-semibold text-orange-700 mt-16 md:text-left ">
            Our Workshop
          </h2>
          <p className=" md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut
            reprehenderit, aperiam impedit eum cupiditate amet similique
            accusamus molestiae hic magni animi exercitationem distinctio, non
            fugiat dicta assumenda odit excepturi?
          </p>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={serviceVariants}
          class="md:col-span-5"
        >
          <img src="/images/welding-person.jpg" alt="Welding person" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
