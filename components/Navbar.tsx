"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.getElementById(hash.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "About", href: "#about", isHash: true },
    { name: "Skills", href: "#skills", isHash: true },
    { name: "Projects", href: "/projects", isHash: false },
    { name: "Contact", href: "#contact", isHash: true },
    { name: "Qualifications", href: "/qualifications", isHash: false },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-gray-950/95 backdrop-blur-xl border-b border-purple-500/30 py-3 shadow-lg shadow-purple-500/5" 
            : "bg-gray-950/90 backdrop-blur-sm border-b border-purple-500/20 py-5"
        }`}
      >
        {/* Animated gradient line at bottom - always visible but subtle */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{ opacity: isScrolled ? 0.5 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo with Glow Effect */}
            <Link href="/" className="group relative">
              <motion.h1 
                className="text-2xl font-bold relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Sanjana
                </span>
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleHashClick(e, link.href)}
                      className="relative px-4 py-2 text-sm text-gray-300 hover:text-white transition-all duration-300 group"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-1/2 transition-all duration-300"></span>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-sm transition-all duration-300 group ${
                        pathname === link.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <motion.span 
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      {pathname === link.href && (
                        <motion.span 
                          layoutId="activeNav"
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Status Indicator with Pulse */}
            <motion.div 
              className="hidden md:flex items-center space-x-3"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="relative">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <motion.span 
                  className="absolute -inset-1 bg-green-500 rounded-full"
                  animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 0 : 0.5 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <motion.span 
                className="text-xs text-gray-400 font-mono"
                animate={{ color: isHovered ? "#a78bfa" : "#9ca3af" }}
              >
                system_online
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 top-5">
          <button className="text-gray-300 hover:text-purple-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}