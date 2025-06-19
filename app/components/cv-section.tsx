"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, BookOpen, Download, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Fast NUCES",
    location: "Karachi, Pakistan",
    period: "Aug 2022 - Jan 2025",
    gpa: "3.73/4.0",
    description:
      "Thesis: Enabling Climate Intelligence: Integrating RIS-UAVs, Gen AI, and 6G for Environmental Monitoring",
    coursework: ["Machine Learning", "Deep Learning", "Computer Vision", "Signal Processing"],
  },
  {
    degree: "Bachelor of Engineering in Electrical Engineering",
    institution: "NED University of Engineering and Technology",
    location: "Karachi, Pakistan",
    period: "Oct 2017 - Oct 2021",
    gpa: "3.52/4.0",
    description: "Final Year Project: Smart OCR Application for Meter Reading",
    coursework: ["Digital Signal Processing", "Embedded Systems", "Control Systems", "Power Electronics"],
  },
]

const achievements = [
  {
    title: "Machine Learning",
    issuer: "Stanford University, Coursera",
    date: "2023",
    description: "Online certification in Machine Learning",
    icon: "🏆",
  },
  {
    title: "Python Project: Pillow, Tesseract and OpenCV",
    issuer: "University of Michigan, Coursera",
    date: "2023",
    description: "Online certification in Python",
    icon: "⭐",
  },
  {
    title: "Complete Python Bootcamp",
    issuer: "Udemy",
    date: "2023",
    description: "Online certification in Python",
    icon: "🚀",
  },
  {
    title: "Mastering OCR",
    issuer: "Udemy",
    date: "2023",
    description: "Online certification in OCR",
    icon: "💻",
  },
  {
    title: "Published research in MDPI Engineering Proceedings",
    issuer: "MDPI",
    date: "2023",
    description: "Published research paper",
    icon: "🥇",
  },
]

const courses = [
  {
    title: "Machine Learning",
    provider: "Stanford University, Coursera",
    date: "2023",
    duration: "60 hours",
    skills: ["Machine Learning", "Python"],
    certificate: "https://example.com/cert1",
  },
  {
    title: "Python Project: Pillow, Tesseract and OpenCV",
    provider: "University of Michigan, Coursera",
    date: "2023",
    duration: "80 hours",
    skills: ["Python", "OCR", "OpenCV"],
    certificate: "https://example.com/cert2",
  },
  {
    title: "Complete Python Bootcamp",
    provider: "Udemy",
    date: "2022",
    duration: "40 hours",
    skills: ["Python", "Programming"],
    certificate: "https://example.com/cert3",
  },
  {
    title: "Mastering OCR",
    provider: "Udemy",
    date: "2022",
    duration: "50 hours",
    skills: ["OCR", "Tesseract", "Image Processing"],
    certificate: "https://example.com/cert4",
  },
]

// Custom hook for scroll animations
const useScrollAnimation = (direction = "left") => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
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

export default function CVSection() {
  const headerAnimation = useScrollAnimation("left")
  const educationAnimation = useScrollAnimation("right")
  const achievementsAnimation = useScrollAnimation("left")
  const coursesAnimation = useScrollAnimation("right")
  const statsAnimation = useScrollAnimation("left")

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-8">
      {/* Header with Download Button */}
      <motion.div
        ref={headerAnimation.ref}
        initial="hidden"
        animate={headerAnimation.isInView ? "visible" : "hidden"}
        variants={headerAnimation.variants}
        className="flex flex-col sm:flex-row justify-between items-center mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">Education</h2>
        <motion.button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-600 dark:to-gray-500 text-white rounded-full hover:from-gray-900 hover:to-gray-800 dark:hover:from-gray-500 dark:hover:to-gray-400 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("/Sannad Bilal - CV.pdf", "_blank")}
        >
          <Download size={20} />
          Download PDF
        </motion.button>
      </motion.div>

      {/* Education Section */}
      <motion.section
        ref={educationAnimation.ref}
        initial="hidden"
        animate={educationAnimation.isInView ? "visible" : "hidden"}
        variants={educationAnimation.variants}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="text-gray-600 dark:text-gray-400" size={24} />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={educationAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 pb-6 last:pb-0"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-2">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right mt-2 lg:mt-0">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-1">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                    <MapPin size={14} />
                    {edu.location}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.description}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {edu.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl text-sm border border-gray-200 dark:border-gray-600"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <p className="text-green-600 dark:text-green-400 font-semibold">GPA: {edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        ref={achievementsAnimation.ref}
        initial="hidden"
        animate={achievementsAnimation.isInView ? "visible" : "hidden"}
        variants={achievementsAnimation.variants}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="text-gray-600 dark:text-gray-400" size={24} />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements & Certifications</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={achievementsAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{achievement.icon}</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {achievement.issuer} • {achievement.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section
        ref={coursesAnimation.ref}
        initial="hidden"
        animate={coursesAnimation.isInView ? "visible" : "hidden"}
        variants={coursesAnimation.variants}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-gray-600 dark:text-gray-400" size={24} />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Development & Courses</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={coursesAnimation.isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {course.title}
                </h4>
                <span className="text-gray-500 dark:text-gray-400 text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded border border-gray-300 dark:border-gray-500">
                  {course.date}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{course.provider}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{course.duration}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {course.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-600 dark:to-gray-500 text-white rounded-2xl text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.a
                href={course.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-xs underline transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                View Certificate →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Summary Stats */}
      <motion.section
        ref={statsAnimation.ref}
        initial="hidden"
        animate={statsAnimation.isInView ? "visible" : "hidden"}
        variants={statsAnimation.variants}
        className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "15+", label: "Certifications" },
            { value: "50+", label: "Projects Completed" },
            { value: "3.8", label: "Average GPA" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={statsAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}