"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-6xl max-h-6xl py-20 px-2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        whileHover={{ scale:1.01}}
        className="
          max-w-6xl mx-auto
          p-10 rounded-4xl
          bg-white/5 backdrop-blur-2xl
          border border-white/10
          shadow-[0_8px_40px_rgba(0,0,0,0.4)]
        "
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-5">
          ABOUT ME
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-0 items-center">

          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-1">

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              I'm Emmanuel Nana Acheampong — a software and hardware engineer
              from Kumasi, Ghana. I build solutions that work not only in
              controlled environments but in real-world conditions where
              reliability matters. Whether it's developing software, designing
              systems, or solving complex technical problems, I focus on
              delivering clean, scalable, and dependable results.
            </p>

            <div className="
              bg-white/5
              border border-white/10
              backdrop-blur-2xl
              rounded-2xl
              p-6
            ">
              <h3 className="text-white font-semibold text-lg mb-1">
                Professionalism. Reliability. Quality.
              </h3>

              <p className="text-gray-400">
                Every project is approached with attention to detail,
                maintainability, and a commitment to excellence.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <img
              src="/IMG_0447.jpg"
              alt="Emmanuel Nana Acheampong"
              className="
                w-80 h-80
                object-cover
                rounded-4xl
                border border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.4)]
              "
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;