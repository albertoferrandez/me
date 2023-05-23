'use client'

import { useState, createContext, useEffect, ReactNode } from "react"

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext<{
  theme: string
  setTheme: (theme: string) => void
}>({
  theme: "dark",
  setTheme: (theme: string) => {},
})

const ThemeContextProvider = ({ children }: ThemeContextProviderProps ) => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
