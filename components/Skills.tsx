"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Python", "Robotics", 
  "Arduino", "Tailwind CSS",
  "Git", "Node.js", "Hardware Engineering",  
]

const Skills = () => 
{ 
    return(
        <section id="skills" className="w-full min-h-screen py-20 px-6">
            <motion.div
            initial={{ opacity:0, y:50}}
            whileInView={{ opacity:1, y:0}}
            transition={{ duration:0.6, delay:0.1}}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto text-center"
            >
            <h2 className="text-4xl font-bold text-white mb-12">Skills</h2> 

            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <motion.div
                    key={skill}
                    initial={{ opacity:0, scale:0.5}}
                    whileInView={{ opacity:1, scale:1}}
                    transition={{ duration:0.3, delay:0.05}}
                    viewport={{ once: false }}
                    className="bg-gray-900 text-white px-6 py-3 
                    rounded-full border border-gray-700 hover:border-white transition"
                    >
                    {skill}
                </motion.div>
            ))}
        </div>
    </motion.div>
</section>
);
};

export default Skills;