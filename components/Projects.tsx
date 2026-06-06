"use client";
import { motion } from "framer-motion";

const projects= [
 {
  title: "BeyondReach Portfolio Website",
  description: "A production-grade animated portfolio engineered with Next.js App Router, Framer Motion, and Tailwind CSS. Implements scroll-triggered animations, component-based architecture, and responsive design principles. Built and deployed to Vercel within a week.",
  tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Typescript & ESLint"],
  Github_repo: "https://github.com/0xNa404/BeyondReach",
  resume:"/EmmanuelNanaAcheampong_CV.pdf",
 }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
        whileHover={{scale: 1.01}}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-12">Projects</h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index*0.1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-900 rounded-xl p-6 text-left border border-gray-800 hover:border-gray-600 transition"
            >
              <h3 className="text-white font-bold text-center text-lg mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm text-justify mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
              <div className="bg-white inline-flex px-6 py-3 rounded-full gap-6 items-center">
                <a href={project.Github_repo} target="_blank" className="text-gray-400 hover:text-black text-sm transition">GitHub Repository→</a>
              </div>
              <div className="bg-white inline-flex text px-6 py-3 rounded-full items-center">
                <a href={project.resume} target="_blank" className="text-gray-400 hover:text-black text-sm transition"> View Resume→</a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Projects;