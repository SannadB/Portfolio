"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300"
      >
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              className="relative w-64 h-64 mx-auto mb-6 group"
            >
              {/* Animated ring around image */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-600"
                animate={{
                  rotate: 360,
                  borderColor: [
                    "rgb(59 130 246)",
                    "rgb(147 51 234)", 
                    "rgb(236 72 153)",
                    "rgb(59 130 246)"
                  ]
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  borderColor: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              <Image
                src="/Sannad.png"
                alt="Sannad Bilal"
                fill
                className="rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
              />
              
              {/* Floating particles around image */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                    animate={{
                      x: [
                        Math.cos((i * Math.PI * 2) / 8) * 140,
                        Math.cos((i * Math.PI * 2) / 8 + Math.PI / 4) * 140
                      ],
                      y: [
                        Math.sin((i * Math.PI * 2) / 8) * 140,
                        Math.sin((i * Math.PI * 2) / 8 + Math.PI / 4) * 140
                      ],
                      opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              3D Computer Vision & Robotics Engineer with hands-on experience designing and deploying real-time perception systems for object detection, tracking, and scene understanding. Strong foundation in deep learning and classical computer vision, with practical expertise in end-to-end production deployments under real-world constraints. Experienced in building and optimizing vision pipelines for performance-critical applications. Currently working in the robotics domain, focusing on 3D perception, sensor integration, and autonomous system intelligence, with growing expertise in mobile robotics, sensor fusion, and embedded systems.

            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    M.S. Computer Science, B.E. Electrical Engineering
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <div>
                  <h3 className="font-semibold">Current Role</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Computer Vision & Robotics Engineer at Kodifly</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🌟</span>
                <div>
                  <h3 className="font-semibold">Specialization</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Robotics, Computer Vision, Artificial Intelligence, Embedded Systems, Software Development
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Karachi, Pakistan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
