"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AboutSection from "./components/about-section"
import ExperienceSection from "./components/experience-section"
import PortfolioSection from "./components/portfolio-section"
import ContactSection from "./components/contact-section"
import TabNavigation from "./components/tab-navigation"
import CVSection from "./components/cv-section"
import SkillsSection from "./components/skills-section"
import ThemeToggle from "./components/theme-toggle"
import PageNavigation from "./components/page-navigation"

const tabs = [
  { id: "about", label: "About Me", icon: "👋" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "cv", label: "Education", icon: "🎓" },
  { id: "portfolio", label: "Portfolio", icon: "🚀" },
  { id: "contact", label: "Contact", icon: "📧" },
]

const roles = [
  "Robotics Engineer",
  "Computer Vision Engineer",
  "AI Engineer",
  "Embedded Systems Engineer",
  "Software Engineer",
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("about")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 120) // Slightly slower for better readability
        return () => clearTimeout(timeout)
      } else {
        // Pause before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2500) // Longer pause to read the full role
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 60) // Faster deletion
        return () => clearTimeout(timeout)
      } else {
        // Move to next role and start typing
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayText, isTyping, currentRoleIndex])

  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />
      case "experience":
        return <ExperienceSection />
      case "skills":
        return <SkillsSection />
      case "cv":
        return <CVSection />
      case "portfolio":
        return <PortfolioSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sannad Bilal
          </motion.h1>
          
          {/* Dynamic typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8 flex items-center justify-center"
          >
            <span className="inline-block min-w-[280px] md:min-w-[350px] text-center">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {displayText}
              </span>
              <motion.span
                className="inline-block w-0.5 h-6 md:h-7 bg-blue-600 dark:bg-blue-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.div>

          {/* Subtitle with gradient effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4"
          >
            <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent font-medium"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Smart code. Sharp vision. Solid engineering.
              </motion.span>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center items-center mt-6 space-x-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {["🤖", "💻", "⚡", "🚀"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.header>

        {/* Tab Navigation */}
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <motion.div className="mt-8" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderActiveSection()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Page Navigation */}
        <PageNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}