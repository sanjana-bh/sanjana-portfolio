"use client";

import { motion, Variants, Transition } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projects from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  // Fixed container variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Fixed item variants
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20 // Optional: add damping for smoother springs
      } as Transition
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

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete collection of applications I've built using modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid - All Projects Displayed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20 // Optional: add damping for smoother springs
              }}
              className="group relative"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative h-full bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-transparent transition-all duration-300">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-7xl font-bold text-gray-700/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  )}
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {/* GitHub Button */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20 // Optional: add damping for smoother springs
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>

                    {/* Live Demo Button */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20 // Optional: add damping for smoother springs
                        }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project number indicator */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-xs text-gray-400 font-mono backdrop-blur-sm">
                  #{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-purple-400">{projects.length}+</div>
            <div className="text-xs text-gray-400 mt-1 font-mono">Total Projects</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-blue-400">
              {projects.filter(p => p.live).length}+
            </div>
            <div className="text-xs text-gray-400 mt-1 font-mono">Live Demos</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-cyan-400">
              {[...new Set(projects.flatMap(p => p.tech))].length}
            </div>
            <div className="text-xs text-gray-400 mt-1 font-mono">Technologies</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="text-2xl font-bold text-green-400">2026</div>
            <div className="text-xs text-gray-400 mt-1 font-mono">Latest Update</div>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/sanjana-bh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 font-mono"
          >
            <span>View more projects on GitHub</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-600 font-mono">
            <span className="text-purple-400">└─</span> 
            displaying all {projects.length} projects • 
            <span className="text-green-400"> continuously learning</span>
            <span className="text-blue-400"> ─┘</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}