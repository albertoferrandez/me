"use client"

import { useContext } from "react"
import UseAnimations from "react-useanimations"
import github from "react-useanimations/lib/github"
import linkedin from "react-useanimations/lib/linkedin"
import { ThemeContext } from "../context/ThemeContext"
import Image from "next/image"

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme)
  }

  return (
    <header className="px-4 py-12 text-4xl flex items-center justify-between">
      <div>
        <h1 className="flex-shrink-0">ALBERTO FERRANDEZ MIRALLES</h1>
      </div>

      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/albertoferrandezmiralles/" target="_blank">
          LINKEDIN <UseAnimations animation={linkedin} />
        </a>
        <a href="https://github.com/albertoferrandez" target="_blank">
          GITHUB <UseAnimations animation={github} />
        </a>
        <button onClick={toggleTheme}>
          {
            theme === "light" 
              ? <Image src={"/sun.svg"} alt="light-mode" width={20} height={20}/>
              : <Image src={"/moon.svg"} alt="light-mode" width={20} height={20} />
          }
        </button>
      </div>
    </header>
  )
}

export default Header
