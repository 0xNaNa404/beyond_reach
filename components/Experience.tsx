"use client";
import { motion } from 'framer-motion';

const timeline = [
    {
        year: "2026 to date",
        title: "Software Engineering Intern",
        Company: "Cortexx AI",
        Description: "Contributing to the development of AI-driven solutions, collaborating with cross-functional teams to design and implement software features, and gaining hands-on experience in a fast-paced tech environment."
    },
    {
        year: "2025-2028",
        title: "BSc Telecommunications",
        Company: "Kwame Nkrumah University of Science and Technology",
        Description: "Studying telecommunications engineering, focusing on network protocols, signal processing, and communication systems."
    }
];

const Experience = () => {
    return (
    <section id="experiences" className="flex flex-col justify-center items-centre max-w-6xl"> 
    <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.4}}
       viewport={{ once: false }}
       className="relative z-10 max-w-6xl p-10 rounded-4xl
       bg-white/5 backdrop-blur-3xl border
       border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
       <h1 className="text-5xl font-bold text-white"></h1>
    <h2 className="text-4xl font-bold text-white mb-12 text-center">
    Experience & Education
    </h2> 
    <div className="flex flex-col gap-8">
        {timeline.map((item, index) => (
        <motion.div
            key={index}
            initial={{ opacity:0, x:-50}}
            whileInView={{ opacity:1, x:0}}
            transition={{ duration: 0.5, delay: index*0.1}}
            viewport={{ once: false }}
            whileHover={{scale: 1.01}}
            className="flex gap-6"
            >
            <div className="flex flex-col items-center">
               <div className="w-3 h-full bg-gray-700 mt-2"></div>
              </div>
              <div className="pb-8">
              <span className="text-gray-500 text-sm">{item.year}</span>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <span className="text-gray-400 text-sm">{item.Company}</span>
              <p className="text-gray-400 mt-2">{item.Description}</p>
            </div>
        </motion.div>
        ))}
    </div>
    </motion.div>
 </section>
    );
};

export default Experience;   