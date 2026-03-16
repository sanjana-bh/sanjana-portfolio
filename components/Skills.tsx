"use client";

import { motion } from "framer-motion";
import skills from "../data/skills";
import { 
  SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiNextdotjs, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiGit, SiGithub, SiFirebase, SiCloudinary, SiOpencv,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiRestartLine } from "react-icons/ri";
import { FaRubleSign } from "react-icons/fa";
import { JSX } from "react/jsx-dev-runtime";

// Map skills to icons
const skillIcons: { [key: string]: JSX.Element } = {
  // Languages
  "Python": <SiPython className="text-yellow-400" />,
  "JavaScript": <SiJavascript className="text-yellow-500" />,
  "HTML": <SiHtml5 className="text-orange-500" />,
  "CSS": <SiCss className="text-blue-500" />,
  
  // Frameworks & Libraries
  "React": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Express.js": <SiExpress className="text-gray-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  
  // Backend
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "REST APIs": <RiRestartLine className="text-orange-400" />,
  
  // Database
  "MongoDB": <SiMongodb className="text-green-500" />,
  "MySQL": <SiMysql className="text-blue-500" />,
  
  // Tools & Platforms
  "Git": <SiGit className="text-orange-500" />,
  "GitHub": <SiGithub className="text-white" />,
  "VS Code": <VscVscode className="text-blue-400" />,
  "Postman": <SiPostman className="text-orange-400" />,
  "Firebase": <SiFirebase className="text-yellow-500" />,
  "Cloudinary": <SiCloudinary className="text-blue-400" />,
  "Razorpay": <FaRubleSign className="text-blue-500" />,
  "OpenCV": <SiOpencv className="text-red-500" />,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            &lt;!-- Technologies I work with --&gt;
          </p>
        </motion.div>

        {/* Skills Grid - Reorganized Categories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <SkillGroup 
            title="Languages" 
            items={[
              "Python", "JavaScript", "HTML", "CSS"
            ]} 
            color="from-yellow-500 to-orange-500" 
          />
          
          <SkillGroup 
            title="Frameworks & Libraries" 
            items={[
              "React", "Next.js", "Express.js", "Tailwind CSS"
            ]} 
            color="from-cyan-500 to-blue-500" 
          />
          
          <SkillGroup 
            title="Backend" 
            items={[
              "Node.js", "REST APIs"
            ]} 
            color="from-green-500 to-emerald-500" 
          />
          
          <SkillGroup 
            title="Database" 
            items={[
              "MongoDB", "MySQL"
            ]} 
            color="from-blue-500 to-indigo-500" 
          />
          
          <SkillGroup 
            title="Tools & Platforms" 
            items={[
              "Git", "GitHub", "VS Code", "Postman", 
              "Firebase", "Cloudinary", "Razorpay", "OpenCV"
            ]} 
            color="from-purple-500 to-pink-500" 
          />
        </motion.div>

        {/* Skill Proficiency Meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 relative group"
        >
          {/* Gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
          
          <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
            
            {/* Header with terminal-style prompt */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-900/30 rounded-xl">
                <span className="text-2xl font-mono text-purple-400">{'>'}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Proficiency Metrics
                </h3>
                <p className="text-sm text-gray-500 font-mono mt-1">// Skill assessment based on projects & experience</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              {[
                { name: "Frontend Development", value: 85, color: "from-purple-500 to-blue-500" },
                { name: "Backend Development", value: 70, color: "from-blue-500 to-cyan-500" },
                { name: "Database Design", value: 65, color: "from-green-500 to-emerald-500" },
                { name: "Problem Solving", value: 85, color: "from-yellow-500 to-orange-500" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group/progress"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-600 font-mono">// {skill.value}%</span>
                    </div>
                    <motion.span 
                      className="text-purple-400 font-mono text-sm"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {skill.value}%
                    </motion.span>
                  </div>
                  <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden border border-gray-600/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                      className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Stats Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-700"
            >
              <StatCard number="20+" label="Technologies" />
              <StatCard number="8+" label="Projects" />
              <StatCard number="3+" label="Years Coding" />
              <StatCard number="∞" label="Learning" />
            </motion.div>
          </div>
        </motion.div>

        {/* Terminal-style message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center font-mono"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 border border-gray-700 rounded-full">
            <span className="text-purple-400">{'>'}</span>
            <span className="text-gray-400 text-sm">compiling developer skillset...</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-xs">
            <span className="text-green-400">✔</span>
            <span className="text-gray-500">skill modules loaded successfully</span>
            <span className="text-gray-700">|</span>
            <span className="text-purple-400">exit code 0</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skill Group Component
function SkillGroup({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring"as const, stiffness: 300 }}
      className="group relative"
    >
      {/* Gradient border effect with glow */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg`} />
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      
      {/* Main card */}
      <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-300 h-full">
        
        {/* Title with animated line */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-purple-400">#</span>
              {title}
            </h3>
            <span className="text-xs text-gray-500 font-mono bg-gray-700/30 px-2 py-1 rounded-full border border-gray-600">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <motion.div 
            className={`h-0.5 bg-gradient-to-r ${color} rounded-full mt-2`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
        </div>

        {/* Skills with icons */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group/skill relative"
            >
              {/* Tooltip on hover */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-purple-400 text-xs py-1 px-2 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-purple-500/30 pointer-events-none">
                {skill}
              </div>
              
              <div className="px-3 py-2 bg-gray-700/30 border border-gray-600 rounded-lg text-sm text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2">
                <span className="text-base">
                  {skillIcons[skill] || null}
                </span>
                <span className="hidden sm:inline">{skill}</span>
                {/* Show only icon on very small screens */}
                <span className="sm:hidden">{skill.substring(0, 3)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state message if no skills */}
        {items.length === 0 && (
          <p className="text-gray-500 text-sm font-mono italic">// No skills listed</p>
        )}
      </div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="text-center group/stat"
    >
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-xs text-gray-500 mt-1 font-mono group-hover/stat:text-purple-400 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
}