"use client"

import { useContext } from "react"
import UseAnimations from "react-useanimations"
import { ThemeContext } from "../context/ThemeContext"
import download from "react-useanimations/lib/download"


const AboutMe = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="mt-8">
      <h2 className="text-center text-[34px] tracking-wider leading-10">
        Hola, soy Alberto 👋
      </h2>
      <p className="mx-auto text-center mt-4">
        Soy Desarrollador Frontend y apasionado por la programación y la
        tecnología.
      </p>
      <p className="mx-auto text-center mt-2">
        1 año de experiencia en tecnologias como HTML, CSS y JavaScript. Formado
        de manera autodidacta en TypeScript, React, NextJs.
      </p>
      <p className="mx-auto text-center mt-2">
        Nociones en alguna tecnologia para backend como Supabase, MongoDB,
        Prisma o NodeJS.
      </p>

      <div className="flex justify-center mt-16">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative inline-flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Curriculum Vitae <UseAnimations animation={download} strokeColor={theme === 'light' ? 'black' : 'white'}/>
          </span>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
