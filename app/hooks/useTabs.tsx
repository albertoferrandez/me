'use client'

import { useState, useRef, useEffect } from "react"

const useTabs = () => {
    
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

  const tabsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    function setTabPosition() {
        const currentTab = tabsRef.current[activeTabIndex]
        if (currentTab) {
          setTabUnderlineLeft(currentTab.offsetLeft || 0)
          setTabUnderlineWidth(currentTab.clientWidth || 0)
        }
      }

    setTabPosition()
    window.addEventListener("resize", setTabPosition)

    return () => window.removeEventListener("resize", setTabPosition)
  }, [activeTabIndex])
  
  return {
    tabsRef,
    activeTabIndex,
    setActiveTabIndex,
    tabUnderlineLeft,
    tabUnderlineWidth
  }
}

export default useTabs
