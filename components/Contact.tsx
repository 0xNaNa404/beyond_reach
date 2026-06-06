"use client";

import { motion } from "framer-motion";

const Contact = () =>
{
  return (
   <section id="contact">
    <div  className="w-full py-12 px-6 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

        <p className="text-gray-400 text-center">
          Got a deal, opportunity, or idea? Reach me through any of these.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://github.com/0xNaNa404"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/acheampong-emmanuel-nana-66b21531a"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:emmanuelnanaacheampong777@gmail.com"
            className="text-gray-400 hover:text-white hover:underline transition"
          >
            Email
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            X (Twitter)
          </a>
        </div>
        <div className="w-full border-t border-gray-800 my-4" />
        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} Emmanuel Nana Acheampong. All rights reserved.
        </p>
      </motion.div>
    </div>
    </section>
  );
}

export default Contact;