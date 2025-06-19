"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "One-shot Facial Recognition for CCTV",
    description:
      "Robust facial recognition pipeline using YOLO for face detection, GANs for quality enhancement, and Vision Transformers for embedding generation. Recognizes employees from low-resolution CCTV footage.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "YOLO", "GANs", "Vision Transformers", "OpenCV"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/smart-camera",
  },
  {
    title: "Theft Detection using YOLO",
    description:
      "Advanced theft detection system for identifying bike/motorcycle thefts using custom-trained YOLO object detection models on surveillance footage.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "YOLOv11", "OpenCV", "Computer Vision"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/iot-sensors",
  },
  {
    title: "CV Parser using LLMs",
    description:
      "Intelligent CV parser using large language models to evaluate resumes based on job descriptions and criteria, providing automated candidate screening.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Hugging Face", "Transformers", "NLP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/drone-controller",
  },
  {
    title: "6G OFDM Signal Processing",
    description:
      "Complete hardware simulation architecture for 6G OFDM communication system with deep learning models for signal prediction and classification.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["MATLAB", "Python", "LSTM", "Signal Processing"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/nn-accelerator",
  },
]

// Custom hook for scroll animations
const useScrollAnimation = (direction = "left") => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  }
  
  return { ref, isInView, variants }
}

export default function PortfolioSection() {
  const headerAnimation = useScrollAnimation("left")
  const gridAnimation = useScrollAnimation("right")

  return (
    <div className="max-w-6xl mx-auto py-8">
      <motion.h2
        ref={headerAnimation.ref}
        initial="hidden"
        animate={headerAnimation.isInView ? "visible" : "hidden"}
        variants={headerAnimation.variants}
        className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        ref={gridAnimation.ref}
        initial="hidden"
        animate={gridAnimation.isInView ? "visible" : "hidden"}
        variants={gridAnimation.variants}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -80 : 80,
              y: 30
            }}
            animate={gridAnimation.isInView ? { 
              opacity: 1, 
              x: 0,
              y: 0
            } : { 
              opacity: 0, 
              x: index % 2 === 0 ? -80 : 80,
              y: 30
            }}
            transition={{ 
              delay: 0.2 + (index * 0.15), 
              duration: 0.7,
              ease: "easeOut"
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group shadow-lg"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={gridAnimation.isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ 
                  delay: 0.4 + (index * 0.15), 
                  duration: 0.6 
                }}
                className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
              >
                <span className="text-gray-500 dark:text-gray-400 text-sm">Project Image</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={gridAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.5 + (index * 0.15), 
                duration: 0.6 
              }}
              className="p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={gridAnimation.isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      delay: 0.6 + (index * 0.15) + (i * 0.05), 
                      duration: 0.4
                    }}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl text-sm border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={gridAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ 
                  delay: 0.7 + (index * 0.15), 
                  duration: 0.5 
                }}
                className="flex gap-4"
              >
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-600 dark:to-gray-500 text-white rounded-lg hover:from-gray-900 hover:to-gray-800 dark:hover:from-gray-500 dark:hover:to-gray-400 transition-all duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>

                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}