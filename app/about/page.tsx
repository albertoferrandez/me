"use client";

import { motion } from "framer-motion";
import TopBarofPages from "../components/TopBarofPages";

const AboutMe = () => {
  return (
    <section>
      <TopBarofPages>
        Sobre Mi
      </TopBarofPages>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "linear", delay: 1 }}
        exit={{ opacity: 0 }}
        className="mt-8"
      >
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          iste excepturi similique, dolorum ullam esse tenetur possimus
          reiciendis, consectetur reprehenderit repellendus veritatis ab impedit
          laudantium deserunt? Sapiente tempora modi at.
        </p>
      </motion.article>
    </section>
  );
};

export default AboutMe;
