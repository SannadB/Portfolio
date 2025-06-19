"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const experiences = [
  {
    title: "AI Engineer",
    company: "Genetech Solutions",
    period: "June 2024 - Present",
    description:
      "Leading AI solution development in Genetech's Emerging Technologies Lab (GETLab), focusing on computer vision, deep learning, and LLM-based systems. Responsible for designing full-stack AI solutions and architecting end-to-end pipelines.",
    achievements: [
      "Developed facial recognition and visual detection pipelines",
      "Built LLM-based customer service systems",
      "Deployed AI solutions on AWS, GCP, and DigitalOcean",
      "Led computer vision projects using YOLO and Vision Transformers",
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Software Developer",
    company: "Genetech Solutions",
    period: "Feb 2022 - June 2024",
    description:
      "Started as software developer working on websites, web applications, and desktop solutions. Transitioned to AI projects in mid-2023, focusing on applied computer vision and deep learning.",
    achievements: [
      "Developed web applications using Laravel and Vue.js",
      "Transitioned to AI/ML development",
      "Implemented CI/CD pipelines with Docker",
      "Built scalable architectures with Nginx and Apache",
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    title: "AI Trainer",
    company: "ConsulNet Corporation",
    period: "June 2024 - Present",
    description:
      "Teaching practical AI tools including LLMs, prompt engineering, and real-world AI applications to beginners.",
    achievements: [
      "Designed beginner-friendly AI curriculum",
      "Taught LLM applications and prompt engineering",
      "Guided students through hands-on AI projects",
    ],
    color: "from-orange-500 to-red-600"
  },
]

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12 relative"
      >
        <span className="relative z-10">Professional Experience</span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer group"
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated gradient background on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Animated border gradient */}
            <motion.div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur-sm -z-10`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: hoveredIndex === index ? 0.2 : 0,
                scale: hoveredIndex === index ? 1.05 : 0.8
              }}
              transition={{ duration: 0.4 }}
            />

            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <motion.div
                  animate={{
                    x: hoveredIndex === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                    {exp.company}
                  </p>
                </motion.div>
                
                <motion.span
                  className={`text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm mt-3 md:mt-0 self-start border border-gray-200 dark:border-gray-600 font-medium`}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                    backgroundColor: hoveredIndex === index ? "rgb(243 244 246)" : undefined
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {exp.period}
                </motion.span>
              </div>

              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.9
                }}
                transition={{ duration: 0.3 }}
              >
                {exp.description}
              </motion.p>

              <div>
                <motion.h4
                  className="text-gray-900 dark:text-white font-semibold mb-4 text-lg"
                  animate={{
                    color: hoveredIndex === index ? "rgb(59 130 246)" : undefined
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Key Achievements:
                </motion.h4>
                
                <motion.ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + i * 0.1 + 0.6, duration: 0.4 }}
                      className="text-gray-600 dark:text-gray-300 flex items-start group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <motion.span
                        className="text-green-500 mr-3 mt-1 flex-shrink-0"
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? 360 : 0
                        }}
                        transition={{ 
                          duration: 0.5,
                          delay: i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        ✓
                      </motion.span>
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* Floating particles effect on hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      y: [null, "-20px", "-40px"],
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}