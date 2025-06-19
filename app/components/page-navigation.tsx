"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageNavigationProps {
  tabs: Array<{ id: string; label: string; icon: string }>
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function PageNavigation({ tabs, activeTab, onTabChange }: PageNavigationProps) {
  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
  const prevTab = currentIndex > 0 ? tabs[currentIndex - 1] : null
  const nextTab = currentIndex < tabs.length - 1 ? tabs[currentIndex + 1] : null

  return (
    <div className="flex justify-center items-center gap-8 mt-12 mb-8">
      {/* Previous Button */}
      <motion.button
        onClick={() => prevTab && onTabChange(prevTab.id)}
        disabled={!prevTab}
        className={`p-4 rounded-full border-2 transition-all duration-300 ${
          prevTab
            ? "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-lg hover:shadow-xl"
            : "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
        }`}
        whileHover={prevTab ? { scale: 1.1 } : {}}
        whileTap={prevTab ? { scale: 0.9 } : {}}
        aria-label={prevTab ? `Go to ${prevTab.label}` : "No previous page"}
      >
        <ChevronLeft size={24} />
      </motion.button>

      {/* Next Button */}
      <motion.button
        onClick={() => nextTab && onTabChange(nextTab.id)}
        disabled={!nextTab}
        className={`p-4 rounded-full border-2 transition-all duration-300 ${
          nextTab
            ? "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 shadow-lg hover:shadow-xl"
            : "bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
        }`}
        whileHover={nextTab ? { scale: 1.1 } : {}}
        whileTap={nextTab ? { scale: 0.9 } : {}}
        aria-label={nextTab ? `Go to ${nextTab.label}` : "No next page"}
      >
        <ChevronRight size={24} />
      </motion.button>
    </div>
  )
}
