"use client"

import { motion } from "framer-motion"
import 'devicon/devicon.min.css';
import { 
  SiPython, SiJavascript, SiCplusplus, SiMysql, SiPhp,
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
      { name: "C/C++", icon: <SiCplusplus />, color: "#00599C", level: 80 },
      { name: "SQL", icon: <SiMysql />, color: "#4479A1", level: 85 },
      { name: "PHP", icon: <SiPhp />, color: "#777BB4", level: 75 },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: "🤖",
    skills: [
      { name: "PyTorch", icon: <SiPytorch />, color: "#EE4C2C", level: 90 },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", level: 85 },
      { name: "Keras", icon: <SiKeras />, color: "#D00000", level: 80 },
      { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8", level: 90 },
      { name: "YOLO", icon: "🎯", color: "#00FFFF", level: 95 },
      { name: "Transformers (HF)", icon: "🤗", color: "#FFD21E", level: 85 },
      { name: "ViT", icon: "🖼️", color: "#4285F4", level: 80 },
      { name: "GANs", icon: "🌀", color: "#FF6B6B", level: 75 },
      { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E", level: 80 },
      { name: "FaceMesh", icon: <SiTraefikmesh />, color: "#4285F4", level: 75 },
      { name: "MediaPipe", icon: <SiMediapipe />, color: "#0097A7 ", level: 75 },
      { name: "LangChain", icon: <SiLangchain />, color: "#00C853", level: 65},
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "Flask", icon: <SiFlask />, color: "#000000", level: 90 },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688", level: 85 },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB", level: 80 },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D", level: 85 },
      { name: "Nuxt.js", icon: <SiNuxtdotjs />, color: "#00DC82", level: 75 },
      { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20", level: 80 },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: 75 },
      { name: "NestJS", icon: <SiNestjs />, color: "#E0234E", level: 75 },  
      { name: "Strapi", icon: <SiStrapi />, color: "#2F2E8B", level: 70 },
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
      { name: "GitHub", icon: <SiGithub />, color: "#181717", level: 80 },
      { name: "MLflow", icon: <SiMlflow />, color: "#0194E2", level: 75 },
      { name: "Airflow", icon: <SiApacheairflow />, color: "#017CEE", level: 70 },
      { name: "Prometheus", icon: <SiPrometheus />, color: "#E6522C", level: 65 },
      { name: "Grafana", icon: <SiGrafana />, color: "#F46800", level: 65 },
      { name: "DigitalOcean", icon: <FaDigitalOcean />, color: "#0080FF", level: 65 },
      { name: "Nginx", icon: <SiNginx />, color: "#009639", level: 65 },
      { name: "Apache", icon: <SiApache />, color: "#D22128", level: 65 },
    ],
  },
  {
    title: "Databases & Vector DBs",
    icon: "🗄️",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1", level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 80 },
      { name: "Pinecone", icon: "🌲", color: "#000000", level: 75 },
      { name: "Weaviate", icon: "🔗", color: "#00C7B7", level: 70 },
      { name: "Faiss", icon: "🧮", color: "#0668E1", level: 70 },
      { name: "Chroma", icon: "🌈", color: "#FF6B6B", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC", level: 95 },
      { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626", level: 90 },
      { name: "Linux", icon: <SiLinux />, color: "#FCC624", level: 85 },
      { name: "Git", icon: <SiGit />, color: "#F05032", level: 90 },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37", level: 80 },
      { name: "MATLAB", icon: <FaChartLine />, color: "#0076A8", level: 80 },
      { name: "AutoCAD", icon: <SiAutocad />, color: "#E51050", level: 75 },
      { name: "Proteus", icon: "⚡", color: "#1E88E5", level: 70 },
      { name: "MultiSIM", icon: "🔌", color: "#00629B", level: 65 },
    ],
  },
  {
    title: "Embedded Systems",
    icon: "🔌",
    skills: [
      { name: "Arduino", icon: <SiArduino />, color: "#00979D", level: 85 },
      { name: "ARM Assembly", icon: "🧠", color: "#0091BD", level: 75 },
      { name: "ESP32", icon: "📡", color: "#E7352C", level: 65 },
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
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gray-800 to-gray-700 dark:from-gray-600 dark:to-gray-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8 }}
                    />
                  </div>
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
