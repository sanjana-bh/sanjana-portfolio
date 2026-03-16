"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center z-50">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="relative z-10 text-center"
      >
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-sm mb-4">
            <span className="text-green-400">$</span>
            <span>initializing portfolio...</span>
          </div>
        </motion.div>

        {/* Animated Logo */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative mb-6"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30"></div>
          
          {/* Code bracket icon */}
          <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
            <CodeBracketIcon className="w-12 h-12 text-purple-400" />
          </div>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sanjana Bhardwaj
          </span>
        </motion.h1>

        {/* Loading bar */}
        <div className="relative w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            animate={{ 
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
          />
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 font-mono"
        >
          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
          <span>loading components...</span>
        </motion.div>

        {/* Terminal-style progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-xs text-gray-600 font-mono"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-purple-400">❯</span>
            <span>compiling skills</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-green-400"
            >
              █
            </motion.span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-blue-400">❯</span>
            <span>loading projects</span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-green-400"
            >
              █
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-mono"
      >
        <span className="text-purple-400">└─</span> 
        ready to deploy • 
        <span className="text-green-400"> v1.0.0</span>
        <span className="text-blue-400"> ─┘</span>
      </motion.div>
    </div>
  );
}