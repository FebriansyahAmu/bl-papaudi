"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const contactVariants = {
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
      className="w-full h-auto mt-10 flex flex-col justify-center items-center p-8"
      ref={ref}
    >
      <motion.h1
        custom={1}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contactVariants}
        className="text-4xl text-orange-700 font-extrabold text-center mb-8"
      >
        Contact Us
      </motion.h1>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="flex  flex-col sm:flex-row items-center overflow-hidden">
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contactVariants}
            className="w-full sm:w-2/3 p-6 sm:mt-0 sm:ml-8"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31916.027521418888!2d124.26562951083983!3d0.7198410000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327e3d81336d2dfd%3A0x3d9af07a444bba7c!2sBENGKEL%20LAS%2C%20papa%20udi!5e0!3m2!1sid!2sid!4v1724172063854!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg"
            ></iframe>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={contactVariants}
            className="w-full sm:w-1/3 p-6"
          >
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">
              Address Details
            </h3>
            <p className=" text-base leading-6 text-slate-900">
              Jln. Darussalam
              <br />
              Kelurahan Motoboi Kecil
              <br />
              Kotamobagu City, Sulawesi Utara
              <br />
              Indonesia
            </p>
            <h3 className="text-xl text-orange-700 font-semibold leading-7 mt-6">
              Contact Information
            </h3>
            <p className=" text-base leading-6 text-slate-900 mt-1">
              Email: infomail@wp-papaudi.com
              <br />
              Phone: +62 854-1222-5326
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
