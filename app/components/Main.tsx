"use client"

import { AnimatePresence, motion } from "framer-motion"
import useTabs from "../hooks/useTabs"
import AboutMe from "./AboutMe"
import Proyectos from "./Proyectos"
import { Props } from "../type/type"

export default function Main({ repos }: Props) {

  const tabsData = [
    {
      label: "Sobre Mi",
      content: <AboutMe />,
    },
    {
      label: "Proyectos",
      content: <Proyectos repos={repos}/>,
    },
  ]

  const {
    tabsRef,
    setActiveTabIndex,
    activeTabIndex,
    tabUnderlineLeft,
    tabUnderlineWidth,
  } = useTabs()

  return (
    <div className="w-full">
      <div className="relative">
        <div className="flex space-x-3">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el!)}
                className="pt-2 pb-3 px-6"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-gradient-to-r 
          from-green-300 to-purple-400 transition-all 
          duration-300 rounded"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTabIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div>{tabsData[activeTabIndex].content}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
