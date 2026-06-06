"use client";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home">
      <div className="relative flex flex-col justify-center items-center text-center px-6 min-h-screen overflow-hidden">

        {/* liquid glow background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          />

        {/* glass card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 max-w-3xl p-10 rounded-3xl
                     bg-white/5 backdrop-blur-3xl
                     border border-white/10
                     shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
          <h1 className="text-5xl font-bold text-white">
            Hi, you reached 0xN4NA!
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            A frontend-focused developer building production-ready web applications
            with Next.js, TypeScript, and modern UI animation. I specialize in
            creating responsive, scalable, and visually engaging interfaces with
            smooth user experiences.
          </p>

          <div className="mt-8">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              See my work
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;