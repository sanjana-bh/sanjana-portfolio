"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollToTop />
      <main className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Sections with IDs for navigation */}
          <section id="hero" className="scroll-mt-16">
            <Hero />
          </section>
          
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          
          <section id="skills" className="scroll-mt-16">
            <Skills />
          </section>
          
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
          
          <Footer />
        </div>

        {/* Custom Cursor (optional) */}
        <div className="hidden lg:block">
          <div className="custom-cursor" />
        </div>
      </main>
    </>
  );
}