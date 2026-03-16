"use client";

import about from "../data/about";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  BriefcaseIcon,
  CommandLineIcon,
  CalendarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ArrowRightIcon,
  BookOpenIcon,
  FolderIcon,
  ServerIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring"as const, stiffness: 300 }}
          className="mb-8 group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <CommandLineIcon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {about.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 font-mono">
                    <span className="text-purple-400">~$</span>
                    <span className="ml-2">echo &quot;Passionate about building the future&quot;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coding Journey Card - Refined with bullet points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
            
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
              
              {/* Header with icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <RocketLaunchIcon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Coding Journey
                  </h3>
                  <p className="text-sm text-gray-500 font-mono mt-1">3+ years of experience</p>
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="flex items-center gap-2 mb-6 text-xs text-gray-600 font-mono">
                <CalendarIcon className="w-4 h-4" />
                <span>2023 — Present</span>
                <span className="text-gray-700">●</span>
                <CpuChipIcon className="w-4 h-4" />
                <span>Continuous Learning</span>
              </div>

              {/* Bullet point journey - Concise version */}
              <div className="space-y-4 mb-8">
                {[
                  "Started coding 3+ years ago with small web development projects, building a strong foundation in HTML, CSS, and JavaScript.",
                  "Built full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js) and modern web technologies.",
                  "Developed real-world projects including an online learning platform and a facial recognition attendance system.",
                  "Focused on writing clean, scalable, and maintainable code while following industry best practices and design patterns."
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 group/bullet"
                  >
                    <span className="text-purple-400 mt-1 text-lg">•</span>
                    <p className="text-gray-400 leading-relaxed flex-1">{point}</p>
                  </motion.div>
                ))}
              </div>

              {/* Terminal message */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mb-8 p-3 bg-gray-900/50 rounded-lg border border-gray-700 font-mono text-sm"
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-purple-400">{'>'}</span>
                  <span>initializing developer journey...</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <span className="text-green-400">✔</span>
                  <span>experience module loaded successfully</span>
                </div>
              </motion.div>

              {/* Technologies mastered - Grouped by category */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-gray-700"
              >
                <div className="flex items-center gap-2 mb-6">
                  <UserGroupIcon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300 font-mono">Technologies mastered:</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
                      <CodeBracketIcon className="w-4 h-4" />
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg text-xs text-gray-300 font-mono hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                      <ServerIcon className="w-4 h-4" />
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'REST APIs', 'Python'].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg text-xs text-gray-300 font-mono hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                      <CircleStackIcon className="w-4 h-4" />
                      Database
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'MySQL'].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg text-xs text-gray-300 font-mono hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <WrenchScrewdriverIcon className="w-4 h-4" />
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'Postman', 'VS Code'].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg text-xs text-gray-300 font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education & Internship Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Education Card - Refined */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
              <div className="relative h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <AcademicCapIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-semibold text-purple-400">BSc in Computer Science</p>
                    <p className="text-blue-400 text-lg mt-1">University of Mumbai</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">2023 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CpuChipIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-300">CGPA: <span className="text-purple-400 font-semibold">9.25</span> / 10</span>
                    </div>
                  </div>

                  {/* Relevant coursework */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-3 font-mono">// Relevant coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Web Dev', 'AI/ML', 'Database Systems'].map((course, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-gray-700/30 rounded-full text-xs text-gray-400 hover:text-purple-400 hover:border-purple-500/50 border border-gray-600 transition-all duration-300"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internship Card - Refined */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
              <div className="relative h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <BriefcaseIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Internship</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-2xl font-semibold text-blue-400">Web Development Intern</p>
                    <p className="text-cyan-400 text-lg mt-1">VaultofCodes</p>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    Worked with modern web technologies and contributed to real-world web development projects. 
                    Collaborated with developers to build responsive and scalable applications while improving both 
                    frontend and backend development skills.
                  </p>

                  {/* Key contributions */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-400 text-sm">Built responsive UI components using modern frameworks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-400 text-sm">Integrated REST APIs and managed application state</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span className="text-gray-400 text-sm">Collaborated using Git and participated in code reviews</span>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-3 font-mono">// Technologies used</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'].map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 bg-gray-700/30 rounded-full text-xs text-blue-400 hover:text-cyan-400 hover:border-cyan-500/50 border border-gray-600 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0,x:-31, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <Link href="/qualifications">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-3 text-gray-200 group-hover:text-white">
                <BookOpenIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                <span>View Complete Education</span>
                <ArrowRightIcon className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 0 }}
              />
            </motion.button>
          </Link>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-3 text-gray-200 group-hover:text-white">
                <FolderIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span>View All Projects</span>
                <ArrowRightIcon className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 0 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Quick Stats - Improved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {[
            { label: "Years Coding Experience", value: "3+", icon: <CalendarIcon className="w-4 h-4" /> },
            { label: "Projects Built", value: "8+", icon: <RocketLaunchIcon className="w-4 h-4" /> },
            { label: "Technologies Learned", value: "20+", icon: <CpuChipIcon className="w-4 h-4" /> },
            { label: "GitHub Contributions", value: "100+", icon: <CodeBracketIcon className="w-4 h-4" /> },
            { label: "Full Stack Apps", value: "3+", icon: <ServerIcon className="w-4 h-4" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring"as const, stiffness: 300 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
                <span className="text-gray-600 group-hover:text-purple-400 transition-colors">
                  {stat.icon}
                </span>
                <span className="font-mono">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-1 p-3 bg-gray-800/20 rounded-lg border border-gray-800">
            <p className="text-xs text-gray-500 font-mono">
              <span className="text-purple-400">┌─</span> 
              about@portfolio:~$
            </p>
            <p className="text-xs text-gray-600 font-mono">
              <span className="text-green-400">✓</span> profile loaded • 
              <span className="text-blue-400"> ready for opportunities</span>
            </p>
            <p className="text-xs text-gray-600 font-mono">
              <span className="text-purple-400">└─</span> 
              exit code: <span className="text-green-400">0</span> • 
              <span className="text-cyan-400"> all systems operational</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}