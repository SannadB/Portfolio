"use client"

import { motion } from "framer-motion"
import 'devicon/devicon.min.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "🧑‍💻",
    skills: [
      { name: "Python", icon: "devicon-python-plain", level: 95 },
      { name: "JavaScript", icon: "devicon-javascript-plain", level: 85 },
      { name: "C/C++", icon: "devicon-cplusplus-plain", level: 80 },
      { name: "SQL", icon: "devicon-mysql-plain", level: 85 },
      { name: "PHP", icon: "devicon-php-plain", level: 75 },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: "🤖",
    skills: [
      { name: "PyTorch", icon: "devicon-pytorch-original", level: 90 },
      { name: "TensorFlow", icon: "devicon-tensorflow-original", level: 85 },
      { name: "Keras", icon: "devicon-keras-plain", level: 80 },
      { name: "OpenCV", icon: "devicon-opencv-plain", level: 90 },
      { name: "YOLO", icon: "🎯", level: 95 },
      { name: "Transformers (HF)", icon: "🧠", level: 85 },
      { name: "ViT", icon: "🖼️", level: 80 },
      { name: "GANs", icon: "🌀", level: 75 },
      { name: "Scikit-learn", icon: "📊", level: 80 },
      { name: "FaceMesh", icon: "📷", level: 75 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "Flask", icon: "devicon-flask-original", level: 90 },
      { name: "FastAPI", icon: "⚡", level: 85 },
      { name: "React.js", icon: "devicon-react-original", level: 80 },
      { name: "Vue.js", icon: "devicon-vuejs-plain", level: 85 },
      { name: "Nuxt.js", icon: "devicon-nuxtjs-plain", level: 75 },
      { name: "Laravel", icon: "devicon-laravel-plain", level: 80 },
      { name: "Node.js", icon: "devicon-nodejs-plain", level: 75 },
      { name: "NestJS", icon: "devicon-nestjs-plain", level: 75 },
      { name: "Strapi", icon: "📝", level: 70 },
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: "☁️",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-original", level: 85 },
      { name: "Google Cloud", icon: "devicon-googlecloud-plain", level: 80 },
      { name: "Azure", icon: "devicon-azure-plain", level: 70 },
      { name: "Docker", icon: "devicon-docker-plain", level: 90 },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: 70 },
      { name: "Jenkins", icon: "devicon-jenkins-plain", level: 75 },
      { name: "GitHub Actions", icon: "🚀", level: 80 },
      { name: "MLflow", icon: "📈", level: 75 },
      { name: "Airflow", icon: "🌬️", level: 70 },
      { name: "Prometheus", icon: "📡", level: 65 },
      { name: "Grafana", icon: "📊", level: 65 },
    ],
  },
  {
    title: "Databases & Vector DBs",
    icon: "🗄️",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain", level: 90 },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 85 },
      { name: "MongoDB", icon: "devicon-mongodb-plain", level: 80 },
      { name: "Pinecone", icon: "🌲", level: 75 },
      { name: "Weaviate", icon: "🔗", level: 70 },
      { name: "Faiss", icon: "🧮", level: 70 },
      { name: "Chroma", icon: "🌈", level: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "VS Code", icon: "devicon-vscode-plain", level: 95 },
      { name: "Jupyter Notebook", icon: "devicon-jupyter-plain", level: 90 },
      { name: "Linux", icon: "devicon-linux-plain", level: 85 },
      { name: "Git", icon: "devicon-git-plain", level: 90 },
      { name: "Postman", icon: "devicon-postman-plain", level: 80 },
      { name: "MATLAB", icon: "📐", level: 80 },
      { name: "AutoCAD", icon: "📏", level: 75 },
      { name: "Proteus", icon: "⚡", level: 70 },
      { name: "MultiSIM", icon: "🔌", level: 65 },
    ],
  },
  {
    title: "Embedded Systems",
    icon: "🔌",
    skills: [
      { name: "Arduino", icon: "devicon-arduino-plain", level: 85 },
      { name: "ARM Assembly", icon: "🧠", level: 75 },
      { name: "ESP32", icon: "📡", level: 65 },
    ],
  },
]

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
                      <span className="text-lg">{skill.icon}</span>
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
