"use client";

import { motion } from "framer-motion";
import personal from "../data/personal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: personal.github,
      icon: <FaGithub className="w-4 h-4" />,
      ariaLabel: "Visit my GitHub profile",
      color: "purple",
      hoverColor: "group-hover:text-purple-400",
      borderColor: "group-hover:border-purple-500",
    },
    {
      name: "LinkedIn",
      href: personal.linkedin,
      icon: <FaLinkedin className="w-4 h-4" />,
      ariaLabel: "Visit my LinkedIn profile",
      color: "blue",
      hoverColor: "group-hover:text-blue-400",
      borderColor: "group-hover:border-blue-500",
    },
    {
      name: "Email",
      href: `mailto:${personal.email}`,
      icon: <FaEnvelope className="w-4 h-4" />,
      ariaLabel: "Send me an email",
      color: "green",
      hoverColor: "group-hover:text-green-400",
      borderColor: "group-hover:border-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring"as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800 py-16 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Subtle Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          {/* Name with enhanced hover effect */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.h3 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring"as const, stiffness: 400 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                Sanjana Bhardwaj
              </span>
              
              {/* Animated underline with glow */}
              <motion.span 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glow effect on hover */}
              <motion.span 
                className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.h3>
          </motion.div>

          {/* Role Subtitle with typing effect */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 font-mono text-sm mb-10 relative inline-block"
          >
            <span className="text-purple-400">&lt;</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.span>
            <span className="text-purple-400">/&gt;</span>
            
            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-1 text-cyan-400"
            >
              _
            </motion.span>
          </motion.p>
          
          {/* Social Links with enhanced hover effects */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring"as const, stiffness: 400 }}
                className="flex items-center"
              >
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="group relative px-3 py-2 rounded-lg bg-gray-800/30 border border-gray-700 hover:border-transparent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-${link.color}-500/20 rounded-lg blur-md`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.span 
                      className={`text-gray-400 group-hover:text-${link.color}-400 transition-colors duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring"as const, stiffness: 400 }}
                    >
                      {link.icon}
                    </motion.span>
                    <span className={`text-sm text-gray-400 group-hover:text-${link.color}-400 transition-colors duration-300 hidden sm:inline`}>
                      {link.name}
                    </span>
                  </span>
                </motion.a>
                
                {index < socialLinks.length - 1 && (
                  <motion.span 
                    className="text-gray-700 mx-1 sm:mx-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    •
                  </motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Divider with glow */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <motion.span 
              className="bg-gray-900 px-4 text-xs text-gray-600 font-mono border border-gray-800 rounded-full py-1"
              whileHover={{ scale: 1.05, color: "#a78bfa", borderColor: "#a78bfa" }}
              transition={{ type: "spring"as const, stiffness: 400 }}
            >
              &lt;!-- footer --&gt;
            </motion.span>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Developer-style copyright */}
          <motion.p variants={itemVariants} className="text-gray-400 text-sm font-mono">
            <motion.span 
              className="text-purple-400 inline-block"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              $
            </motion.span>{" "}
            © {currentYear} Sanjana Bhardwaj
          </motion.p>

          {/* Tech Stack Line */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 text-xs font-mono flex flex-wrap items-center justify-center gap-2"
          >
            <span>Built with Next.js</span>
            <span className="text-gray-700">✦</span>
            <span>Tailwind CSS</span>
            <span className="text-gray-700">✦</span>
            <span>Framer Motion</span>
          </motion.p>

          {/* Personal Signature */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-xs font-mono mt-2"
            whileHover={{ color: "#9ca3af" }}
          >
            Designed & Developed with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-400/70 inline-block"
            >
              ❤️
            </motion.span>{" "}
            by Me
          </motion.p>

          {/* Terminal-style version info with enhanced animation */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 text-[10px] text-gray-700 font-mono"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="text-purple-400/50 inline-block"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              └─
            </motion.span>{" "}
            v1.0.0 • 
            <motion.span 
              className="text-green-400/70 inline-block mx-1"
              whileHover={{ scale: 1.1, color: "#4ade80" }}
            >
              last deployed {currentYear}
            </motion.span>
            <motion.span 
              className="text-blue-400/50 inline-block"
              animate={{ x: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {" "}─┘
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Enhanced animated indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-[10px] text-gray-800 font-mono border border-gray-800 rounded-full px-3 py-1"
            whileHover={{ borderColor: "#a78bfa", color: "#a78bfa" }}
          >
            <motion.span 
              className="w-1.5 h-1.5 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>system_online</span>
            <motion.span 
              className="text-[8px] text-gray-700"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [pid: {Math.floor(Math.random() * 1000)}]
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}