"use client";

import { motion } from "framer-motion";
import TopBarofPages from "../components/TopBarofPages";
import { experiences } from "../mockups/experiences";

const Experience = () => {
  return (
    <section className="">
      <TopBarofPages>Experiencia</TopBarofPages>
      <motion.article
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        className="mt-4"
      >
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((exp) => (
            <li className="mb-10 ml-4" key={exp.puesto}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">    
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.fecha}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.puesto}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.funciones.map((funcion) => (
                  <dt key={funcion} className="mt-2">
                    {funcion}
                  </dt>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </motion.article>
    </section>
  );
};

export default Experience;
