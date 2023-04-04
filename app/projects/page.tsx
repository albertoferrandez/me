"use client";

import { Data } from "./data";
import useGetData from "../hooks/useGetData";
import TopBarofPages from "../components/TopBarofPages";
import CardProjects from "../components/CardProjects";
import { motion } from "framer-motion";

const Projects = (): JSX.Element => {
  const data = useGetData();

  return (
    <section>
      <TopBarofPages>Proyectos</TopBarofPages>
      <motion.article
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 grid-cols-fluid mt-10 px-5"
      >
        {data.map((repo: Data) => (
          <CardProjects key={repo.id} data={repo} />
        ))}
      </motion.article>
    </section>
  )
}

export default Projects;
