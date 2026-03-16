"use client";

import { motion } from "framer-motion";
import qualifications from "../../data/qualifications";
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CalendarIcon,
  MapPinIcon,
  TrophyIcon,
  CodeBracketIcon,
  SparklesIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { FaAward, FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function QualificationsPage() {
  // Achievements data
  const achievements = [
    {
      title: "Facial Recognition Attendance System",
      description: "Built using Python and OpenCV with real-time face detection and automated attendance marking",
      tech: ["Python", "OpenCV", "Flask"],
      icon: <SparklesIcon className="w-6 h-6" />
    },
    {
      title: "EDUCARE LMS Platform",
      description: "Developed a full-stack learning management system with course management and user authentication",
      tech: ["MERN Stack", "Tailwind CSS", "JWT"],
      icon: <AcademicCapIcon className="w-6 h-6" />
    },
    {
      title: "Interactive Resume Builder",
      description: "Created a dynamic resume builder with drag-and-drop functionality and PDF export",
      tech: ["React", "JavaScript", "HTML/CSS"],
      icon: <CodeBracketIcon className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring"as const, stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>My Academic Journey</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Qualifications
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-3">
            Education, Certifications and Achievements
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Computer Science student passionate about building scalable applications 
            and solving real-world problems through technology.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-8"></div>
        </motion.div>

        {/* Education Section - Timeline Style */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-purple-900/30 rounded-xl">
              <FaGraduationCap className="w-7 h-7 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-blue-500/50"></div>

            <div className="space-y-12">
              {qualifications.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"
                  />

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''} pl-12 md:pl-0`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring"as const, stiffness: 300 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                      
                      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-transparent transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {edu.degree}
                          </h3>
                          <span className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-300">
                            {edu.duration}
                          </span>
                        </div>
                        
                        <p className="text-lg text-blue-400 mb-3">
                          {edu.institution}
                        </p>
                        
                        <div className="flex items-center gap-4 text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            <span className="text-sm">Mumbai, India</span>
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-lg">
                          <CalendarIcon className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-medium text-gray-300">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Internship Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-900/30 rounded-xl">
              <BriefcaseIcon className="w-7 h-7 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Internship Experience</h2>
          </motion.div>

          <div className="grid gap-6">
            {qualifications.internships.map((intern, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring"as const, stiffness: 300 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="p-3 bg-blue-900/30 rounded-xl">
                      <BriefcaseIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {intern.role}
                        </h3>
                        <span className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                          2024
                        </span>
                      </div>
                      <p className="text-lg text-cyan-400 mb-4">{intern.company}</p>
                      <p className="text-gray-400 leading-relaxed">
                        {intern.description}
                      </p>
                      
                      {/* Key contributions */}
                      <div className="mt-6 pt-6 border-t border-gray-800">
                        <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
                          <UserGroupIcon className="w-4 h-4" />
                          Key Contributions
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300">
                            Full Stack Development
                          </span>
                          <span className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300">
                            Team Collaboration
                          </span>
                          <span className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300">
                            Project Delivery
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-cyan-900/30 rounded-xl">
              <FaCertificate className="w-7 h-7 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring"as const, stiffness: 300 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-transparent transition-all duration-300 flex items-start gap-4">
                  <div className="p-2 bg-cyan-900/30 rounded-lg">
                    <FaAward className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{cert}</h3>
                    <p className="text-sm text-gray-400">Professional Certification</p>
                    <div className="mt-2 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-xs text-gray-500">Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-amber-900/30 rounded-xl">
              <TrophyIcon className="w-7 h-7 text-amber-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Key Achievements</h2>
          </motion.div>

          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring"as const, stiffness: 300 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-transparent transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-900/30 rounded-xl group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-400 mb-3">
                        {achievement.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-purple-400">
              {qualifications.education.length}
            </div>
            <div className="text-sm text-gray-400 mt-1">Degrees</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-400">
              {qualifications.internships.length}
            </div>
            <div className="text-sm text-gray-400 mt-1">Internships</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400">
              {qualifications.certifications.length}
            </div>
            <div className="text-sm text-gray-400 mt-1">Certifications</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-amber-400">3+</div>
            <div className="text-sm text-gray-400 mt-1">Achievements</div>
          </div>
        </motion.div>

        {/* Terminal-style Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            <span className="text-purple-400">└─</span> 
            continuously learning • building • growing
            <span className="text-blue-400"> ─┘</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}