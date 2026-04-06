"use client"

import { motion } from "framer-motion"
import 'devicon/devicon.min.css';
import { 
  SiPython, SiJavascript, SiC, SiCplusplus, SiMysql, SiPhp,
  SiPytorch, SiTensorflow, SiKeras, SiOpencv, SiScikitlearn,
  SiFlask, SiFastapi, SiReact, SiVuedotjs, SiNuxtdotjs, SiLaravel, 
  SiNodedotjs, SiNestjs, SiStrapi,
  SiGooglecloud, SiDocker, SiKubernetes, 
  SiJenkins, SiGithub, SiMlflow, SiApacheairflow, SiPrometheus, SiGrafana,
  SiPostgresql, SiMongodb, 
  SiJupyter, SiLinux, SiGit, SiPostman, SiApache,
  SiAutocad, SiArduino, SiMediapipe, SiTraefikmesh, SiLangchain, SiNginx    
} from 'react-icons/si';
import { FaAws, FaChartLine, FaDigitalOcean } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "🧑‍💻",
    skills: [
      { name: "Python", icon: <SiPython />, color: "#3776AB", level: 95 },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 85 },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 80 },
      { name: "C", icon: <SiC />, color: "#A8B9CC", level: 75 },
      { name: "SQL", icon: <SiMysql />, color: "#4479A1", level: 85 },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4", level: 75 },
    ],
  },

  {
    title: "Robotics",
    icon: "🤖",
    skills: [
      { name: "ROS2", icon: "🧠", color: "#22314E", level: 80 },
      { name: "Gazebo", icon: "🌐", color: "#F28C28", level: 75 },
      { name: "RViz", icon: "📡", color: "#00C853", level: 75 },
      { name: "SLAM", icon: "🗺️", color: "#4285F4", level: 70 },
      { name: "Navigation", icon: "🧭", color: "#FF7043", level: 70 },
      { name: "Path Planning", icon: "📍", color: "#26A69A", level: 70 },
      { name: "Sensor Fusion", icon: "🔗", color: "#8E24AA", level: 70 },
      { name: "Robot Perception", icon: "👁️", color: "#5C6BC0", level: 75 },
    ],
  },

  {
    title: "AI / Computer Vision",
    icon: "🧠",
    skills: [
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C", level: 90 },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", level: 85 },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8", level: 90 },
      { name: "YOLO", icon: "🎯", color: "#00FFFF", level: 95 },
      { name: "Transformers (HF)", icon: "🤗", color: "#FFD21E", level: 85 },
      { name: "Vision Transformers", icon: "🖼️", color: "#4285F4", level: 80 },
      { name: "GANs", icon: "🌀", color: "#FF6B6B", level: 75 },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E", level: 80 },
      { name: "MediaPipe", icon: <SiMediapipe />, color: "#0097A7", level: 75 },
      { name: "FaceMesh", icon: <SiTraefikmesh />, color: "#4285F4", level: 75 },

      // 🔥 High-value additions
      { name: "Real-time Video Processing", icon: "⚡", color: "#FFCA28", level: 90 },
      { name: "Object Detection & Tracking", icon: "🎯", color: "#29B6F6", level: 95 },
      { name: "Facial Recognition", icon: "🧑", color: "#AB47BC", level: 90 },
      { name: "Inference Optimization", icon: "🚀", color: "#66BB6A", level: 85 },
    ],
  },

  {
    title: "Embedded Systems",
    icon: "🔌",
    skills: [
      { name: "Arduino", icon: <SiArduino />, color: "#00979D", level: 85 },
      { name: "ARM Assembly", icon: "🧠", color: "#0091BD", level: 75 },
      { name: "ESP32", icon: "📡", color: "#E7352C", level: 65 },

      // 🔥 important additions
      { name: "Microcontroller Programming", icon: "⚙️", color: "#5C6BC0", level: 80 },
      { name: "Serial Communication", icon: "🔗", color: "#8D6E63", level: 80 },
      { name: "Edge AI Fundamentals", icon: "🧠", color: "#26C6DA", level: 70 },
    ],
  },

  {
    title: "Cloud & MLOps",
    icon: "☁️",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "#FF9900", level: 85 },
      { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4", level: 80 },
      { name: "Azure", icon: <VscAzure />, color: "#0078D4", level: 70 },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED", level: 90 },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5", level: 70 },
      { name: "Jenkins", icon: <SiJenkins />, color: "#D24939", level: 75 },
      { name: "GitHub Actions", icon: <SiGithub />, color: "#181717", level: 80 },
      { name: "MLflow", icon: <SiMlflow />, color: "#0194E2", level: 75 },
      { name: "Airflow", icon: <SiApacheairflow />, color: "#017CEE", level: 70 },
      { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C", level: 65 },
      { name: "Grafana", icon: <SiGrafana />, color: "#F46800", level: 65 },
      { name: "DigitalOcean", icon: <FaDigitalOcean />, color: "#0080FF", level: 65 },
      { name: "Nginx", icon: <SiNginx />, color: "#009639", level: 75 },
    ],
  },

  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "Flask", icon: <SiFlask />, color: "#000000", level: 90 },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688", level: 85 },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: 75 },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB", level: 80 },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D", level: 85 },
      { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82", level: 75 },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20", level: 80 },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E", level: 75 },
      { name: "Strapi", icon: <SiStrapi />, color: "#2F2E8B", level: 70 },
      { name: "REST APIs", icon: "🔗", color: "#42A5F5", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span 
                    className="text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>

                  <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">6+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Programming Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">AI/ML Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">10+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Cloud Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">20+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Development Tools</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
