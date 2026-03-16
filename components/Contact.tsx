"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import personal from "../data/personal";
import { 
  EnvelopeIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  

  // Fixed animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interested in working together or have a project idea?<br />
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: "spring"as const, stiffness: 200 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm border border-green-500/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-mono">Available for Internships & Opportunities</span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <ContactCard
            icon={<EnvelopeIcon className="w-6 h-6" />}
            label="Email"
            value={personal.email}
            action={copyEmail}
            color="purple"
            copied={copied}
            variants={fadeInUp}
          />
          <ContactCard
            icon={<MapPinIcon className="w-6 h-6" />}
            label="Location"
            value="Mumbai, India"
            color="blue"
            variants={fadeInUp}
          />
          <ContactCard
            icon={<DevicePhoneMobileIcon className="w-6 h-6" />}
            label="Phone"
            value={personal.phone}
            action={copyPhone}
            color="green"
            copied={copied}
            variants={fadeInUp}
          />
          <ContactCard
            icon={<ClockIcon className="w-6 h-6" />}
            label="Response Time"
            value="Within 24 hours"
            color="cyan"
            variants={fadeInUp}
          />
        </motion.div>

        {/* Connect With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-transparent transition-all duration-300">
              
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-purple-400">{'>>>'}</span>
                Connect With Me
                <span className="text-purple-400">{'<<<'}</span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <SocialButton
                  href={personal.github}
                  icon={<FaGithub className="w-5 h-5" />}
                  label="GitHub"
                  color="purple"
                />
                <SocialButton
                  href={personal.linkedin}
                  icon={<FaLinkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  color="blue"
                />
                <SocialButton
                  href="https://twitter.com"
                  icon={<FaTwitter className="w-5 h-5" />}
                  label="Twitter"
                  color="cyan"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Style Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-300">
              <div className="font-mono text-sm space-y-2">
                <p className="text-green-400 mb-3">$ contact --info</p>
                <p className="text-gray-400">
                  <span className="text-purple-400 w-20 inline-block">Name:</span> 
                  <span className="text-gray-300">Sanjana Bhardwaj</span>
                </p>
                <p className="text-gray-400">
                  <span className="text-purple-400 w-20 inline-block">Role:</span> 
                  <span className="text-gray-300">Full Stack Developer</span>
                </p>
                <p className="text-gray-400">
                  <span className="text-purple-400 w-20 inline-block">Email:</span> 
                  <span className="text-gray-300">sanjanabharadwaj060505@gmail.com</span>
                </p>
                <p className="text-gray-400">
                  <span className="text-purple-400 w-20 inline-block">Status:</span> 
                  <span className="text-green-400">Available for opportunities</span>
                </p>
                <p className="text-gray-400">
                  <span className="text-purple-400 w-20 inline-block">Response:</span> 
                  <span className="text-gray-300">Within 24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal-style exit message - Removed footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="text-xs text-gray-700 font-mono">
            <span className="text-purple-400/50">└─</span> 
            contact.sh executed successfully • 
            <span className="text-green-400/70"> exit code 0</span>
            <span className="text-blue-400/50"> ─┘</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Card Component
function ContactCard({ icon, label, value, action, color, copied, variants }: any) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring"as const, stiffness: 300 }}
      onClick={action}
      className={`group relative cursor-pointer ${action ? 'cursor-pointer' : ''}`}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-600 to-${color}-500 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg`} />
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-600 to-${color}-500 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      
      <div className="relative bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 text-center hover:border-transparent transition-all duration-300">
        <div className={`w-12 h-12 mx-auto mb-3 bg-${color}-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-${color}-400`}>
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-400 mb-1">{label}</h3>
        <p className="text-white text-sm font-mono truncate max-w-[120px] mx-auto">{value}</p>
        
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-20"
          >
            Copied to clipboard!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Social Button Component
function SocialButton({ href, icon, label, color }: any) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-600 to-${color}-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur`} />
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-${color}-600 to-${color}-500 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
      <div className={`relative bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:border-transparent hover:bg-${color}-500/10 transition-all duration-300`}>
        <span className={`text-${color}-400 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
    </motion.a>
  );
}