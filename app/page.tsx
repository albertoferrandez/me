"use client";

import NavBar from "./components/NavBar"
import Portada from "./components/Home"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeOut",
        duration: 2,
      }}
      exit={{ opacity: 0}}
      className="flex flex-col md:flex-row items-center justify-center w-full"
    >
        <div className="w-full md:w-1/2">
          <NavBar />
        </div>
        <div className="w-full md:w-1/2">
          <Portada />
        </div>
    </motion.div>
  )
}
