"use client"

import LinksPortada from "./LinksPortada"

const Portada = () => {
  return (
    <main className="mt-16 md:mt-0 flex flex-col text-4xl text-slate-300">
      <div className="flex flex-col relative sm:text-center">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl subpixel-antialiased mb-2 z-10">
          ALBERTO FERRANDEZ MIRALLES
        </h1>
        <h2 className="text-center font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
          FRONT-END DEVELOPER
        </h2>
      </div>

      <LinksPortada />

      <div className="px-10 mt-10 text-sm text-justify">
        <p>
          Frontend Developer con 1 año de experiencia en el desarrollo de aplicaciones web.
        </p>
        <p className="mt-2">
          De manera autodidacta he ido profundizando en el mundo de React y su ecosistema, ademas de familiarizarme
          con tecnologias como Redux, TypeScript y Next JS.
        </p>
      </div>
    </main>
  )
}

export default Portada;
