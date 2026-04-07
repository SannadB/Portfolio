"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Lock } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "One-shot Facial Recognition for CCTV Surveillance",
    description:
      "Robust facial recognition pipeline using YOLO for face detection, GANs and super-resolution for quality enhancement, and Vision Transformers (ViT) for embedding generation. Compares embeddings using cosine and Euclidean similarity to recognize employees from low-resolution CCTV footage.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "YOLO", "GANs", "Vision Transformers", "OpenCV"],
    date: "April 2025 – June 2025",
    githubUrl: "https://github.com/SannadB/Face-Recognition",
  },
  {
    title: "Human Engagement Detection in Classrooms",
    description:
      "Engagement analysis system that detects audience faces using custom YOLO models and estimates engagement through facial landmarks and mesh analysis to identify boredom, yawning, or distraction in classrooms and seminars.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "YOLO", "MediaPipe", "FaceMesh", "Computer Vision"],
    date: "June 2025",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Theft Detection using YOLO",
    description:
      "Theft detection system to identify bike/motorcycle thefts using custom-trained YOLOv11 object detection models on surveillance footage with real-time monitoring capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "YOLOv11", "OpenCV", "Computer Vision"],
    date: "March 2025 – June 2025",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Invoice Parser using LLMs",
    description:
      "Intelligent invoice parser using LLMs and LangChain to extract structured information such as product details, prices, taxes, and invoice IDs from scanned invoices or PDFs with high accuracy.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "LangChain", "OpenAI", "NER"],
    date: "May 2025",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Predicting and Classifying OFDM Signals for 6G",
    description:
      "Complete hardware simulation architecture for 6G OFDM communication system using MATLAB. Generated synthetic datasets for signal prediction using LSTM, GRU, and Transformers. Performed signal classification using wavelet transform and Random Forest. Published in IEEE Xplore.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["MATLAB", "Python", "Transformers", "LSTM", "Signal Processing"],
    date: "January 2024 – January 2025",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "AI PhotoBooth",
    description:
      "Face swap application that captures images from camera and creates avatars using advanced face detection and swapping technology with InsightFace.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Flask", "OpenCV", "InsightFace"],
    date: "August 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "CV Parser using LLMs",
    description:
      "CV parser using large language models (LLMs) to evaluate resumes based on job descriptions and criteria, providing automated candidate screening and ranking.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Hugging Face", "Transformers", "NLP"],
    date: "June 2023 – December 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "HeySmarty - Customer Service Chatbot",
    description:
      "Customer service chatbot for SmarterHome business using GPT-3.5 and GPT-4 models, integrated with Google Search, Google Maps, and Weather APIs. Built admin panel for conversation analytics and user activity tracking.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Flask", "OpenAI", "GPT-4", "APIs"],
    date: "April 2024 – October 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "EdexOnline - Learning Management System",
    description:
      "Comprehensive LMS platform that allows students to participate in different courses with features for course management, student enrollment, and progress tracking.",
    image: "/Projects/Edex.png",
    technologies: ["ReactJS", "NestJS", "MySQL", "WebSockets", "Digital Ocean"],
    date: "September 2023 – September 2024",
    liveUrl: "https://edexonline.co.uk/",
    githubUrl: "",
  },
  {
    title: "Ethread - Sustainable Garment Solutions Portal",
    description:
      "Portal for e-THREAD, an Australian organization offering nationwide sustainable and eco-friendly garment solutions. Built to manage their bin cleaning services with full containerization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Laravel", "Vue.js", "Docker", "MySQL", "Linux"],
    date: "September 2023 – September 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Republic Sentinel - News Platform",
    description:
      "Full-stack article website using Strapi as a headless CMS for content management and API delivery. Implemented SEO optimization and JAMStack architecture.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Strapi", "Nuxt.js", "MySQL", "JAMStack", "SEO"],
    date: "August 2022 – December 2022",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "OCR Application for Meter Reading",
    description:
      "OCR application to capture readings from electricity meters using TensorFlow and OpenCV. Published research in MDPI Engineering Proceedings with automated meter reading capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "TensorFlow", "OpenCV", "OCR"],
    date: "January 2021 – January 2022",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "ServU - POS and Appointments System",
    description:
      "Full-stack POS invoice and appointments web application for service providers with customer management, billing, and scheduling features.",
    image: "/Projects/ServU.png",
    technologies: ["Laravel / Lumen", "Nuxt.js", "Vue.js", "MySQL"],
    date: "January 2021 – May 2022",
    private: true,
    liveUrl: "",
    githubUrls: [
      { label: "Backend", url: "https://github.com/SannadB/servu-v3-api" },
      { label: "Portal", url: "https://github.com/SannadB/servu-v3-portal" },
      { label: "MarketPlace", url: "https://github.com/SannadB/servu-v3-marketplace" }
    ]
  },
];

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
            <div className="relative h-48 overflow-hidden">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={gridAnimation.isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                transition={{ 
                  delay: 0.4 + (index * 0.15), 
                  duration: 0.6 
                }}
                className="w-full h-full relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-300 group-hover:scale-105}`}
                />
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
              {project.private && (
                <div className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 mb-2">
                  <Lock size={14} />
                  Private Project
                </div>
              )}
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

              {(project.liveUrl || project.githubUrl || project.githubUrls?.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={gridAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ 
                    delay: 0.7 + (index * 0.15), 
                    duration: 0.5 
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {/* Live Demo */}
                  {project.liveUrl && (
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
                  )}

                  {/* Multiple GitHub Repos */}
                  {project.githubUrls?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.githubUrls.map((repo, i) => (
                        <motion.a
                          key={i}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={14} />
                          {repo.label}
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {/* Single GitHub Repo (fallback) */}
                  {project.githubUrl && !project.githubUrls && (
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
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}